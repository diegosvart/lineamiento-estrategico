# --------------------------------------------------------------------------
# Setup-Worktrees.ps1
# --------------------------------------------------------------------------
# Propósito: Crear carpetas físicas separadas (worktrees) para cada frente 
# operativo (vault, ms365, dashboard, planning) bajo el estándar "Admin-Driven".
# --------------------------------------------------------------------------

$BaseRepoPath = Get-Location
$ParentPath = Split-Path -Path $BaseRepoPath -Parent
$RepoName = Split-Path -Path $BaseRepoPath -Leaf

Write-Host "--- Iniciando configuración de Worktrees por Frente ---" -ForegroundColor Cyan
Write-Host "Repo base: $BaseRepoPath"
Write-Host "Ubicación destino: $ParentPath"

$Workspaces = @(
    @{ Name = "vault"; Branch = "workspace/vault"; Folder = "vault-2026" },
    @{ Name = "ms365"; Branch = "workspace/ms365"; Folder = "ms365-2026" },
    @{ Name = "dashboard"; Branch = "workspace/dashboard"; Folder = "dashboard-2026" },
    @{ Name = "planning"; Branch = "workspace/planning"; Folder = "planning-2026" }
)

foreach ($ws in $Workspaces) {
    $TargetPath = Join-Path -Path $ParentPath -ChildPath $ws.Folder
    
    if (Test-Path -Path $TargetPath) {
        Write-Host "[SKIP] Carpeta $($ws.Folder) ya existe en $TargetPath" -ForegroundColor Yellow
    } else {
        Write-Host "[WAIT] Creando worktree para $($ws.Name) en $($ws.Folder)..." -ForegroundColor Gray
        try {
            git worktree add $TargetPath $ws.Branch
            Write-Host "[ OK ] Worktree $($ws.Name) creado exitosamente." -ForegroundColor Green
        } catch {
            Write-Host "[ERR] Error al crear worktree $($ws.Name): $_" -ForegroundColor Red
        }
    }
}

Write-Host "--- Proceso Terminado ---" -ForegroundColor Cyan
Write-Host "Recuerda abrir cada carpeta en su propio IDE según el SCOPE.md correspondiente."
