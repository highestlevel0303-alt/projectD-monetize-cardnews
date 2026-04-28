@echo off
title CardnewsDemo
color 0A
cls
echo.
echo ======================================
echo   CARDNEWS DEMO - Claude Code Workflow
echo ======================================
echo.
timeout /t 3 /nobreak > nul
echo [1/4] Project files ready:
dir /B *.html *.mjs
echo.
timeout /t 4 /nobreak > nul
echo [2/4] Running puppeteer renderer...
echo.
node convert-projectD-monetize.mjs
echo.
timeout /t 3 /nobreak > nul
echo [3/4] Generated PNGs:
dir /B projectD-monetize-*.png
echo.
timeout /t 3 /nobreak > nul
echo [4/4] Done! 12 cardnews PNGs ready for Instagram upload.
timeout /t 5 /nobreak > nul
exit
