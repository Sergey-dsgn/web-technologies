let button = document.querySelector(".nazhmi");
let button2 = document.querySelector(".nazhmi2");
function validate(){
    let imya = document.querySelector('#imya').value;
    let pochta = document.querySelector('#pochta').value;
    let telephone = document.querySelector('#telephone').value;
    let big_input = document.querySelector('#big_input').value;
    // let radio=document.querySelector('#radio').value;
    let check=document.querySelector('#check');
    // let arr = new Array();
    // arr = [3];
    let option = document.querySelector('select').value;
    let radio=document.querySelectorAll('input[id="radio"]');
    let options=document.querySelectorAll('option[id="op"]');
    let text;
    let text2;
    // if(imya==""||pochta==""||telephone==""||big_input==""||radio==""||check.checked==false)
    // let checks=document.querySelectorAll('input[id="check"]');
    // let num=0;
    for(let i of radio)
    {

        if(i.checked)
        {
            radio=i.value;


        }
    }
    if(check.checked){
        check=check.value;
    }
    if(imya==""||pochta==""||telephone==""||big_input==""||radio=="[object NodeList]"||check.checked==false)
    {
        imya=="";
        pochta=="";
        telephone=="";
        big_input=="";
        check.checked==false;
        radio.checked==false;

    }
    else
    {
        text = "<p>Привет,<b>" + imya+"</b>, проверьте ваши данные: <br/><u>телефон</u> - "+telephone+"<br/><u>почта</u> - "+pochta+"<br/><u>ваш вопрос</u> - "+big_input+"<br/><u>как получить</u> - "+radio+"<br/><u>тема</u> - "+option+"<br/><u>так?</u> - "+check+"<br/> <button class='close'>закрыть</button></p>";
        document.querySelector("#data").innerHTML = text;
    button2.style.visibility="visible";

    }

    




    // let imya = document.querySelector('input[vashe_imya][value]');
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
    // for(let i=0; i<3;I++)
    // {
        
    //     if(document.querySelector('#check[i]').checked)
    //     {
    //         arr[i]=document.querySelector('#check[i]').value;

    //     }
    // }
    // for(let i of inputs){
    //     if(i.checked){
    //        radio=i.value; 
    //     }
    // }
    // for(let i of options){
    //     if(i.checked){
    //         option=i.value;
    //     }
    // }
    // for(let i=0; i<2;i++){
    //     if(document.querySelector('#radio[i]').checked){
    //         radio = document.querySelector('#radio[i]').value; //способ связи
    //     }
    // }
    // for(let i=0; i<3;i++)
    // {
    //     if(document.querySelector('#op[i]').checked){
    //         option=document.querySelector('#op[i]').value;
    //     }
    // }
    
    // if(imya==""|| pochta==""||telephone==""||big_input==""){
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
    //     if(big_input==""){
    //         document.querySelector("#big_input").classList.add("add-data");
    //     }
    //     else{
    //         document.querySelector("#big_input").classList.remove("add-data");
    //     }
    //     text="введите все данные"
        
    // }else{
    //     text = "<p>Привет,<b>" + imya+"</b>, проверьте ваши данные: <br/><u>телефон</u> - "+telephone+"<br/><u>почта</u> - "+pochta+"<br/><u>ваш вопрос</u> - "+big_input+"<br/><u>как получить</u> - "+radio+"<br/><u>тема</u> - "+option+"<br/><u>так?</u> - "+check+"<br/> <button class='close'>закрыть</button></p>";
    //     // text2="<p><b>"+ arr[0]+"</b>"+arr[1]+"</b>"+arr[2]+"</b> </p>";
    // }
    
    // // document.write(text);
    // // console.log(message);
    // document.querySelector("#data").innerHTML = text;
    // button2.style.visibility="visible";
    
    // document.querySelector("#data").innerHTML=text2;
    
}
function closeInfo(){
    if(document.querySelector("#data").value!="")
    {
        button2.style.visibility="hidden";
        text="";
        document.querySelector("#data").innerHTML = text;
        
        // document.querySelector("#data").innerHTML.remove();

    }
    // let info = document.querySelector(".form-info");
    // info.remove();
}
button2.addEventListener("click", closeInfo);
// button2.addEventListener("click", closeInfo);
button.addEventListener("click", validate);
// let close = document.querySelector(".close");
// close.addEventListener("click",closeInfo);