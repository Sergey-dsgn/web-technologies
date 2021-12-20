<?php
    session_start();
    $server='localhost';
    $path='root';
    $password='';
    $project_name='notice_board';
    $db = mysqli_connect($server, $path, $password, $project_name);
    //mysqli_set_charset($db, 'utf8');
    $textarea="";
    if(isset($_POST['textarea'])){
        $textarea = mysqli_real_escape_string($db, $_POST['textarea']);
        // $user_check_query = "SELECT * FROM notes WHERE text='$textarea'";
        // $result = mysqli_query($db, $user_check_query);
        // $user = mysqli_fetch_assoc($result);
        $query = "INSERT INTO `notice` (`text`) VALUE('{$_POST['textarea']}')";
        $result = mysqli_query($db, $query);
        $_SESSION['text'] = $textarea;
        
    }
?>
<?php 
    $title = 'Объявление';
    $css = '..\css_files\style.css';
    
?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/parts/header.php');?>
<body>
    <form action="ad.php" method="POST">
        <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea> <br>
        <!-- <textarea name="textarea" id="textarea" cols="30" rows="2" placeholder="введите текст объявления"></textarea><br> -->
        <button class="button" name="save" id="button_ad">готово</button><br>
    </form>
    <?php
    if($result){
        echo"<p style='; padding: 30px'>
        {$_POST['textarea']} 
        </p>
        
        ";
    }
    ?>
    <form action="/look.php" method="POST" name = "form777">
        <button class="look" name="look" id="button_ad">все посты</button><br>
    </form>
    <button id="button_ad" > <a id="ad_href" href="/pages/zadanija.php">назад</a></button>
    
    <script src="/script/ad.js"></script>
</body>
</html>