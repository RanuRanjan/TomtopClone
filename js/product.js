const productss = [
    {
      name: "Lenovo Laptop",
      price: "10",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/R/U/RTYSY-A10S-EU/RTYSY-A10S-EU-1-3b49-kDlM.jpg",
    },

    {
      name: "DJI Drone",
      price: "20",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/R/1/RM13901-1/RM13901-1-1-3ab0-hx1H.jpg",
    },
    {
      name: "",
      price: "30",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/I/P/I1153P/I1153P-1-a553-Imc0.jpg",
    },
    {
      name: "Digital Analog Signal Conveter",
      price: "60",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/E0917/E0917-8-913e.jpg",
    },
    {
      name: "Nikon Camera Lens",
      price: "40",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/D/D1934/D1934-1-610a.jpg",
    },
    {
      name: "Tripod",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/220/220/p/tt/i/6/i683-6-720d.jpg",
    },
    {
      name: "Smart Watch",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/1/PB0246B-1/PB0246B-1-1-f34c-Sb8F.jpg",
    },
    {
      name: "Airpods",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/B/PAE1010B/PAE1010B-1-b34f-KQQd.jpg",
    },
    {
      name: "Room Temperature Checker",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/H/1/H17031/H17031-1-5e6c-Vxq9.jpg",
    },
    {
      name: "Vaccum Cleaner",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/U/E15305EU/E15305EU-1-cbc6-PsWP.jpg",
    },
    {
      name: "OWSOO 7 inch Wired Video Doorbell ",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/S/U/S5890EU/S5890EU-1-bd19-xtDT.jpg",
    },
    {
      name: "Aluminum 2.5MPa 25KG Water Pressure",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/E/0/E6590/E6590-1-5958-TkoV.jpg",
    },
    {
      name: "9Pcs Luxury Car Seat Covers Front +Back Seat",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/K/A/K14824-A/K14824-A-1-4fd1-4DM2.jpg",
    },
    {
      name: "METERK 20V Cordless 10Inch Grass Trimmer",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/E/U/E12755EU/E12755EU-1-64c6-Fg4K.jpg",
    },
    {
      name: "Retro Style Motorcycle Half Helmet",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/K/B/K12521-B/K12521-B-1-de95-ASfP.jpg",
    },
    {
      name: "2pcs Table Folding Lifter Hydraulic Air Support",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/E/6/E18990-26/E18990-26-1-85af-GdKv.jpg",
    },
    {
      name: "Y68 1.44in Intelligent Watches Heart Rate",
      price: "50",
      image: "https://img.tttcdn.com/product/xy/377/377/p/gu1/V/L/V9148NBL/V9148NBL-1-8810-BOBV.jpg",
    },
   
    
  ];

  //Step 2 - Convert to JSON

  const productss_json = JSON.stringify(productss);

  //step 3 - Store above data in localstorage

  localStorage.setItem("myproductss", productss_json);

  //Step 4 - Display on webpage

  let myproductss = localStorage.getItem("myproductss");

  //Step 4.1 - convert into operatable format, object!

  myproductss = JSON.parse(myproductss);

  function showProducts() {
    let data_div = document.getElementById("data");

    myproductss.forEach(function (product) {
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