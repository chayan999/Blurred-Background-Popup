const containerEl = document.querySelector('.container')
const containerBtnEl = document.querySelector('.btn');
const popupContainerEl = document.querySelector('.popup-container');
const btnPopupEl = document.querySelector('.btn-popup');
const classIconEl = document.querySelector('.class-icon')

containerBtnEl.addEventListener('click', () => {
    containerEl.classList.add('active')
    popupContainerEl.classList.remove('active')
});

classIconEl.addEventListener('click', () => {
    popupContainerEl.classList.add('active')
    containerEl.classList.remove('active')
})
