const { app, BrowserWindow } = require('electron')

if(require('electron-squirrel-startup'))
  app.quit();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
  })
  win.loadFile('dist/index.html')
}

app.whenReady().then(() => {
  createWindow()
})