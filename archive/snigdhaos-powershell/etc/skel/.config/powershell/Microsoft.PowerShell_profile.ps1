$Host.UI.RawUI.WindowTitle = "SNIGDHA OS > PowerShell🔥"

function prompt {
    $ESC = [char]27
    $user = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
    $currentLocation = $executionContext.SessionState.Path.CurrentLocation
    $gitBranch = ""
    if (Test-Path .git -or (Get-Command git -ErrorAction SilentlyContinue)) {
        $gitBranch = $(git rev-parse --abbrev-ref HEAD 2>$null)
        if ($gitBranch) {
            $gitBranch = " ($gitBranch)"
        }
    }
    "$ESC[0;36m┌── $user $gitBranch ➜ $ESC[0;31m$currentLocation$($([char]13))`n$ESC[0;36m└── 🌟 SnigdhaOS PowerShell 🔥 > $ESC[00m"
}
