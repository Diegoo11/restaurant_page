import plate1 from  './plate1.jpg'
import plate2 from  './plate2.jpg'
import plate3 from  './plate3.gif'
import plate4 from  './plate4.jpg'
import plate5 from  './plate5.jpg'
import plate6 from  './plate6.jpg'
import plate7 from  './plate7.jpg'
import plate8 from  './plate8.jpg'


function makeShop (){
    const content = document.createElement('div');
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

    const products = document.createElement('div')
    products.classList.add('products')
        const product1 = document.createElement('div')
        product1.classList.add('product')
        const btns1 = document.createElement('div')
        btns1.classList.add('btns')
            const plato1 = document.createElement('img')
            plato1.src = plate1
            const buy1  = document.createElement('button')
            buy1.classList.add('buy')
            const info1 = document.createElement('button')
            info1.classList.add('info')
            buy1.innerHTML = 'Comprar'
            info1.innerHTML = 'Ver mas'

        const product2 = document.createElement('div')
        product2.classList.add('product')
        const btns2 = document.createElement('div')
        btns2.classList.add('btns')
            const plato2 = document.createElement('img')
            plato2.src = plate2
            const buy2  = document.createElement('button')
            buy2.classList.add('buy')
            const info2 = document.createElement('button')
            info2.classList.add('info')
            buy2.innerHTML = 'Comprar'
            info2.innerHTML = 'Ver mas'

        const product3 = document.createElement('div')
        product3.classList.add('product')
        const btns3 = document.createElement('div')
        btns3.classList.add('btns')
            const plato3 = document.createElement('img')
            plato3.src = plate3
            const buy3  = document.createElement('button')
            buy3.classList.add('buy')
            const info3 = document.createElement('button')
            info3.classList.add('info')
            buy3.innerHTML = 'Comprar'
            info3.innerHTML = 'Ver mas'

        const product4 = document.createElement('div')
        product4.classList.add('product')
        const btns4 = document.createElement('div')
        btns4.classList.add('btns')
            const plato4 = document.createElement('img')
            plato4.src = plate4
            const buy4  = document.createElement('button')
            buy4.classList.add('buy')
            const info4 = document.createElement('button')
            info4.classList.add('info')
            buy4.innerHTML = 'Comprar'
            info4.innerHTML = 'Ver mas'

        const product5 = document.createElement('div')
        product5.classList.add('product')
        const btns5 = document.createElement('div')
        btns5.classList.add('btns')
            const plato5 = document.createElement('img')
            plato5.src = plate5
            const buy5  = document.createElement('button')
            buy5.classList.add('buy')
            const info5 = document.createElement('button')
            info5.classList.add('info')
            buy5.innerHTML = 'Comprar'
            info5.innerHTML = 'Ver mas'

        const product6 = document.createElement('div')
        product6.classList.add('product')
        const btns6 = document.createElement('div')
        btns6.classList.add('btns')
            const plato6 = document.createElement('img')
            plato6.src = plate6
            const buy6  = document.createElement('button')
            buy6.classList.add('buy')
            const info6 = document.createElement('button')
            info6.classList.add('info')
            buy6.innerHTML = 'Comprar'
            info6.innerHTML = 'Ver mas'

        const product7 = document.createElement('div')
        product7.classList.add('product')
        const btns7 = document.createElement('div')
        btns7.classList.add('btns')
            const plato7 = document.createElement('img')
            plato7.src = plate7
            const buy7  = document.createElement('button')
            buy7.classList.add('buy')
            const info7 = document.createElement('button')
            info7.classList.add('info')
            buy7.innerHTML = 'Comprar'
            info7.innerHTML = 'Ver mas'

        const product8 = document.createElement('div')
        product8.classList.add('product')
        const btns8 = document.createElement('div')
        btns8.classList.add('btns')
            const plato8 = document.createElement('img')
            plato8.src = plate8
            const buy8  = document.createElement('button')
            buy8.classList.add('buy')
            const info8 = document.createElement('button')
            info8.classList.add('info')
            buy8.innerHTML = 'Comprar'
            info8.innerHTML = 'Ver mas'

        btns1.append(plato1)
        btns1.append(buy1)
        btns1.append(info1)
        product1.append(btns1)

        btns2.append(plato2)
        btns2.append(buy2)
        btns2.append(info2)
        product2.append(btns2)
        
        btns3.append(plato3)
        btns3.append(buy3)
        btns3.append(info3)
        product3.append(btns3)

        btns4.append(plato4)
        btns4.append(buy4)
        btns4.append(info4)
        product4.append(btns4)

        btns5.append(plato5)
        btns5.append(buy5)
        btns5.append(info5)
        product5.append(btns5)

        btns6.append(plato6)
        btns6.append(buy6)
        btns6.append(info6)
        product6.append(btns6)

        btns7.append(plato7)
        btns7.append(buy7)
        btns7.append(info7)
        product7.append(btns7)

        btns8.append(plato8)
        btns8.append(buy8)
        btns8.append(info8)
        product8.append(btns8)

        products.append(product1)
        products.append(product2)
        products.append(product3)
        products.append(product4)
        products.append(product5)
        products.append(product6)
        products.append(product7)
        products.append(product8)

    const footer = document.createElement('footer');
        const span8 = document.createElement('span');

        span8.innerHTML = '<a href="https://github.com/Diegoo11">Restaurants Page by Diegoo11</a>'
        footer.append(span8)   
    
    content.append(header)  
    content.append(products)  
    content.append(footer)
    
    return content
}    
export {makeShop}