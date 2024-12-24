const loadAllProduct=()=>{//Anonymous Functions
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                  // console.log(data)
                  displayProduct(data);
            })
}

const cartCount=document.getElementById("count").innerHTML
let convertedCount=parseInt(cartCount);

const displayProduct=(products)=>{
      const productContainer=document.getElementById("product-container");
      
      //products is an array which has 
      products.forEach(product=>{
            // console.log(product);
            const div=document.createElement("div");//create a div
            div.classList.add("product-cart");//add a class name on div 
            
            //slice(koto theke start hobe,koto ta latter rakhbo)
            //slice(0,10) zero letter theke 10 ta latter porjonto thakbe er por er ghula bad jabe
            //div tar moddhe h tag p tag image create kore eder value gula assign kore dibo
            div.innerHTML=`
            <img class="cart-img" src=${product.image} alt=""/>
            <h5>${product.title.slice(0,10)}</h5>            
            <p>${product.description.slice(0,50)}</p>
            <p>Price: ${product.price}</p>
            <button onclick="singleProduct('${product.id}')">Details</button>
            <button onclick="handleAddToCart('${product.title}','${product.price}')">Add Cart</button>
            `;
            //onclick er maddhome handleAddToCart function ti call hocche & perameter pass hocche
            productContainer.appendChild(div);
      });
};


const handleAddToCart=(Pname,price)=>{
      convertedCount++;
      document.getElementById("count").innerText=convertedCount;
      const container=document.getElementById("cart");//HTML File er Cart div ta ke container variable e store korlam
      const div=document.createElement("div");
      div.classList.add("cart-info")
      div.innerHTML=`
      <h3>${Pname.slice(0,10)}</h3>
      <p class="cart-price">${price}</p>
     
      `
      container.appendChild(div);
      updateTotal();
};
loadAllProduct();
//anonimus function kono perameter nei na
//const function_name=()=>{
//      }
const updateTotal=()=>{
      const allPrices=document.getElementsByClassName("cart-price");
      let current=0;
      for(const element of allPrices){
            //element e single product er price ache,price ta string e ache & HTML inner text e ache
            current+=parseFloat(element.innerText);
            console.log(current);
      }
      document.getElementById("total").innerText=current.toFixed(2);
      //to.Fixed(doshomik er pore koi ghor nibe)
};


const singleProduct=(id)=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
}