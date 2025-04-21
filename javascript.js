const search = document.querySelector('.search')
const input = document.querySelector('.input')
const srchbtn = document.querySelector('.srchbtn')


srchbtn.addEventListener('click',() =>{
    search.classList.toggle('active')
    input.focus()

})

const cards = document.querySelectorAll('.card')


window.addEventListener('scroll', checkCards)


function checkCards(){
    const triggerBottom = window.innerHeight

    cards.forEach(card =>{
        const cardTop = card.getBoundingClientRect().top


        if (cardTop < triggerBottom){
            card.classList.add('cardeffect')
        } else{
            card.classList.remove('cardeffect')
        }

    })
}


const streamcards = document.querySelectorAll('.streamcard')


window.addEventListener('scroll', checkStreamcard)


function checkStreamcard(){
    const triggerBottom = window.innerHeight 


    streamcards.forEach(streamcard =>{
        const streamcardTop = streamcard.getBoundingClientRect().top


        if (streamcardTop < triggerBottom){
            streamcard.classList.add('cardeffect')
        } else{
            streamcard.classList.remove('cardeffect')
        }

    })
}



const laravalpics = document.querySelectorAll('.laravalpic')


window.addEventListener('scroll', checkLaravalpic)


function checkLaravalpic(){
    const triggerBottom = window.innerHeight


    laravalpics.forEach(laravalpic =>{
        const laravalpicTop = laravalpic.getBoundingClientRect().top


        if (laravalpicTop < triggerBottom){
            laravalpic.classList.add('cardeffect')
        } else{
            laravalpic.classList.remove('cardeffect')
        }

    })
}

