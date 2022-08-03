// Import modules.
const { app, BrowserWindow } = require('electron');

// Import start file of NodeJs app.
const server = require('./serve');

// The createWindow() function loads your web page into a new BrowserWindow instance.
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Permet de relier l'affichage du localhost sur l'application Electron.
    win.loadURL('http://localhost:3000');
};

// Calling your function when the app is ready.
app.whenReady().then(() => {
    createWindow()
});

// Quit the app when every windows are close.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});