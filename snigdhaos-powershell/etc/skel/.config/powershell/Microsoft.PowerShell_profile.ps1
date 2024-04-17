$Host.UI.RawUI.WindowTitle = "SNIGDHA OS > PowerShell🔥"
function prompt() 
{ 
  $ESC=$([char]27)
  "$ESC[0;36m┌──I'm $(whoami)➜ $ESC[0;31m$($executionContext.SessionState.Path.CurrentLocation)$("`r`n$ESC[0;36m└──eshanized PowerShell🔥>$ESC[00m" * ($nestedPromptLevel + 1)) ";
}
