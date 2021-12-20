let elem = document.querySelector('#elem'); // элемент который мы тянем в корзину
let elem2 = document.querySelector('#elem2'); // второй элемент который мы тянем в корзину
let parent = document.querySelector('#parent'); // корзина, в которую тянем элементы

parent.addEventListener('dragover',function(event){ // просто позволяет работать дропу, больше ничего
event.preventDefault(); // важно для срабатывания дропа
console.log("over");
});

// при начале перетаскивания запоминаем ид элемента
elem.addEventListener('dragstart',function(){
event.dataTransfer.setData("Text", event.target.id);
});

elem2.addEventListener('dragstart',function(){
event.dataTransfer.setData("Text", event.target.id);
});


// при отпускании элемента (внутри корзины) вызываем функцию (увеличения кол-ва товаров)
// для элемента (товара) по его айди
parent.addEventListener('drop',function(event){
plusFunction(event.dataTransfer.getData("Text"));
});

//объект элементов корзины
let cart = [
{
id: "elem",
name: "Пицца",
count: 0,
},

{
id: "elem2",
name: "Торт",
count: 0,
}
];


// увеличение кол-ва товаров
const plusFunction = id => {
if (id == "elem")
{
cart[0].count++;
}
else if (id == "elem2")
{
cart[1].count++;
}
renderCart(); // рисует заново корзину
}

const renderCart = () => {
console.log(cart[0].count);
console.log(cart[1].count);
parent.innerHTML = (`Пицца: ${cart[0].count}, Торт: ${cart[1].count}`);
}

renderCart();