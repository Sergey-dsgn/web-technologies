<?php 
    $title = 'Резюме';
    $css = '..\css_files\style_contacts.css';
    
?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/parts/header.php');?>
    <article >
        
        <div id="vopros_flex">
            <h3 class="vopros">Есть вопросы?</h3>
        <h4 class="otvet">Как вам удобно получить ответ:</h4>
        <p><input id="radio" type="radio" name="answer" value="На телефон" >На телефон</p>
        <p><input id="radio" type="radio" name="answer" value="Без обратной связи">Без обратной связи</p>
        <h5>Укажите тему вопроса</h5>
            <select name="" id="">
                <option value="Работа" id="op">Работа</option>
                <option value="Заказ" id="op">Заказ</option>
                <option value="Портфолио" id="op">Портфолио</option>
            </select>
        <h5>И еще один вопрос?</h5>
        <p><input type="checkbox" name="ch"  id="check" value="Так">Так</p>
        <!-- <p><input type="checkbox" name="ch"  id="check">И сяк</p>
        <p><input type="checkbox" name="ch"  id="check">Не так</p> -->
        <h5>Ваше имя</h5>
        <input type="text" size="30" style="height: 50px;" name="vashe_imya" id="imya">
        <h5>Адрес почты</h5>
        <input type="text" size="30" style="height: 50px;" name="adres_pochti" id="pochta">
        <h5>Номер телефона</h5>
        <input type="text" size="30" style="height: 50px;" name="nomer_telephona" id="telephone">
        <h5>Ваш вопрос</h5>
        <input id="big_input" type="text" size="30" style="height: 200px" name="vash_vopros"  >
        <br>
        <button class="nazhmi">Отправиnть</button>
        <button class="nazhmi2">Закрой</button>
        
        <p id="data"></p>
        
        <h4>Как со мной связаться</h4>

        </div>
        
        <div class="contacts">
            <h5>Почта: serzh.designer@gmail.com</h5>
        <h5>Телефон: 89968925389</h5>

        </div>
      
        
    </article>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/parts/footer.php');?>