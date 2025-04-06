/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]
// Создаём элементы слайдера

const mySlider = document.createElement('div')
mySlider.classList.add('mySlider')
document.body.appendChild(mySlider)

const slide_1 = document.createElement("img")
slide_1.setAttribute("src", WEB_TECH_IMAGES[0])
slide_1.classList.add('slide')
mySlider.append(slide_1)

const slide_2 = document.createElement("img")
slide_2.setAttribute("src", WEB_TECH_IMAGES[1])
slide_2.classList.add('slide')
mySlider.append(slide_2)

const slide_3 = document.createElement("img")
slide_3.setAttribute("src", WEB_TECH_IMAGES[2])
slide_3.classList.add('slide')
mySlider.append(slide_3)

const slides = Array.from(mySlider.querySelectorAll('img'))

const slideCount = slides.length
let slideIndex = 0

const prevBtn = document.createElement("button")
prevBtn.textContent = 'prev'
prevBtn.addEventListener("click", showPrevSlide)
document.body.append(prevBtn)

const nextBtn = document.createElement("button")
nextBtn.textContent = 'next'
nextBtn.addEventListener("click", showNextSlide)
document.body.append(nextBtn)

// Функция для показа предыдущего слайда

function showPrevSlide() {
   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
   updateSlider()
}

// Функция для показа следующего слайда

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider()
}

// Функция для обновления отображения слайдера

function updateSlider() {
    slides.forEach((slide, index) => {
        if(index === slideIndex) {
            slide.style.display = 'block'
        } else {
            slide.style.display = 'none'
        }
    })
}

updateSlider()
