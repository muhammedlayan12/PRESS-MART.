


  // humburger
  const toggleButton = document.querySelector('.toggle-button');
  const navMenu = document.querySelector('.nav-menu');
  const closeButton = document.querySelector('.nav-menu .close-button');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });





  // Header remove on 796 width
  const toggleHandler = () => {
    const header = document.getElementsByClassName("header")[0];
    if (window.innerWidth <= 796) {
      header.style.display = "none";
    } else {
      header.style.display = "flex";
    }
  };

  window.addEventListener("resize", toggleHandler);
  window.addEventListener("load", toggleHandler);








  //changing number of refreshing a page
  function number() {
    let icon1 = document.getElementsByClassName("sup1")[0];
    let icon2 = document.getElementsByClassName("sup2")[0];
    let num1 = Math.floor(Math.random() * 20) + 5;
    let num2 = Math.floor(Math.random() * 20) + 5;
    icon1.innerText = num1;
    icon2.innerText = num2;
  }

  number();



  

  document.addEventListener('DOMContentLoaded', function() {
    function handleNavVisibility() {
        var humbarger = document.querySelector('.toggle-button');
        if (window.innerWidth < 796) {
            humbarger.style.display = 'block';
        } else if (window.innerWidth > 796) {
            if (humbarger) {
                humbarger.parentNode.removeChild(humbarger);
            }
        } else {
            console.log('hello');
        }
    }

    window.addEventListener('resize', handleNavVisibility);
    handleNavVisibility();
});



//CLICK ON VIEW MORE BUTTON AND JUMP 
let button = document.querySelector(".second");
button.addEventListener("click",function(){
  window.scrollTo({
    top:1050,
    behavior:"smooth"
  });
});


//CLICK ON SHOP NOW BUTTON AND  ON PRODUCTS SECTION 
let btn = document.querySelector(".first");
let product = document.querySelector(".container-pr");
btn.addEventListener("click",function(){
  let products = product.offsetTop;
  window.scrollTo({
    top:products,
    behavior:"smooth"
  });
});


let hero = document.querySelector(".hero");

if(window.innerWidth <= 440){
  hero.innerHTML = `
  <div class="img">
       <img src="/images/heroimg.png" alt="home img" />
     </div>
  <div class="content">
       <h2>Season <span>Sale</span></h2>
       <h1>MAN'S FASHION</h1>
       <h3>Min. 35-70% Off</h3>
       <a class="first">SHOP NOW</a>
       <a class="second">VIEW MORE</a>
     </div>`
     hero.style.flexDirection = `column`;
     hero.style.textAlign = 'center';
}
else{
  hero.style.display = 'flex';
}

// /*search bar*/

// let searchForm = document.querySelector('.search-form')

// document.querySelector('#search-btn').onclick = () => {
//     searchForm.classList.toggle('active')
//     navbar.classList.remove('active')
//     loginForm.classList.remove('active')
//     shoppingCart.classList.remove('active')
// }

// const likebtn = () => {
//   let likebtn = document.getElementById("like-btn");
//     likebtn.style.backgroundColor = 'red'
// }

// next to next offer
// let leftbtn = document.getElementsByClassName("left")[0];
// let rightbtn = document.getElementsByClassName("right")[0];

// leftbtn.addEventListener("click", function() {
//   let deals = document.getElementsByClassName("hot-deal")[0];
//   let firstDeal = deals.getElementsByClassName("deal")[0];
//   deals.appendChild(firstDeal); // Move the first deal to the end
// });

// rightbtn.addEventListener("click", function() {
//   let deals = document.getElementsByClassName("hot-deal")[0];
//   let lastDeal = deals.getElementsByClassName("deal")[deals.getElementsByClassName("deal").length - 1];
//   deals.insertBefore(lastDeal, deals.firstElementChild); // Move the last deal to the start
// });
  
