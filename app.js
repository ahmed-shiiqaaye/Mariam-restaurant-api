// header toggle
let navbarLinks = document.querySelector('.nav_links');
let menuToggle = document.querySelector('.menu-bars');
let mobileLinks = document.querySelectorAll('.nav_link');

// toggling function
menuToggle.addEventListener('click',()=>{
    navbarLinks.classList.toggle('mobile-menu')
    if(navbarLinks.classList.contains('mobile-menu')){
        menuToggle.innerHTML = `<i class="fa fa-times"></i>`
    }else{
        menuToggle.innerHTML = `<i class="fa fa-bars"></i>`
    }
})
// remove if the user clicks the links
mobileLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        if(navbarLinks.classList.contains('mobile-menu')){
            navbarLinks.classList.remove('mobile-menu')
        }
        menuToggle.innerHTML = `<i class="fa fa-bars"></i>`
    })
})



// Home text data
let homeText = [
    {
        h2:'fast food restaurant',
        p:'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.',
    },
    {
        h2:'welcome to deliceous food',
        p:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis commodi quaerat, numquam facilis, maxime quae consequatur corporis consequuntur at, aliquid repellat necessitatibus neque. Dolore necessitatibus voluptatem fugiat aut adipisci.'
    },
    {
        h2:'nice meeal',
        p:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis commodi quaerat, numquam facilis, maxime quae consequatur corporis consequuntur at, aliquid repellat necessitatibus neque. Dolore necessitatibus voluptatem fugiat aut adipisci."
    }   
]
// DOM elements selectors
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let h2 = document.querySelector('.text h2');
let paragraph = document.querySelector('.text p');
let crouselRadio = document.querySelector('.crousel-radio');
let current = 0
crouselRadio.innerText =  `${current + 1} / ${homeText.length}`
// slider increase to right
next.onclick = (e) =>{
    e.preventDefault()
    current++
    if(current > homeText.length - 1){
        current = 0
    }
    let item = homeText[current]
    h2.textContent = item.h2
    paragraph.textContent = item.p
    crouselRadio.innerText =  `${current + 1} / ${homeText.length}`
}
// slider decrease to left
prev.onclick = (e) =>{
    e.preventDefault()
    current--
    if(current < 0){
        current = homeText.length - 1
    }
    let item = homeText[current]
    h2.textContent = item.h2
    paragraph.textContent = item.p
    crouselRadio.innerText =  `${current + 1} / ${homeText.length}`
    paragraph.textContent = item.p
}
// filter menu
const allFilterItems = document.querySelectorAll('.Filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        allFilterBtns.forEach(btn=>{
            btn.classList.remove('active')
        })
        allFilterBtns[i].classList.add('active')
    });
});

allFilterBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        showContent(btn)
    })
})
function showContent(btn){
    allFilterItems.forEach((item)=>{
        if(item.classList.contains(btn.id)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}

//Testimonial slider 
let userCard = document.querySelectorAll('.user');
let nextBttn = document.querySelector('.testimonials .next');
let prevBttn = document.querySelector('.testimonials .prev');
let wrapperTestimonials = document.querySelector('.wrapper');

nextBttn.addEventListener('click',()=>{
    wrapperTestimonials.scrollLeft += wrapperTestimonials.getBoundingClientRect().width + 10
})