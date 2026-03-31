param(
  [ValidateSet("planning", "vault", "ms365", "dashboard")]
  [string]$TargetWorkspace = "planning"
)

$ErrorActionPreference = "Stop"


function Get-WorkspaceFromBranch {
  param([string]$BranchName)

  switch -Regex ($BranchName) {
    '^workspace/planning$' { return "planning" }
    '^feature/planning-.+$' { return "planning" }
    '^fix/planning-.+$' { return "planning" }
    '^workspace/vault$' { return "vault" }
    '^workspace/ms365$' { return "ms365" }
    '^workspace/dashboard$' { return "dashboard" }
    default { return "unknown" }
  }
}

function Get-TargetConfig {
  param([string]$Workspace)

  switch ($Workspace) {
    "planning" {
      return @{
        Scope = "planificacion/SCOPE.md"
        Handoff = "planificacion/memory-ciclo-vida-planes.md"
        BranchHint = "workspace/planning | feature/planning-* | fix/planning-*"
        CheckoutCmd = "git checkout workspace/planning"
        WorktreeBranch = "workspace/planning"
      }
    }
    "vault" {
      return @{
        Scope = "SCOPE.md"
        Handoff = "planificacion/memory-handoff-vault.md"
        BranchHint = "workspace/vault"
        CheckoutCmd = "git checkout workspace/vault"
        WorktreeBranch = "workspace/vault"
      }
    }
    "ms365" {
      return @{
        Scope = "ms365-sync/SCOPE.md"
        Handoff = "planificacion/memory-handoff-ms365.md"
        BranchHint = "workspace/ms365"
        CheckoutCmd = "git checkout workspace/ms365"
        WorktreeBranch = "workspace/ms365"
      }
    }
    "dashboard" {
      return @{
        Scope = "dashboard/SCOPE.md"
        Handoff = "planificacion/memory-handoff-dashboard.md"
        BranchHint = "workspace/dashboard"
        CheckoutCmd = "git checkout workspace/dashboard"
        WorktreeBranch = "workspace/dashboard"
      }
    }
  }
}

function Get-WorktreePathForBranch {
  param([string]$BranchName)

  $lines = git worktree list --porcelain
  $currentPath = $null

  foreach ($line in $lines) {
    if ($line -match '^worktree (.+)$') {
      $currentPath = $Matches[1]
      continue
    }
    if ($line -eq "branch refs/heads/$BranchName" -and $currentPath) {
      return $currentPath
    }
  }

  return $null
}

$branch = (git branch --show-current).Trim()
if (-not $branch) {
  Write-Error "No se pudo detectar la rama actual."
  exit 1
}

$detectedWorkspace = Get-WorkspaceFromBranch -BranchName $branch
$target = Get-TargetConfig -Workspace $TargetWorkspace
$targetWorktreePath = Get-WorktreePathForBranch -BranchName $target.WorktreeBranch

if ($detectedWorkspace -ne $TargetWorkspace) {
  Write-Host "Sesion invalida para operaciones de '$TargetWorkspace'." -ForegroundColor Red
  Write-Host "Workspace/rama detectada: $detectedWorkspace / $branch"
  Write-Host "Ramas esperadas para '$TargetWorkspace': $($target.BranchHint)"
  Write-Host ""
  Write-Host "Debes cambiar de rama para ejecutar las operaciones de este workspace." -ForegroundColor Yellow
  Write-Host "Comando sugerido: $($target.CheckoutCmd)"
  if ($targetWorktreePath) {
    Write-Host "Sugerencia: abre el repositorio/worktree correspondiente:"
    Write-Host "cd $targetWorktreePath"
  }
  exit 1
}

$required = @(
  "planificacion/MEMORY.md",
  "gestion-trabajo/tablero-maestro.md",
  $target.Scope,
  $target.Handoff
)

$missing = @()
foreach ($path in $required) {
  if (-not (Test-Path $path)) {
    $missing += $path
  }
}

Write-Host "Workspace objetivo: $TargetWorkspace"
Write-Host "Rama detectada: $branch"
Write-Host "SCOPE esperado: $($target.Scope)"
Write-Host "Handoff esperado: $($target.Handoff)"

if ($TargetWorkspace -eq "planning") {
  Write-Host "Modo planning: rama valida para Codex planning." -ForegroundColor Green
}

if ($missing.Count -gt 0) {
  Write-Host "Faltan archivos de arranque:" -ForegroundColor Red
  $missing | ForEach-Object { Write-Host " - $_" }
  exit 1
}

Write-Host "Validacion OK: contexto minimo de arranque presente." -ForegroundColor Green
exit 0
