// POPUP

var popupButton = document.querySelector(".button-popup-js")
var popup = document.querySelector(".popup")
var popupCloseButton = document.querySelector(".popup-close-js")
var inputFocus = popup.querySelector("input")

popupButton.addEventListener("click", function () {
	popup.classList.add("popup_open")
	inputFocus.focus()
})

popupCloseButton.addEventListener("click", function () {
	popup.classList.remove("popup_open")
	popupButton.focus()
})

window.addEventListener("keydown", function (e) {
	if (e.code === "Escape" && popup.classList.contains("popup_open")) {
		popup.classList.remove("popup_open")
		popupButton.focus()
	}
})

// MENU

var menuOpen = document.querySelector(".menu__open--js")
var menu = document.querySelector(".menu")
var menuClose = document.querySelector(".menu__close--js")
var body = document.body
var menuFocus = document.querySelector(".menu_focus")

menuOpen.addEventListener("click", function () {
	menu.classList.add("menu_open")
	body.classList.add("body_scroll")
	menuOpen.classList.add("disabled")
	menuClose.classList.add("active")
	menu.classList.add("active")
	menuFocus.focus()
})

menuClose.addEventListener("click", function () {
	menu.classList.remove("menu_open")
	body.classList.remove("body_scroll")
	menuOpen.classList.remove("disabled")
	menuClose.classList.remove("active")
	menu.classList.remove("active")
})

// MUSIC

var audio = document.querySelector("audio")
audio.volume = 0.5
