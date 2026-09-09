$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
$bundledNode = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodeExecutable = if ($nodeCommand) { $nodeCommand.Source } else { $null }
if ($nodeExecutable) {
    $major = [int]((& $nodeExecutable -p "process.versions.node").Split(".")[0])
    if ($major -lt 22) { $nodeExecutable = $null }
}
if (-not $nodeExecutable -and (Test-Path -LiteralPath $bundledNode)) { $nodeExecutable = $bundledNode }
if (-not $nodeExecutable) { throw "Install Node.js 22 or newer, then run this launcher again." }
if (-not (Test-Path "node_modules/next/dist/bin/next")) { throw "Install dependencies with npm ci first." }
& $nodeExecutable node_modules/next/dist/bin/next dev --webpack --hostname 127.0.0.1

