const d = document;



export default function burgerMenu(btn, nav, linkNav) {
    const $navMenu = d.querySelector(nav)
    const $btnToggle = d.querySelector(btn)
    const $li = d.querySelectorAll(linkNav)

    $btnToggle.addEventListener("click", ()=> {
        $navMenu.classList.toggle("nav-open")
        $btnToggle.classList.toggle("is-active")    
    })
    
    $li.forEach(el => {
        el.addEventListener("click", ()=> {
            $navMenu.classList.toggle("nav-open")
            $btnToggle.classList.toggle("is-active")    
        })
    })
    
}

