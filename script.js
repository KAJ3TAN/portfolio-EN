const headerText = document.querySelector('.header-text')
const messageArray = [`Hi, I'am Kajetan Szymura`]
const span = document.querySelector('.year')
const nav = document.querySelector('nav')
const homeText = document.querySelector('.home-text')
const menuBtn = document.querySelector('.menu-btn')
const smallMenu = document.querySelector('.small-menu')
const body = document.querySelector('body')
const menuItems = document.querySelectorAll('.small-menu a')

let textPosition = 0
let speed = 80

const typewriter = () => {
	headerText.innerHTML = messageArray[0].substring(0, textPosition)

	if (textPosition++ != messageArray[0].length) {
		setTimeout(typewriter, speed)
	}
}

const menuAction = () => {
	smallMenu.classList.toggle('action')
	body.classList.toggle('block')
	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			smallMenu.classList.remove('action')
			body.classList.remove('block')
		})
	})
}

const getTime = () => {
	const now = new Date()

	const year = now.getFullYear()

	span.textContent = year
}

document.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		nav.classList.add('scrolled')
	} else if (window.scrollY == 0) {
		nav.classList.remove('scrolled')
	}
})

window.addEventListener('load', typewriter)

menuBtn.addEventListener('click', () => {
	menuAction()
})

getTime()

AOS.init({
	duration: 1200,
})
