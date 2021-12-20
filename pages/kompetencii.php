<?php 
    $title = 'Резюме';
    $css = '..\css_files\style.css';
    
?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/parts/header.php');?>
    <article>
        <div class="color1"  >
            <p class="mainp">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
        </div>
        
        <!-- <div class="color1"></div> -->
        <h4>Мои компетенции</h4>
        <div class="can">
            <img  src="..\pictures\figma_icon.png" alt="figma" >
        <!-- <p>Это фигма, уже не помню как работает</p> -->
        <img  src="..\pictures\ps_icon.png" alt="ps" >
        <!-- <p>Любимый и родной</p> -->
        <img src="..\pictures\ai_icon.png" alt="illustrator" >
        <!-- <p>Любимка, которая помогает делать лого мне</p> -->
        <img  src="..\pictures\html_icon.png" alt="html" >
        <img src="..\pictures\css_icon.png" alt="css">
        <!-- <p>Только познаокмился, а уже нрав</p> -->

        </div>
        <div class="description">
            <p class="figma">Figma</p>
            <p class="ps">Photoshop</p>
            <p class="ai">Illustrator</p>
            <p class="html">Html</p>
            <p class="css">CSS</p>

        </div >
        <div class="color2">
            <h4 >Услуги</h4>
        <div class="stolbci">
            <ul class="kompetencii1">
                <li><p>Это могу</p></li>
                <li><p>И это могу</p></li>
                <li><p>И это тоже</p></li>
                <li><p>И ДАЖЕ ЭТО</p></li>
    
            </ul>
            
            <ul class="kompetencii2">
                <li> <p>Это могу</p></li>
                <li><p>И это могу</p></li>
                <li><p>И это тоже</p></li>
                <li><p>И ДАЖЕ ЭТО</p></li>
                <li><p>ДА ПОВТОРИЛ И?</p></li>
                
            </ul>
        </div>

        </div>
        
        
        <h4 class="uslugi">Заголовок</h4>
        <p class="text_komp">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
        </p>
        <button onclick="deleteblock();">Кнопка с текстом</button>
        <button onclick="noch();">Кнопка с текстом</button>
        <button class="show" >Show</button>
        <button class="hide">Hide</button>
        <script src="..\js\script.js"></script>
        
  
    </article>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/parts/footer.php');?>