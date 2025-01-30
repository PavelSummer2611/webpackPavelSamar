import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', function () {
  let swiperInstances = [] // Массив для хранения всех Swiper-экземпляров

  function initSwipers() {
    const screenWidth = window.innerWidth
    const swiperElements = document.querySelectorAll('.swiper')

    if (screenWidth <= 768) {
      swiperElements.forEach((swiperEl, index) => {
        if (!swiperInstances[index]) {
          swiperInstances[index] = new Swiper(swiperEl, {
            spaceBetween: 16,
            width: 272,
            slidesPerView: 1,
            spaceBetween: 10,
            modules: [Pagination],
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        }
      })
    } else {
      swiperInstances.forEach((swiper, index) => {
        if (swiper) {
          swiper.destroy(true, true)
          swiperInstances[index] = null

          // Удаляем классы Swiper, чтобы он не оставался активным
          swiperElements[index].classList.remove(
            'swiper-initialized',
            'swiper-container'
          )
        }
      })
    }
  }

  // Инициализация при загрузке
  initSwipers()

  // Обработчик изменения размера экрана
  window.addEventListener('resize', () => {
    setTimeout(initSwipers, 100)
  })
})

// показать скрыть текст

const textPad = document.querySelector('.content-text__text--pad')
const textComputer = document.querySelector('.content__text--computer')
const textExpand = document.querySelector('.text-expand')

textExpand.addEventListener('click', function () {
  if (
    textPad.classList.contains('show_text') &&
    textComputer.classList.contains('show_text')
  ) {
    textPad.classList.remove('show_text')
    textComputer.classList.remove('show_text')
    textExpand.innerText = 'Читать далее'
  } else {
    textPad.classList.add('show_text')
    textComputer.classList.add('show_text')
    textExpand.innerText = 'Скрыть'
  }
})

// показать скрыть бренды

const brands = document.querySelector('.brand-slider')
const buttonBrands = document.querySelector('.expand__brands')

buttonBrands.addEventListener('click', function () {
  if (brands.classList.contains('show')) {
    brands.classList.remove('show')
    buttonBrands.innerText = 'Показать'
  } else {
    brands.classList.add('show')
    buttonBrands.innerText = 'Скрыть'
  }
})

// показать скрыть виды техник

const techTypes = document.querySelector('.techTypes_swiper')
const buttonTechTypes = document.querySelector('.btn-show--techTypes')

buttonTechTypes.addEventListener('click', function () {
  if (techTypes.classList.contains('show')) {
    techTypes.classList.remove('show')
    buttonTechTypes.innerText = 'Показать'
  } else {
    techTypes.classList.add('show')
    buttonTechTypes.innerText = 'Скрыть'
  }
})

//показать звонок

const chatMenu = document.querySelector('.popup--feedback')
const chatButton = document.querySelector('.burger-menu__chat__button')

const callMenu = document.querySelector('.popup--call')
const callButton = document.querySelector('.burger-menu__call__button')

const iconClose = document.querySelector('.icon--close')
const substrate = document.querySelector('.substrate')

const burgerButton = document.querySelector('.burger__button')
const burgerMenu = document.querySelector('.burger-menu')

const headerCallBtn = document.querySelector('.call__button')
const headerChatBtn = document.querySelector('.chat__button')

//открыть закрыть бургер

burgerButton.addEventListener('click', function () {
  burgerMenu.classList.add('show--burger')
  substrate.classList.add('show-substrate')
})

iconClose.addEventListener('click', function () {
  callMenu.classList.remove('show__popup--call')
  chatMenu.classList.remove('show__popup--feedback')
  substrate.classList.remove('show-substrate')
  burgerMenu.classList.remove('show--burger')
})

substrate.addEventListener('click', function () {
  callMenu.classList.remove('show__popup--call')
  substrate.classList.remove('show-substrate')
  chatMenu.classList.remove('show__popup--feedback')
  burgerMenu.classList.remove('show--burger')
})

// функция на открытие закрытие попапов

function closePopup(popup, button) {
  const buttonClose = popup.querySelector('.icon--close')
  buttonClose.classList.add('close')

  const close = document.querySelector('.close')

  if (popup === callMenu) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--call')
      substrate.classList.remove('show-substrate')
      buttonClose.classList.remove('close')
      burgerMenu.classList.remove('show--burger')
    })
  } else if (popup === chatMenu) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--feedback')
      substrate.classList.remove('show-substrate')
      buttonClose.classList.remove('close')
      burgerMenu.classList.remove('show--burger')
    })
  }
}

//показать звонок из бургера

callButton.addEventListener('click', function () {
  callMenu.classList.add('show__popup--call')
  substrate.classList.add('show-substrate')
  chatMenu.classList.remove('show__popup--feedback')

  closePopup(callMenu)
})

//показать фидбек из бургера

chatButton.addEventListener('click', function () {
  chatMenu.classList.add('show__popup--feedback')
  substrate.classList.add('show-substrate')
  callMenu.classList.remove('show__popup--call')

  closePopup(chatMenu)
})

//кнопки из хедера
//call

headerCallBtn.addEventListener('click', function () {
  callMenu.classList.add('show__popup--call')
  substrate.classList.add('show-substrate')
  chatMenu.classList.remove('show__popup--feedback')

  closePopup(callMenu)
})

//feedback

headerChatBtn.addEventListener('click', function () {
  chatMenu.classList.add('show__popup--feedback')
  substrate.classList.add('show-substrate')
  chatMenu.classList.remove('show__popup--call')

  closePopup(chatMenu)
})
