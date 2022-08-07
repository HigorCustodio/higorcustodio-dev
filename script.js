const imageNav = document.querySelector(".image-nav")
const buttonImageNav = document.querySelector(".icone-menu")
const buttonFechar = document.querySelector(".botaoFechar")

buttonImageNav.addEventListener('click', function(){

imageNav.classList.add('remove');
buttonFechar.classList.remove('remove');
})

buttonFechar.addEventListener('click', function(){
    imageNav.click()
    buttonFechar.classList.add('remove');

    imageNav.classList.remove('remove');
})