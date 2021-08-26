const detergents = [
    {
      name: "Nirma",
      price: "10",
      image: "https://n2.sdlcdn.com/imgs/b/3/0/Nirma-Detergent-Powder-Nirma-Washing-SDL602226993-1-15845.jpg",
    },

    {
      name: "Surf excel",
      price: "20",
      image: "https://m.media-amazon.com/images/I/61rDJVoKpeL._SL1000_.jpg",
    },
    {
      name: "Tide",
      price: "30",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tide_logo.svg/1200px-Tide_logo.svg.png",
    },
    {
      name: "wheel",
      price: "60",
      image: "https://5.imimg.com/data5/QV/MX/MY-8609988/wheel-powder-500x500.jpg",
    },
    {
      name: "ghadi",
      price: "40",
      image: "https://m.media-amazon.com/images/I/61SZYb3O-wL._SL1399_.jpg",
    },
    {
      name: "ariel",
      price: "50",
      image: "https://5.imimg.com/data5/HE/VA/SO/SELLER-46615966/111-500x500.jpg",
    },
  ];

  //Step 2 - Convert to JSON

  const detergents_json = JSON.stringify(detergents);

  //step 3 - Store above data in localstorage

  localStorage.setItem("myDetergents", detergents_json);

  //Step 4 - Display on webpage

  let myDetergents = localStorage.getItem("myDetergents");

  //Step 4.1 - convert into operatable format, object!

  myDetergents = JSON.parse(myDetergents);

  function showProducts() {
    let data_div = document.getElementById("data");

    myDetergents.forEach(function (product) {
      let div = document.createElement("div");

      let p_name = document.createElement("p");

      p_name.innerText = product.name;

      let p_price = document.createElement("p");

      p_price.innerText = product.price;

      let image = document.createElement("img");

      image.src = product.image;

      let btn =document.createElement("button");

      btn.innerText="Add to cart"
      btn.onclick=function(){
        addtoCart(product);
      }

      div.append(image, p_name, p_price,btn);

      data_div.append(div);
    });
  }

  showProducts();

  if(localStorage.getItem("cart")===null){
    localStorage.setItem("cart",JSON.stringify([]))
  }
  
  function addtoCart(p){
    let cart_data=JSON.parse(localStorage.getItem("cart"));
    cart_data.push(p)

    localStorage.setItem("cart",JSON.stringify(cart_data));
    
  }