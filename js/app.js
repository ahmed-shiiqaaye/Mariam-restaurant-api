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

// filter menu
const allFilterItems = document.querySelectorAll('.Filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');


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

// nextBttn.addEventListener('click',()=>{
//     wrapperTestimonials.scrollLeft += wrapperTestimonials.getBoundingClientRect().width + 10
// })

// edamam food api key
let burgerElement = document.getElementById('grid-burger');
let ChickenElement = document.getElementById('grid-chicken');
let pastaElement = document.getElementById('grid-pasta');
let riceElement = document.getElementById('grid-rice');
let pizzaElement = document.getElementById('grid-pizza');
let noodlesElement = document.getElementById('grid-noodles');
let cakesElement = document.getElementById('grid-cakes');
function dataBurger(food,parent){
    
    let api = `868b48235b786f4a046ef5b6a1e6829e	`
    let id = `3421c647`
    fetch(`https://api.edamam.com/search?app_id=${id}&app_key=${api}&q=${food}`)
    .then(resp => resp.json())
    .then(data =>{
        data.hits.forEach((recipe)=>{
            const {healthLabels, image,label, source, calories, totalWeight} = recipe.recipe
            parent.innerHTML +=`
            <div class="Filter-item all burger">
                <img src="${image}" alt="">
                <div class="info">
                    <h3 class="title">${label}</h3>
                    <div class="second">Health Labels</div>
                    <p>${healthLabels.slice(-6).join(' __ ')}</p>
                  <div class="flex">
                        <h4 class="price">${calories.toFixed(2)}Cal</h4>
                        <div class="button">${totalWeight.toFixed(1)}Gram</div>
                   </div>
               </div>
            </div>`
        })
    })
 }
 window.addEventListener('load',()=>{
     dataBurger('burger',burgerElement);
     dataBurger('chicken',ChickenElement);
     dataBurger('pasta',pastaElement);
     dataBurger('rice',riceElement);
     dataBurger('pizza',pizzaElement);
     dataBurger('noodles',noodlesElement);
     dataBurger('cakes',cakesElement);
})

