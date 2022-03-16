import {makeHome} from './home.js'
import {makeShop} from './shop.js'
import {makeContacto} from './contacto.js'

document.body.append(makeHome());
console.log('Hola Diego ')

window.addEventListener('click', (e)=>{
    console.log(e.target.id)
    switch(e.target.id){
        case 'menu':
            document.body.innerHTML = ''
            document.body.append(makeHome());
            break;
        case 'galeria':
            document.body.innerHTML = ''
            document.body.append(makeShop());
            break;
        case 'contacto':
            document.body.innerHTML = ''
            document.body.append(makeContacto());
            break;
    }

})
