// toggle menu

const toggleMenuBtn = document.querySelector('.toggle-menu')

toggleMenuBtn.addEventListener('click', ()=>{
    const navGrid = document.querySelector('.nav-grid')

    navGrid.classList.toggle('open-menu')
})

// toggle theme

const toggleThemeBtn = document.querySelector('.toogle-theme')

toggleThemeBtn.addEventListener('click', ()=>{
    localStorage.getItem('theme') === 'light' ? localStorage.setItem('theme','dark') : localStorage.setItem('theme','light')   
    document.body.classList.toggle('dark-theme')

})

function setTheme(){
    if(localStorage.getItem('theme') === 'light'){
        document.body.classList.remove('dark-theme')
    }    
}

setTheme()

// active each knowledge tabs

const skillTab = document.querySelectorAll('article.front-skills')

skillTab.forEach(tab => tab.addEventListener("click", ()=>{
    
    tab.classList.toggle('active-tab')

}))

// projects slider

const projectSliderContainer = document.querySelector('.projects-slider')

new Glider(projectSliderContainer,{
    slidesToShow: 1,
    draggable: false,
    arrows:{
        prev: '.glider-prev',
        next: '.glider-next'
    },
    dots: '.dots'
});
