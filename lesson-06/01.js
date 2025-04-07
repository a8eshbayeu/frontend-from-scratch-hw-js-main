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
mySlider.append(slide_1)

const slide_2 = document.createElement("img")
slide_2.setAttribute("src", WEB_TECH_IMAGES[1])
mySlider.append(slide_2)

const slide_3 = document.createElement("img")
slide_3.setAttribute("src", WEB_TECH_IMAGES[2])
mySlider.append(slide_3)

const sliderItems = Array.from(mySlider.children)

const buttons = document.createElement('div')
buttons.classList.add('controls')
document.body.append(buttons)

const prevBtn = document.createElement("button")
prevBtn.textContent = 'prev'
prevBtn.setAttribute('id', 'prev')
buttons.append(prevBtn)

const nextBtn = document.createElement("button")
nextBtn.textContent = 'next'
nextBtn.setAttribute('id', 'next')
buttons.append(nextBtn)



sliderItems.forEach(function (slide, index) {
    // Скрываем все слайды кроме первого
    if(index !== 0) slide.style.display = 'none'

    // Добавляем индексы
    slide.dataset.index = index

    //Добавляем data атрибут active для первого/активного слайда
    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайдам
    // slide.addEventListener('click', function () {
    //     showNextSlide('next')
    // })
})

nextBtn.onclick = function () {
    console.log('next slide')
    showNextSlide('next')
}

prevBtn.onclick = function () {
    console.log('prev slide')
    showNextSlide('prev')
}

function showNextSlide (direction) {
    // Скрываем текущий слайд
    const currentSlide = mySlider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
    currentSlide.style.display = 'none'
    currentSlide.removeAttribute('data-active')

    //Рассчитываем следующий индекс
    let nextSlideIndex
    if(direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    }

    //Показываем следующий слайд
    const nextSlide = mySlider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.style.display = 'block'
    nextSlide.setAttribute('data-active', '')
}

