const main = document.getElementById("products");

const products = [
  {
    id: 0,
    name: "groot",
    description: "I am Groot",
    cost: 50.54,
    image: ["picture1image1.jpg", "picture1image2.jpg", "picture1image3.jpg"],
    promo: 30
  },

  {
    id: 1,
    name: "sexy",
    description: "image of a beautiful girl",
    cost: 60.54,
    image: ["item1image1.jpg", "item1image2.jpg"],
    promo: 30
  },
  {
    id: 2,
    name: "boat",
    description: "image of a elene",
    cost: 90.54,
    image: ["item2image1.jpg", "item2image2.jpg"],
    promo: 30
  },
  {
    id: 3,
    name: "boat2",
    description: "I am Groot",
    cost: 50.54,
    image: ["picture2image1.jpg", "picture2image2.jpg", "picture2image3.jpg"],
    promo: 30
  },
  {
    id: 4,
    name: "boat3",
    description: "image of a beautiful girl",
    cost: 60.54,
    image: ["picture3image1.jpg", "picture3image2.jpg", "picture3image3.jpg"],
    promo: 30
  },
  {
    id: 5,
    name: "boat4",
    description: "image of a elene",
    cost: 90.54,
    image: ["picture4image1.jpg", "picture4image2.jpg", "picture4image3.jpg"],
    promo: 30
  },
  {
    id: 6,
    name: "groot",
    description: "I am Groot",
    cost: 50.54,
    image: ["picture5image1.jpg", "picture5image2.jpg", "picture5image3.jpg"],
    promo: 30
  },
  {
    id: 7,
    name: "sexy",
    description: "image of a beautiful girl",
    cost: 60.54,
    image: ["picture6image1.jpg", "picture6image2.jpg", "picture6image3.jpg"],
    promo: 30
  },
  {
    id: 8,
    name: "elene",
    description: "image of a elene",
    cost: 90.54,
    image: ["picture7image1.jpg", "picture7image2.jpg", "picture7image3.jpg"],
    promo: 30
  },
  {
    id: 9,
    name: "groot",
    description: "I am Groot",
    cost: 50.54,
    image: ["picture8image1.jpg", "picture8image2.jpg", "picture8image3.jpg"],
    promo: 30
  },
  {
    id: 10,
    name: "sexy",
    description: "image of a beautiful girl",
    cost: 60.54,
    image: ["picture9image1.jpg", "picture9image2.jpg", "picture9image3.jpg"],
    promo: 30
  },
  {
    id: 11,
    name: "elene",
    description: "image of a elene",
    cost: 90.54,
    image: ["picture10image1.jpg", "picture10image2.jpg", "picture10image3.jpg"],
    promo: 30
  }
];

products.forEach(({ id, name, description, cost, image, promo }) => {
  main.innerHTML += `<div id="name-${id}" class="product-container">
        <div class="detail">
        <div><span class="name">${name}</span></div>
      
        <div><span class="description">${description.split("").slice(0, 20).join("") + "..."}</span> </div>
        <div><span class="price">Price: <span class="cost">${cost}</span><span class="promo"> ${promo}% OFF</span>
        </span> </div>
            <button id="cart-${id}" class="add">add to cart</button>
         </div>
        <div class="image-container"><img class="image"  src="${image[0]}" ></div> 
        

    </div>`;
});
const imageClass = document.getElementsByClassName("image-container");
const images = [...imageClass];
console.log(images)
images.forEach((img) => {
    img.addEventListener("click", () => {
      const foundImage = products.find((el) => `name-${el.id}` === img.parentElement.id);
      const { id, name, description, cost, image, promo } = foundImage;
  
      selectedItem.innerHTML = ` 
          <div id="selected">
          <button onclick="toStore()" id="back-to-store"><i class="fa-solid fa-xmark"></i></button>
            <img id="selected-image" src="${image[0]}" />
            <button onclick = "previousImage()" id="previous-image">
              <i class="fa-solid fa-backward"></i></button
            ><button onclick="nextImage()" id="next-image"><i class="fa-solid fa-forward"></i></button>
         </div>
        <div id="item-description">
          <div id="selected-name"><span>${name}</span></div>
         <div><span>$${cost}<span class="promo"> ${promo}% OFF</span></span></div>
         <div id="describe">
         <h4>description</h4><p>${description}</p></div>
         <button onclick="selectedAddItem(${id})" id= "selected-btn" class="add-selected">add to cart</button>
         
        </div>`;
      currentImage = image[0];
  
      selectedItem.style.display = "block";
      main.classList.add("hide-product")
      z = 0;
    });
  });
  const backToLoginBtn = document.getElementById("back-to-login");
