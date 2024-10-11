const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const CardManager = require('./logic/outer/CardManager');

const electronReload = require('electron-reload');
var cardManager;
electronReload(__dirname);

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true
        },
    });

    win.loadFile('views/menu.html')
}

app.whenReady().then(() => {
    createWindow();
    cardManager = new CardManager(path.join(__dirname, 'cards.json'));

    ipcMain.handle('get-cards', (event, arg) => {
        return cardManager.getCards();
    });
})

if (module.hot) {
    module.hot.accept();
}