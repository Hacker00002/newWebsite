const all = document.querySelector('.all2')
const menuIcon = document.querySelector('.menu')
const menuIcon2 = document.querySelector('.menu2')

menuIcon.addEventListener('click', function(){
    all.style.transform = "translateX(0%)"
})

menuIcon2.addEventListener('click', function(){
    all.style.transform = "translateX(100%)"
})

const allForm = document.querySelector('#formAll')
const buttonForm = document.querySelector('.button2')
const bgForm = document.querySelector('.bg')

buttonForm.addEventListener('click', function(e){
    allForm.style.transform = "translateY(0%)"
    bgForm.style.display = "block" 
})

bgForm.addEventListener('click', function(){
    allForm.style.transform = "translateY(-200%)"
    bgForm.style.display = "none"

    fixedEl.style.transform = "translateX(-850%)"
})


const nameEl = document.querySelector('#name')
const telEl = document.querySelector('#tel')
const textEl = document.querySelector('#textarea')
const checkEl = document.querySelector('#checkbox')
const fixedEl = document.querySelector('.fixed')

allForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    
    if(nameEl.value == '' || telEl.value == '' || textEl.value == ''){
        fixedEl.style.transform = "translateX(0%)"
        fixedEl.style.backgroundColor = 'red'
        fixedEl.style.color = 'white'
        fixedEl.textContent = 'Ваша заявка не заполнена'
    }else{
        fixedEl.style.transform = "translateX(0%)"
    }

    
        
    nameEl.value = ''
    telEl.value = ''
    textEl.value = ''
    checkEl.checked = false
})

// section-server
const allObject = document.querySelector('.object')
const elForm = document.querySelector('#form')
const inputSearch = document.querySelector('#inputSearch')
const inputBtn = document.querySelector('#inputBtn')

function renderCards(cardsItems, pok=""){

    allObject.innerHTML = ''

    cardsItems.forEach((element) =>{

        const newDiv = document.createElement('div')

        newDiv.className = 'all5'
        
        newDiv.innerHTML = `
        <img src="${element.img}" alt="" class="imgsNew">
        <h4 class="text5">${element.shop}</h4>
        <h5 class="text6">${element.price}</h5>
        <a href="#" class="button5">${element.button}</a>
        <p class="pr4">${element.news}</p>
        `
        allObject.appendChild(newDiv)
    });
}
renderCards(allArray)

elForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const elSearchBtn = inputSearch.value.trim()
    const elReg = new RegExp(elSearchBtn, "gi")

    const filterItem = allArray.filter(elem => elem.shop.match(elReg))

    if(filterItem.length > 0){
        renderCards(filterItem)
    }else if(filterItem.length == 0){
        alert("Нет такой информации ✖️✖️✖️")
    }
    inputSearch.value = ''
})

renderCards(allArray)

// modal-page
const elUrl = document.querySelector("#url")
const eltext1 = document.querySelector("#text1")
const elnum2 = document.querySelector("#num1")
const eltext2 = document.querySelector("#text2")
const eltext3 = document.querySelector("#text3")
const bg1 = document.querySelector(".bgs3")
const bg2 = document.querySelector(".buttonn")
const action1 = document.querySelector("#action")

bg2.addEventListener('click', function(e){
    e.preventDefault()
    action1.style.transform = "translateY(0%)"

    bg1.style.display = "block"
})

bg1.addEventListener('click', function(e){
    e.preventDefault()
    action1.style.transform = "translateY(-380%)"

    bg1.style.display = "none"
})

action1.addEventListener('submit', function(e){
    e.preventDefault()

    const allArrayTwo = {
        img: `${elUrl.value}`,
        shop: `${eltext1.value}`,
        price: `от ${elnum2.value} ₽`,
        button: `${eltext2.value}`,
        news: `${eltext3.value}`,
    }

    if(elUrl.value == '' || eltext1.value == '' || elnum2.value == '' || eltext2.value == '' || eltext3.value == ''){
        alert('Заполните список')
    }

    // newDiv.innerHTML = ''

    allArray.push(allArrayTwo)
    renderCards(allArray)

    elUrl.value = ''
    eltext1.value = ''
    elnum2.value = ''
    eltext2.value = ''
})