const btnClick = document.querySelector('.main-box__link--click')
const btnDelete = document.querySelector('.main-modal__btn--delete')
const mainModal = document.querySelector('.main-modal')

btnClick.addEventListener('click', function() {
    mainModal.classList.add('main-modal--open')
})

btnDelete.addEventListener('click', function() {
    mainModal.classList.remove('main-modal--open')
})