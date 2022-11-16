// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require('electron');

const createApp = () => {
  const window = new BrowserWindow({
    width: 600,
    height: 600,
    titleBarStyle: 'hiddenInset',
  });

  window.loadFile('../index.html');
};

app.whenReady().then(() => {
  createApp();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createApp();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});
