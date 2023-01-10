/**
 * Making the Card flip by clicking
 */
function GenerateFlip() {
    const cards = document.querySelectorAll('.card')
    let amount = 0
    cards.forEach(card => {
        card.addEventListener('click', () => {
            amount = amount == 0 ? 180 : 0
            card.style.transform = `rotateY(${amount}deg)`
        })
    })

}

function SetFooterYear() {
    const footer_year = document.querySelector('footer section p span')
    footer_year.textContent = `${new Date().getFullYear()}`
}

function ModalInitiat() {
    const open_btn = document.querySelector('footer button')
    const close_btn = document.querySelector('#close-btn')
    const modal = document.querySelector('.modal')
    const content_modal = document.querySelector('.modal .content');

    open_btn.addEventListener('click', () => {
        modal.style.transform = 'translateX(0)'
        setTimeout(() => {
            content_modal.style.opacity = '1'
            close_btn.style.opacity = '1'
        }, 550)
    })
    close_btn.addEventListener('click', () => {

        setTimeout(() => {
            modal.style.transform = 'translateX(100%)'
        }, 350)
        content_modal.style.opacity = '0'
        close_btn.style.opacity = '0'
    })
}

SetFooterYear()
GenerateFlip()
ModalInitiat()