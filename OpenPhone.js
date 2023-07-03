
let SeeInsidePhone = document.getElementById('opeNPhone')
let flash = document.getElementById('falsh')
let check = true;
let openFls = document.getElementById('openFlash')
flash.addEventListener('click', e => {
    if(check){
        openFls.style.display = 'block'
        check = false

    }else {
        openFls.style.display = 'none'
        check = true
    }
})
let camera = document.getElementById('camera')
let BtnOpen = document.getElementById('openPhone')

BtnOpen.addEventListener('click', OpenPhone)


function OpenPhone(){
    SeeInsidePhone.style.display = 'block'
    BtnOpen.style.display = 'none'
    flash.style.display = 'none'
    camera.style.display = 'none'


}