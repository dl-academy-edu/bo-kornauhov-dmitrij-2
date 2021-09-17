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
