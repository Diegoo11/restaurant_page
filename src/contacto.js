import sushi00 from './sushi.png'
import ico01 from './arroba.png'
import ico02 from './telephone.png'
import ico03 from './gps.png'

function makeContacto(){
    const content = document.createElement('div')
    content.id = 'content'

    const header = document.createElement('header');
        const span0 = document.createElement('span')
        const div0 = document.createElement('div')
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')
        const span3 = document.createElement('span')

        span0.innerHTML = 'Home'
        span0.id = 'home'
        span1.innerHTML = "Menu"
        span1.id = 'menu'
        span2.innerHTML = "Galeria"
        span2.id = 'galeria'
        span3.innerHTML = "Contacto"
        span3.id = 'contacto'

        header.append(span0)
        div0.append(span1)
        div0.append(span2)
        div0.append(span3)
        header.append(div0)
    
    const contact = document.createElement('div')
        const sushi = document.createElement('img')
        sushi.src = sushi00
        const contacto = document.createElement('div')
        const span00 = document.createElement('span')
        const span01 = document.createElement('span')
        const ico1 = document.createElement('img')
        const span02 = document.createElement('span')
        const ico2 = document.createElement('img')
        const span03 = document.createElement('span')
        const ico3 = document.createElement('img')
        const span04 =document.createElement('span')
        const span05 =document.createElement('span')
        const span06 =document.createElement('span')

        contact.classList.add('contact')
        sushi.classList.add('sushi')
        contacto.classList.add('contacto')
        span00.classList.add('contacttitle')

        

        span00.textContent = 'CONTACT US'
        span01.textContent = 'diegoo11@gmail.com'
        span02.textContent = '935761921'
        span03.textContent = 'Av. Merry 1180 Of.703, Miraflores'

        span04.append(ico1)
        span05.append(ico2)
        span06.append(ico3)
        
        span04.append(span01)
        span05.append(span02)
        span06.append(span03)
        contacto.append(span00)
        contacto.append(span04)
        contacto.append(span05)
        contacto.append(span06)
        contact.append(sushi)
        contact.append(contacto)

        ico1.src = ico01
        ico2.src = ico02
        ico3.src = ico03

    const footer = document.createElement('footer');
        const span8 = document.createElement('span');
        
        span8.innerHTML = '<a href="https://github.com/Diegoo11">Restaurants Page by Diegoo11</a>'

        footer.append(span8)   
        
    content.append(header)
    content.append(contact)
    content.append(footer)

    return content
}
export {makeContacto}