// let next = document.querySelector("#but1");
// let prev = document.querySelector("#but2");
// let pic1 = document.querySelector("#pic1");
// let pic2 = document.querySelector("#pic2");
// let pic3 = document.querySelector("#pic3");
// // let pic3 = doucment.querySelector("#pic3");
// // let mas = [pic1,pic2,pic3];
// let num = 1;
// function slider_next() {
//     if (num == 1) {
//         pic1.style.visibility = "visible"
//         pic3.style.visibility = "hidden"
//         num = 2;

//     }
//     else if (num == 2) {
//         pic2.style.visibility = "visible"
//         pic1.style.visibility = "hidden"
//         num = 3;
//     }
//     else if (num == 3) {
//         pic3.style.visibility = "visible"
//         pic2.style.visibility = "hidden"
//         num = 1;
//     }

// }
// function slider_prev() {
//     if (num == 1) {
//         pic3.style.visibility = "visible"
//         pic1.style.visibility = "hidden"
//         num = 3;

//     }
//     else if (num == 3) {
//         pic2.style.visibility = "visible"
//         pic3.style.visibility = "hidden"
//         num = 2;
//     }
//     else if (num == 2) {
//         pic1.style.visibility = "visible"
//         pic2.style.visibility = "hidden"
//         num = 1;
//     }

// }
// next.addEventListener("click", slider_next);
// prev.addEventListener("click", slider_prev);




// canvas
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
let buti = document.querySelector("#tik");
function canvasik() {
    let number = Number(document.querySelector('#kolvo').value);
    let art = document.querySelector("#canvas");
    
    let stylish = art.getContext("2d");
    stylish.clearRect(0, 0, canvas.width, canvas.height);
    stylish.fillStyle = getRandomColor();
    let k = 0;
    let i=0;
    
    while(i!=number){
        stylish.fillRect(k, 400, 5, getRandomInt(-150, -400));
        stylish.fillStyle = getRandomColor();
        i++;
        k+=6;
    }
    




    
    // let number = document.querySelector('#kolvo').value;
    // let art = document.querySelector("#canvas");
    // let stylish = art.getContext("2d");
    // stylish.fillStyle = "green";
    // 
    // let i = 0;
    // while (i != 3) {
    //     stylish.fillRect(k, 150, 50, 250);
    //     k += 80;
    //     i++;


    // }
    // console.log(number);

}

buti.addEventListener("click", canvasik);

// stylish.moveTo(100, 0);
// stylish.lineTo(100, 200);
// stylish.stroke();
