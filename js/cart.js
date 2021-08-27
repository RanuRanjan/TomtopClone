
let cart_data=JSON.parse(localStorage.getItem("cart"));
// console.log(cart_data);

let data_img=document.getElementById("img")
let data_name=document.getElementById("name")
let data_price=document.getElementById("price")
let data_quant=document.getElementById("quantity")

// var total=0

cart_data.forEach(function (product) {

  let div_img = document.createElement("div");
  let div_name = document.createElement("div");
  let div_price = document.createElement("div");
  let div_quant = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = product.name;

  let p_price = document.createElement("p");
  p_price.innerHTML = product.price;

  let q_qant = document.createElement("p");
  q_qant.innerText="1"

  let img = document.createElement("img");
  img.src = product.image;
  

 
  div_img.append(img);
  div_name.append( p_name, );
  div_price.append( p_price);
  div_quant.append(q_qant);

  data_img.append(div_img);
  data_name.append(div_name);
  data_price.append(div_price);
  data_quant.append(div_quant)

  

});

