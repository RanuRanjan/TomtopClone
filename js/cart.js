let cart_data=JSON.parse(localStorage.getItem("cart"));
// console.log(cart_data);




let data_div=document.getElementById("data")
var total=0

cart_data.forEach(function (product) {

  let div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = product.name;

  let p_price = document.createElement("p");
  p_price.innerHTML = product.price;

  let img = document.createElement("img");
  img.src = product.image;

 
  div.append(img, p_name, p_price);

  data_div.append(div);
  total=total+ Number(product.price)

});
 
let total_h1=document.getElementById("total")
total_h1.innerHTML= `Total Price - ${total_h1}`;

function makePayment(){
    setTimeout(function(){
        alert("Payment Successful");
    },4000);

}
