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
mySlider.classList.add('slider')
document.body.append(mySlider)

const slide_1 = document.createElement("img")
slide_1.setAttribute("src", WEB_TECH_IMAGES[0])
slide_1.classList.add('item')
mySlider.append(slide_1)

const slide_2 = document.createElement("img")
slide_2.setAttribute("src", WEB_TECH_IMAGES[1])
slide_2.classList.add('item')
mySlider.append(slide_2)

const slide_3 = document.createElement("img")
slide_3.setAttribute("src", WEB_TECH_IMAGES[2])
slide_3.classList.add('item')
mySlider.append(slide_3)


const prevBtn = document.createElement("button")
prevBtn.textContent = 'prev'
prevBtn.classList.add('prev')
prevBtn.onclick = function () {
    prevSlide()
}
mySlider.append(prevBtn)

const nextBtn = document.createElement("button")
nextBtn.textContent = 'next'
nextBtn.classList.add('next')
nextBtn.onclick = function () {
    nextSlide()
}
mySlider.append(nextBtn)

let slideIndex = 1
showSlides(slideIndex)
function nextSlide() {
    showSlides(slideIndex += 1)
}
function prevSlide() {
    showSlides(slideIndex -= 1)
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName('item')
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for(let slide of slides) {
        slide.style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
}
