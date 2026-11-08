@echo off
chcp 65001 > nul
title Отправка проекта на GitHub
echo =======================================================
echo   Привет, Георгий! Отправляем файлы на твой GitHub...
echo =======================================================
echo.
cd /d "C:\Users\giogo\OneDrive\Desktop\Security"

git push -u origin main

echo.
echo =======================================================
echo   Если написано "Everything up-to-date" или "branch 'main' set up",
echo   значит ВСЕ ФАЙЛЫ УСПЕШНО НА GITHUB!
echo =======================================================
pause
