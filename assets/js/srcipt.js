
let btn_abrir=document.getElementById('btn-abrir')
let menu_mobile=document.getElementById('menu-mobile')
let overlay =document.getElementById('overlay-menu-mobile')

btn_abrir.addEventListener('click',()=>{

    menu_mobile.classList.add('abrir')
})


menu_mobile.addEventListener('click',()=>{

    menu_mobile.classList.remove('abrir')
})
overlay.addEventListener('click',()=>{

    menu_mobile.classList.remove('abrir')
})