const carousel = document.querySelector(".carousel"),
    carouselItems = document.querySelectorAll(".carousel-item"),
    loading = document.querySelector(".loading.main")

function carouselAutoWidth() {
    const mainWidth = (100 / Math.floor(carousel.childElementCount)) / 2

    for (let carouselItem of carouselItems) {
        carouselItem.style.width = mainWidth + "%"
    }
}

function activeSlide(e) {
    for (let carouselItem of carouselItems) {
        carouselItem.style.width = (100 / Math.floor(carousel.childElementCount)) / 2 + "%"
        carouselItem.classList.remove("active")
    }
    e.currentTarget.classList.add("active")
    e.currentTarget.style.width = (carousel.childElementCount * (100 / Math.floor(carousel.childElementCount))) / 2 + "%"
}

function autoActiveSlide() {
    Array.from(carouselItems).at(0).classList.add("active")
    Array.from(carouselItems).at(0).style.width = "50%"
}

window.addEventListener("load", () => {
    carouselAutoWidth()
    autoActiveSlide()

    loading.style.display = "none"
})

carouselItems.forEach(item => {
    item.addEventListener("click", activeSlide)
})