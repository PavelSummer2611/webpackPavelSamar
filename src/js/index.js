import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// if (window.innerWidth <= 768) {
//   const swiper = new Swiper('.swiper-1', {
//     spaceBetween: 16,
//       width: 272,
//     modules: [Pagination],
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     slidesPerView: 1,
//     spaceBetween: 10,
//   });
// }

// if (document.body.matchMedia < 768) {
//   swiper1.init(swiper)
//   swiper260.init(swiper)
// }

// const swiper240 = new Swiper('.swiper-1', {
//   spaceBetween: 16,
//   width: 272,

//   modules: [Pagination],
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewPort: true
//   },
//   on: {
//     resize: function enableOnlyMobile(swiper) {
//       if (768 < window.innerWidth) {
//         swiper.disable()
//         swiper.el.classList.add('-non-slider')
//       } else {
//         swiper.enable()
//         swiper.el.classList.remove('-non-slider')
//       }
//     }
//   }
// })

// свайпер на бренды

let swiper1
function initSwiper1() {
  // Проверяем, если ширина экрана меньше или равна 767px
  if (window.matchMedia('(max-width: 767px)').matches) {
    // Если Swiper еще не инициализирован, создаем его
    if (!swiper1) {
      swiper1 = new Swiper('.swiper-1', {
        spaceBetween: 16,
        width: 272,
        centeredSlides: false,
        loop: false,
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // slidesPerView: 2,
        // spaceBetween: 10,
        centerInsufficientSlides: true
      })
    }
  } else {
    // Если ширина больше 767px и Swiper был инициализирован, уничтожаем его
    if (swiper1) {
      swiper1.destroy(true, true)
      swiper1 = null
    }
  }
}
// Запускаем функцию при загрузке страницы
initSwiper1()
// Следим за изменением ширины окна и вызываем функцию
window.addEventListener('resize', initSwiper)

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

// кнопка показать все бренды

// const items = document.querySelectorAll('.brand-list-item')
// const toggleButton = document.querySelector('.expand__brands')
// let displayCount = 6 // Начальное количество видимых элементов

// function updateItems() {
//   // Показать нужное количество элементов
//   for (let i = 0; i < items.length; i++) {
//     if (window.innerWidth >= 1120 && displayCount === 6) {
//       displayCount = 8
//     }
//     if (i < displayCount) {
//       items[i].classList.remove('hidden')
//     } else {
//       items[i].classList.add('hidden')
//     }
//   }
//   // Обновить текст кнопки
//   if (displayCount === 11) {
//     toggleButton.textContent = 'Скрыть'
//     toggleButton.classList.add('rotate')
//   } else {
//     toggleButton.textContent = 'Показать все'
//     toggleButton.classList.remove('rotate')
//   }
// }

// toggleButton.addEventListener('click', function () {
//   // Если отображаем 6 или 8 элементов, переключаем на 11
//   if (displayCount === 6 || displayCount === 8) {
//     displayCount = 11
//   } else if (
//     // Если отображаем все 11 элементов, вернём к 6 или 8
//     displayCount === 11 &&
//     window.innerWidth >= 768
//   ) {
//     displayCount = 6
//   } else if (displayCount === 11 && window.innerWidth >= 1120) {
//     displayCount = 8
//   }

//   updateItems()
// })

// // Первоначальное отображение элементов
// updateItems()
