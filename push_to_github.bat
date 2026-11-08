@echo off
cd /d "%~dp0"
echo ===================================================
echo Pushing Security project to GitHub...
echo ===================================================
echo.
git push -u origin main
echo.
echo ===================================================
echo Finished! If no errors above, refresh your GitHub.
echo ===================================================
pause
