const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    getCards: () => ipcRenderer.invoke('get-cards'),
})