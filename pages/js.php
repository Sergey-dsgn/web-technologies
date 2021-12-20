<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie1.html</title>
    <script src="..\js\script.js"></script>
    <link rel="stylesheet" href="..\css files\style_contacts.css">
</head>
<body>
    <!-- <select name="" id="">
        <option value="Работа">Работа</option>
        <option value="Заказ">Заказ</option>
        <option value="Портфолио">Портфолио</option>
    </select>
    <button onclick="forma();">Отправить</button>
     -->
     <!-- <select class="language" size="4">
        <option value="JS" selected="selected">JS</option>
        <option value="Java" selected="selected">Java</option>
        <option value="CS" selected="selected">C#</option>
        <option value="CPP" selected="selected">C++</option>
    </select> -->
    <!-- <script>
        // // var firstLanguage = document.querySelector(".language");
        // var firstLanguage = document.querySelector("option"[0]); 
        // // let option = document.querySelectorAll("option");
        // document.write("<br/>")
        // for(let i=0; i<5;i++)
        // {
        //     // document.write("Index: " + firstLanguage.value.text + "<br/>");
        //     document.write("Index: " + firstlanguage.value + "<br/>");
        // }
        // // document.write("Index: " + firstLanguage.index + "<br/>");
        // // document.write("Text: " + firstLanguage.text + "<br/>");
        // // document.write("Value: " + firstLanguage.value + "<br/>");
        
        // let n = document.querySelector(".language").options.selectedIndex;
        let arr=new Array();
        for(let i=0; i<5;i++)
        {
            arr[i]=document.querySelector(".language").options.selectedIndex;
        }
        for(let i=0; i<5;i++)
        {
            let txt=document.querySelector(".language").options[arr[i]].text;
        document.write("<br/>")
        document.write(txt);

        }
        
        </script>
    <button onclick="forma();">Отправить</button> -->
    <!-- <input type="text" size="30" style="height: 50px;" name="vashe_imya" id="imya">
    <button class="nazhmi">Отправиnть</button>
    <p id="data"></p>
    <script src="..\js\script.js"></script> -->
    <h4 class="otvet">Как вам удобно получить ответ:</h4>
        <p><input id="radio1" type="radio" name="answer" >На телефон</p>
        <p><input id="radio2" type="radio" name="answer" >Без обратной связи</p>
        <h5>Укажите тему вопроса</h5>
            <select name="" id="">
                <option value="Работа" id="op0">Работа</option>
                <option value="Заказ" id="op1">Заказ</option>
                <option value="Портфолио" id="op2">Портфолио</option>
            </select>
        <h5>И еще один вопрос?</h5>
        <p><input type="checkbox" name="ch" value="А" id="check0">Так</p>
        <p><input type="checkbox" name="ch" value="B" id="check1">И сяк</p>
        <p><input type="checkbox" name="ch" value="C" id="check2">Не так</p>
    <h5>Ваше имя</h5>
        <input type="text" size="30" style="height: 50px;" name="vashe_imya" id="imya">
        <h5>Адрес почты</h5>
        <input type="text" size="30" style="height: 50px;" name="adres_pochti" id="pochta">
        <h5>Номер телефона</h5>
        <input type="text" size="30" style="height: 50px;" name="nomer_telephona" id="telephone">
        <h5>Ваш вопрос</h5>
        <input id="big_input" type="text" size="30" style="height: 200px" name="vash_vopros"  >
        <br>
        <button class="nazhmi" onclick="validate();">Отправиnть</button>
        
        <p id="data"></p>
        
</body>
</html>