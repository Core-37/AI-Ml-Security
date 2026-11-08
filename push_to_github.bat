@echo off
cd /d "%~dp0"
echo ===================================================
echo   g37 - Syncing Security37 project to GitHub
echo ===================================================
echo.
echo [1/3] Adding all new and modified files...
git add -A

echo.
echo [2/3] Committing changes...
git commit -m "Update project materials and notes (g37)"

echo.
echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ===================================================
echo   Finished! All changes are live on GitHub.
echo ===================================================
pause