const closeAccountBtn = document.getElementById("close-account")
const totalBtc = document.getElementById("total-btc")
const navbarLoginBtn = document.getElementById("navbar-login-btn");
const submitLogin = document.getElementById("fill-login");
const submitCreateAccount = document.getElementById("fill");
const navbar = document.getElementById("nav-btn")
const navContainer = document.getElementById("navbar");
const addCart = document.getElementsByClassName("add");
const cartBtn = [...addCart];
const cart = document.getElementById("cart");
const viewCart = document.getElementById("view-cart");
const items = [];
const item = {};
const totalItem = document.getElementById("total");
const cartList = document.getElementById("cart-list");
const selectPayment = document.getElementById("payment-method");
const cancelBtnBtc = document.getElementById("cancel-btn-btc");
const confirmBtnBtc = document.getElementById("confirm-btn-btc");
const hideCart = document.getElementById("hide-cart");
const totalDiv = document.getElementById("total-items");
const checkoutDiv = document.getElementById("checkout");
const payDiv = document.getElementById("pay-div");
const checkoutBtn = document.getElementById("pay");
const selectedItem = document.getElementById("selected-item");



const createAccount = document.getElementById("create-account");
const createOrLogin = document.getElementById("create-or-login");
const accountContainer = document.getElementById("account-container");

let currentImage;
let total = 0;
let cartBoolean = false;
let listArr = [];
let z = 0;
let accountCreatedSuccessfully = false;
let navBoolean = false;

navbar.addEventListener("click", ()=>{
navBoolean = !navBoolean;
if (navBoolean === true){
navContainer.classList.add("move-navbar");
navbar.innerHTML =`<i class="fa-solid fa-arrow-left"></i>`} else{
  navContainer.classList.remove("move-navbar");
navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}
})


const updateCartList = (arr) => {
  cartList.innerHTML = "";
  total = 0;
  if (listArr.length) {
    arr.forEach(({ id, name, cost, costCount }) => {
      cartList.innerHTML += `<p class="items"><span><span class="item-name">${name}</span></span><span class="item-cost"><button onclick="addCount(${id})">+</button><span id="${id}-cost">${costCount}</span><button onclick="substractCount(${id})"> - </button>
    $${Number(
      (cost * costCount).toFixed(2)
    )}<button class="delete-item" onclick="deleteItem(${id})"><i class="fa-solid fa-xmark"></i></button></span></p>`;

      total += cost * costCount;
      totalItem.textContent = `$${total.toFixed(2)}`;
      payDiv.style.display = "block";
      totalDiv.style.display = "block";
    });
  } else {
    cartList.innerHTML = `<div id="empty-cart"><h2>your cart is empty</h2></div>`;
    payDiv.style.display = "none";
    totalDiv.style.display = "none";
  }
};

const deleteItem = (ele) => {
  const elementoIndex = listArr.findIndex((el) => el.id === ele);
  const elemento = listArr.find((el) => el.id === ele);
  item[elemento.name] = 0;
  listArr.splice(elementoIndex, 1);

  updateCartList(listArr);
};
const addCount = (ele) => {
  const elemento = listArr.find((el) => el.id === ele);
  elemento.costCount++;
  updateCartList(listArr);
};
const substractCount = (ele) => {
  const elemento = listArr.find((el) => el.id === ele);
  if (elemento.costCount > 1) {
    elemento.costCount--;
    updateCartList(listArr);
  }
};

const toStore = () => {
  main.classList.remove("hide-product")
  selectedItem.style.display = "none";
};

const nextImage = () => {
  const chooseImage = document.getElementById("selected-image");
  const imageIndex = products.findIndex((el) => el.image[a] === currentImage);

  z++;
  if (z >= products[imageIndex].image.length) {
    z = 0;
    chooseImage.src = products[imageIndex].image[z];
  } else {
    chooseImage.src = products[imageIndex].image[z];
    
  }
};
let a = 0;
const previousImage = () => {
  const chooseImage = document.getElementById("selected-image");
  const imageIndex = products.findIndex((el) => el.image[a] === currentImage);

  z--;
  if (z < 0) {
    z = products[imageIndex].image.length - 1;

    chooseImage.src = products[imageIndex].image[z];
  } else {

    chooseImage.src = products[imageIndex].image[z];
  }
};

viewCart.addEventListener("click", () => {
  cart.style.display = "block";
});

cartBtn.forEach((el) => {
  el.addEventListener("click", () => addItem(el));
});




selectPayment.addEventListener("change", (e) => {
  const payments = document.getElementsByClassName("payment");
  const allPayment = [...payments];
  const btc = document.getElementById("btc");
  const paypal = document.getElementById("paypal");
  const cashapp = document.getElementById("cashapp");


  allPayment.forEach((el) => {
    el.style.display = "none";
    btc.style.display = "none";
    cashapp.style.display = "none";
    paypal.style.display = "none";
  });
  const showPayment = document.getElementById(e.target.value);

  showPayment.style.display = "block";
  if (e.target.value === "no-payment") {
    confirmBtnBtc.style.display = "none";
  } else {
    confirmBtnBtc.style.display = "block";
  }
});
hideCart.addEventListener("click", () => {
  cartBoolean = !cartBoolean;
  if (cartBoolean === true) {
    cart.style.display = "block";
    main.classList.add("hide-product");
    hideCart.textContent = "hide cart";
  } else {
    cart.style.display = "none";
    hideCart.textContent = "show cart";
    main.classList.remove("hide-product")
  }
});
checkoutBtn.addEventListener("click", () => {
    if (accountCreatedSuccessfully === true){
 totalBtc.textContent = total;
  totalDiv.style.display = "none";
  payDiv.style.display = "none";
  cartList.style.display = "none";
  checkoutDiv.style.display = "block";
} else{
    openLoginPage()
}
});
cancelBtnBtc.addEventListener("click", () => {
    
  totalDiv.style.display = "block";
  payDiv.style.display = "block";
  cartList.style.display = "block";
  checkoutDiv.style.display = "none";
});

