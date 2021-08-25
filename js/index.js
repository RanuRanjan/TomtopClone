

// SlideShow:-

function sildeshow() {
    const arr = [
      "https://img.tttcdn.com/advertising/2021/8/18/IwhrXU418923515.jpg",
      "https://img.tttcdn.com/advertising/2021/8/18/enkycK-641894207.jpg",
      "https://img.tttcdn.com/advertising/2021/8/25/cE9v6w753269235.jpg",
      "https://img.tttcdn.com/advertising/2021/8/5/8chO9N-2059974108.jpg",
      "https://img.tttcdn.com/advertising/2021/8/11/IqaDr91642315202.jpg",
      "https://img.tttcdn.com/advertising/2021/8/18/awrPw0-82617087.jpg",
      "https://img.tttcdn.com/advertising/2021/8/18/xHxo9d-1943901869.jpg",
   
    ];


let div = document.getElementById("slideshow");
let img = document.createElement("img");

let i = 0;
img.src = arr[0];
div.append(img);

setInterval(function () {
  if (i === arr.length) {
    i = 0;
  }

  img.src = arr[i];
  i++;
}, 4000);
}
sildeshow();