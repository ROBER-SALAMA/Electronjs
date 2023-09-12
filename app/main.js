//?  Importamos los módulos de la biblioteca electron
const { app, BrowserWindow } = require('electron')

let mainWindow = null;

app.on('ready', () => {
    //? BrowserWindow se utiliza para crear ventanas, Crea una nueva ventana de la aplicación 
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(__dirname + '/app/index.html'); //? carga el achivo a la ventana principal
})