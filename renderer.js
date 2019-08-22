// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var ById = function (id) {
    return document.getElementById(id);
}

const ses = win.webContents.session
      
//Crear un boton que destruya el cache o los archivos continuos 

document.getElementById('cache').onclick = function() {
    ses.clearCache(() => {
       alert("Cache cleared!");
     });
}
    

       //hacer que la página sea visible en varios webviews
       //hacer que se haga scroll en todos los webviews al mismo tiempo 

var omni = ById('url'),
    view = ById('view');

function updateURL (event) {
    if (event.keyCode === 13) {
        omni.blur();
        let val = omni.value;
        let https = val.slice(0, 8).toLowerCase();
        let http = val.slice(0, 7).toLowerCase();
        if (https === 'https://') {
            view.loadURL(val);
        } else if (http === 'http://') {
            view.loadURL(val);
        } else {
        view.loadURL('http://'+ val);
        }
    }
}

function updateNav (event) {
    omni.value = view.src;
}

omni.addEventListener('keydown', updateURL);