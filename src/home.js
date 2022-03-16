import rest1 from './photo1.jpg'
import rest2 from './photo2.jpeg'

function makeHome (){
    const content = document.createElement('div');
    content.id = 'content'

    const header = document.createElement('header');
        const span0 = document.createElement('span')
        const div0 = document.createElement('div')
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')
        const span3 = document.createElement('span')

        span0.innerHTML = 'Home'
        span1.innerHTML = "Menu"
        span2.innerHTML = "Galeria"
        span3.innerHTML = "Contacto"

        header.append(span0)
        div0.append(span1)
        div0.append(span2)
        div0.append(span3)
        header.append(div0)
    
    const photo1 = document.createElement('div');
        const img1 = document.createElement('img')
        const span4 = document.createElement('span')  
        const div1 = document.createElement('div')
        const span5 = document.createElement('span')

        img1.id = 'img1'
        img1.src = rest1
        span4.innerHTML = '<dfn>"Cualquiera puede cocinar"</dfn>'
        span5.innerHTML = 'Gaston Acurio.'

        photo1.classList.add('photo1')
        photo1.append(img1)
        photo1.append(span4)
        div1.append(span5)
        photo1.append(div1)

    const photo2 = document.createElement('div');
        const img2 = document.createElement('img')
        const span6 = document.createElement('span');
        const div2  = document.createElement('div')
        const span7 = document.createElement('span')
        span7.classList.add('span7')

        img2.id = 'img2'
        img2.src = rest2
        span6.innerHTML = '<dfn>"De los mejores restaurantes que he visitado"</dfn>'
        span7.innerHTML = 'Anita de las alturas.'

        photo2.classList.add('photo2')
        photo2.append(img2)
        photo2.append(span6)
        div2.append(span7)
        photo2.append(div2)

    const footer = document.createElement('footer');
        const span8 = document.createElement('span');
        
        span8.innerHTML = '<a href="https://github.com/Diegoo11">Restaurants Page by Diegoo11</a>'

        footer.append(span8)

    content.append(header)  
    content.append(photo1)  
    content.append(photo2)
    content.append(footer)

    return content
}
export {makeHome}