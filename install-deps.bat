@echo off
echo Installing Node.js and dependencies...
winget install OpenJS.NodeJS
timeout /t 10
refreshenv
npm install
npm run dev
pause
