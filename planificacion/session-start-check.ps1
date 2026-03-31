$ErrorActionPreference = "Stop"

$branch = (git branch --show-current).Trim()

if (-not $branch) {
  Write-Error "No se pudo detectar la rama actual."
  exit 1
}

$scope = $null
$handoff = $null
$validPlanning = $false

switch -Regex ($branch) {
  '^workspace/planning$' {
    $scope = "planificacion/SCOPE.md"
    $handoff = "planificacion/memory-ciclo-vida-planes.md"
    $validPlanning = $true
    break
  }
  '^feature/planning-.+$' {
    $scope = "planificacion/SCOPE.md"
    $handoff = "planificacion/memory-ciclo-vida-planes.md"
    $validPlanning = $true
    break
  }
  '^fix/planning-.+$' {
    $scope = "planificacion/SCOPE.md"
    $handoff = "planificacion/memory-ciclo-vida-planes.md"
    $validPlanning = $true
    break
  }
  '^workspace/vault$' {
    $scope = "SCOPE.md"
    $handoff = "planificacion/memory-handoff-vault.md"
    break
  }
  '^workspace/ms365$' {
    $scope = "ms365-sync/SCOPE.md"
    $handoff = "planificacion/memory-handoff-ms365.md"
    break
  }
  '^workspace/dashboard$' {
    $scope = "dashboard/SCOPE.md"
    $handoff = "planificacion/memory-handoff-dashboard.md"
    break
  }
}

if (-not $scope) {
  Write-Host "Sesion invalida para arranque automatico." -ForegroundColor Red
  Write-Host "Rama detectada: $branch"
  Write-Host "Ramas soportadas: workspace/planning, feature/planning-*, fix/planning-*, workspace/vault, workspace/ms365, workspace/dashboard"
  exit 1
}

$required = @(
  "planificacion/MEMORY.md",
  "gestion-trabajo/tablero-maestro.md",
  $scope,
  $handoff
)

$missing = @()
foreach ($path in $required) {
  if (-not (Test-Path $path)) {
    $missing += $path
  }
}

Write-Host "Rama detectada: $branch"
Write-Host "SCOPE esperado: $scope"
Write-Host "Handoff esperado: $handoff"

if ($validPlanning) {
  Write-Host "Modo planning: rama valida para Codex planning." -ForegroundColor Green
} else {
  Write-Host "Modo no planning: usa el SCOPE del frente detectado." -ForegroundColor Yellow
}

if ($missing.Count -gt 0) {
  Write-Host "Faltan archivos de arranque:" -ForegroundColor Red
  $missing | ForEach-Object { Write-Host " - $_" }
  exit 1
}

Write-Host "Validacion OK: contexto minimo de arranque presente." -ForegroundColor Green
exit 0
