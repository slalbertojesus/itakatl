const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    let win = new BrowserWindow({
        webPreferences: {
           webviewTag: true,
           nodeIntegrationInWorker: true
        }
      })
      
      win.loadURL(url.format ({
         pathname: path.join(__dirname, 'index.html'),
         protocol: 'file:',
         slashes: true
      }))
   }
   
   app.on('ready', createWindow)