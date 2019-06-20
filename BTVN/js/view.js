const view = {}

view.showComponents = function(name) {
    switch(name){
        case 'register':{
            document.getElementById('app').innerHTML = components.register
            break
        }
    }
}

// show components to screen
// showComponents('regester')