confirmBtnBtc.addEventListener("click", ()=>{
    
    const notReceived = document.getElementsByClassName("not-received");
    const received = [...notReceived];

    received.forEach((el)=>{
        el.style.display = "block"
})
   
    setTimeout(()=>{
        received.forEach((el)=>{
            el.style.display = "none"
    })
        alert("payment not recieved")
       
    }, 5000)
})

const addItem = (el) => {
  hideCart.style.display = "block";

  const papa = products.find((product) => `cart-${product.id}` === el.id);
  let tempItem = {};
  tempItem = {
    id: papa.id,
    name: papa.name,
    cost: papa.cost,
    costCount: 1,
  };

  const { id, name, cost } = tempItem;
  items.push(tempItem);

  item[id] = (item[id] || 0) + 1;

  const count = item[id];

  if (count === 1) {
    listArr.push(tempItem);
  } else {
    let numItem = listArr.find((el) => el.id === id);

    numItem.costCount += 1;
  }
  
  updateCartList(listArr);
  totalDiv.style.display = "block";
  payDiv.style.display = "block";
  cartList.style.display = "block";
  checkoutDiv.style.display = "none";
  
};

const selectedAddItem = (el) => {
  hideCart.style.display = "block";

  const papa = products.find((product) => product.id === el);
  let tempItem = {};
  tempItem = {
    id: papa.id,
    name: papa.name,
    cost: papa.cost,
    costCount: 1,
  };

  const { id, name, cost } = tempItem;
  items.push(tempItem);

  item[id] = (item[id] || 0) + 1;

  const count = item[id];

  if (count === 1) {
    listArr.push(tempItem);
  } else {
    let numItem = listArr.find((el) => el.id === id);

    numItem.costCount += 1;
  }
  updateCartList(listArr);
  totalDiv.style.display = "block";
  payDiv.style.display = "block";
  cartList.style.display = "block";
  checkoutDiv.style.display = "none";
  
};



const closeCreateAccount =()=>{
createAccount.style.display = "none";

}
const closeLogin =()=>{
  
accountContainer.style.display = "none"
createOrLogin.style.display = "block"


}
const openCreateAccount = ()=>{ 
  
    createOrLogin.style.display = "none";
    accountContainer.style.display="block"
    

}
const openCreateOrLogin = ()=>{
    accountContainer.style.display = "none";
    createOrLogin.style.display = "block";
    
}
const openLoginPage = ()=>{
 
    createAccount.style.display = "block";
    
    navContainer.classList.remove("move-navbar")
    navBoolean = false;
    navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}
const showShop =()=>{
    cartBoolean = false;
    cart.style.display ="none";
    selectedItem.style.display = "none"
    main.classList.remove("hide-product")
    navContainer.classList.remove("move-navbar");
    navBoolean = false;
    navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}
const showCart =()=>{
    main.classList.add("hide-product");
    hideCart.style.display = "block";
    hideCart.textContent = "hide cart";
    updateCartList(listArr);
    cartBoolean = true;
    cart.style.display ="block";
    selectedItem.style.display = "none"
    
    navContainer.classList.remove("move-navbar")
    navBoolean = false;
    navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`

}

submitCreateAccount.addEventListener("submit", (e)=>{
    e.preventDefault()
    const inputEl = document.getElementById("email-input")
    logginInFunc(inputEl)
})
submitLogin.addEventListener("submit", (e)=>{
    
    e.preventDefault()
    const inputEl = document.getElementById("login-email-input")
    logginInFunc(inputEl)
    
})
const logginInFunc =(el)=>{
    
    const inputEmail = el.value;
    const editedEmail = inputEmail.split("").splice(0, 5).join("") + "****.com"
   
    navbarLoginBtn.textContent = editedEmail;
    navbarLoginBtn.innerHTML = editedEmail;
    navbarLoginBtn.disabled = true;
    navbarLoginBtn.style.color = "white";
    createOrLogin.innerHTML += `<div id="logging-in">logging in...</div>`
    accountContainer.innerHTML +=`<div id="logging-in">logging in...</div>`;
    setTimeout(closeCreateAccount, 2000)
    accountCreatedSuccessfully = true;

}
closeAccountBtn.addEventListener('click', closeCreateAccount)
backToLoginBtn.addEventListener("click", closeLogin)




