import {app, BrowserWindow} from 'electron';

let mainWindow;

// ウィンドウを開く
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 200, height: 100, title: 'boilerplate'
  });

  mainWindow.loadURL(`file://${__dirname}/../view/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// アプリ起動準備完了したので、ウィンドウ表示
app.on('ready', createWindow);

// 全てのウィンドウが閉じたので、アプリも終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// ウィンドウがない状態で
// アクティブになったらウィンドウを開く
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
