const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const mainPIcDiv = document.getElementById('pic')
const pic1 = document.getElementById('pic1')
const pic2 = document.getElementById('pic2')
const pic3 = document.getElementById('pic3')
const allPic = document.getElementsByClassName('pics')

 pic1.style.marginLeft = '0%'

 let margin = 0

 let autoSlide = setInterval(function (){
    margin = margin - 100
    pic1.style.marginLeft = `${margin}%`
    if(margin < -200){ 
            margin = 0           
            pic1.style.marginLeft = `0%`
    }

 }, 1500)
 
 rightBtn.addEventListener('click', function (e){
        console.log(e.target)
        margin = margin - 100
        pic1.style.marginLeft = `${margin}%`
        if(margin < -200){ 
                margin = 0           
                pic1.style.marginLeft = `0%`
        }
    })

margin = margin - 200
leftBtn.addEventListener('click', function(){
    pic1.style.marginLeft = `${margin}%`
    margin = margin + 100
    if(margin < -200 || margin >0 ){
        margin = 0
        pic1.style.marginLeft = `${margin}%`
        margin = margin - 200

    }
})



  

