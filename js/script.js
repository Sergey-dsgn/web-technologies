function setCookie(name, value, options = {}) {
    options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
    };
    if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
    updatedCookie += "=" + optionValue;
    }
    }
    document.cookie = updatedCookie;
   }
   
function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };
  
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
  
    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let show = document.querySelector(".show");
let hide = document.querySelector(".hide");
let cookie = document.querySelector(".stolbci");
cookie.style.visibility = getCookie('c');
hide.onclick =function (){
    cookie.style.visibility = "hidden";
    setCookie('c', cookie.style.visibility);
    
}
show.onclick =function (){
    cookie.style.visibility = "visible";
    setCookie('c', cookie.style.visibility);
    
}
var i = 0; 
var i2=0;
let namee;
// alert("Hello "+ name);
// confirm("Are you sure?");
// if(confirm("Are you sure?")==true)
// {
//     namee=prompt("Hi! What's your name?");
//     alert("Hello "+ namee);
// }
// else{alert("Person not sure")

// }
// let arr = new Array("str", 1.23,7, false);
// // document.write(arr[0]+"<br/>"+arr[1]);
// // document.write(arr[0]);
// let arr2=new Array();
// let int=0;
// let summ=0;
// for(let i=0; i<10;i++)
// {
//     arr2[i]=int;
//     document.write(arr2[i]+"<br/>");
//     int++;
//     summ+=arr2[i];
// }
// // for(i=0; i<10; i++)
// // {
// //     summ+=arr2[i];
// // }
// document.write(summ+"<br/>")
// let arr_1=new Array();
// let arr_2=new Array();
// let arr_3=new Array();
// for(let i=0;i<10;i++) arr_1[i]=i;
// for(i=0;i<5;i++) arr_2[i]=i;
// for(i=0;i<15;i++) arr_3[i]=i;
// let varr=new Array(arr_1, arr_2, arr_3);
// // document.write(varr[0][4]);
// for(i=0;i<varr.length;i++)
// {
//     for(let j=0;j<varr[i].length;j++)
//     {
//         document.write(varr[i][j]+" ")
//     }
//     document.write("<br/>")
// }

function deleteblock(){
    let firstBlock = document.querySelector( ".color1" );
    
    // let v2 = firstBlock.style.visibility="visible";
    // if( v1=="hidden"){
    //     firstBlock.style.visibility="visible";
    //     v1="visible"
        
    // }
    // else if(v1=="visible"){
    //     firstBlock.style.visibility="hidden";
    //     v1="hidden"

    // }
    firstBlock.style.visibility="hidden";
    i++;
    if( i==2){
        firstBlock.style.visibility="visible";
        i = 0;
    }
}
function noch(){
    let firstBlock = document.querySelector( ".color1" );
    let firsttext = document.querySelector( ".mainp" );
    firsttext.style.color="white";
    firstBlock.style.background="black";
    i++;
    if( i==2){
        firsttext.style.color="black";
    firstBlock.style.background="white";
        i = 0;
    }


}
function forma(){
    // let firstselect = document.querySelector(".select");
    // let secondselect=document.querySelector(".input");
    // let text=firstselect.option;
    // firstselect.option=none;
    // secondselect.option=text;
    var firstLanguage = document.language.options[0];
document.write("Index: " + firstLanguage.index + "<br/>");
document.write("Text: " + firstLanguage.text + "<br/>");
document.write("Value: " + firstLanguage.value + "<br/>");



}
let button = document.querySelector(".nazhmi");
function validate(){
    
    let imya = document.querySelector('#imya').value;
    let pochta = document.querySelector('#pochta').value;
    let telephone = document.querySelector('#telephone').value;
    let big_input = document.querySelector('#big_input').value;
    let radio;
    let option;
    // let pochta = document.querySelector('input[adres_pochti][value]');
    // let telephon = document.querySelector('input[nomer_telephona][value]');
    // let vopros = document.querySelector('input[vash_vopros][value]');
    // let fio = document.registr.fio.value; //фио
    // let email = document.registr.email.value; // почта
    // let phone = document.registr.phone.value;//телефон
    // let index = document.registr.combobox.selectedIndex;
    // let notice = document.registr.combobox[index].text; ///////////////////////////////////// выбранная тема письма
    // let message = document.registr.message.value;
    // let radio;
    // for(let i=0; i<document.registr.radio.length;i++){
    //     if(document.registr.radio[i].checked){
    //         radio = document.registr.radio[i].value; //способ связи
    //     }
    // }
    
    // if(imya==""|| pochta==""||telephon==""||vopros==""){
    //     if(imya==""){
    //         document.getElementById("imya").classList.add('add-data');
    //         console.log(document.getElementById('imya').classList);
    //     }else{
    //         document.querySelector("#imya").classList.remove("add-data");
    //         //console.log("gyuihj");
    //     }
    //     if(pochta==""){
    //         document.querySelector("#pochta").classList.add("add-data");
            
    //     }else{
    //         document.querySelector("#pochta").classList.remove("add-data");
    //     }
    //     if(telephon==""){
    //         document.querySelector("#telephone").classList.add("add-data");
            
    //     }else{
    //         document.querySelector("#telephone").classList.remove("add-data");
    //     }
    //     text="введите все данные"
        
    // }else{
    //     text = imya;
    // }
    
    // document.write(text);
    // console.log(message);
    for(let i=0; i<2;i++){
        if(document.querySelector('#radio[i]').checked){
            radio = document.querySelector('#radio[i]').value; //способ связи
        }
    }
    for(let i=0; i<3;i++)
    {
        if(document.querySelector('#op[i]').checked){
            option=document.querySelector('#op[i]').value;
        }
    }
    let text;
    if(imya==""|| pochta==""||telephone==""||big_input==""){
        if(imya==""){
            document.getElementById("imya").classList.add('add-data');
            console.log(document.getElementById('imya').classList);
        }else{
            document.querySelector("#imya").classList.remove("add-data");
            //console.log("gyuihj");
        }
        if(pochta==""){
            document.querySelector("#pochta").classList.add("add-data");
            
        }else{
            document.querySelector("#pochta").classList.remove("add-data");
        }
        if(telephon==""){
            document.querySelector("#telephone").classList.add("add-data");
            
        }else{
            document.querySelector("#telephone").classList.remove("add-data");
        }
        if(big_input==""){
            document.querySelector("#big_input").classList.add("add-data");
        }
        else{
            document.querySelector("#big_input").classList.remove("add-data");
        }
        text="введите все данные"
        
    }else{
        text = "<p>Привет,<b>" + imya+"</b>, проверьте ваши данные: <br/><u>телефон</u> - "+telephone+"<br/><u>почта</u> - "+pochta+"<br/><u>ваш вопрос</u> - "+big_input+"<br/><u>как получить</u> - "+radio+"<br/><u>как получить</u> - "+option+"<br/> <button class='close'>закрыть</button></p>";
        
    }
    document.querySelector("#data").innerHTML = text;
    
}
// function closeInfo(){
//     let info = document.querySelector(".form-info");
//     info.remove();
// }
// button.addEventListener("click", validate);
// let close = document.querySelector(".close");
// close.addEventListener("click",closeInfo);