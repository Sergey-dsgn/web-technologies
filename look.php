<?php
    session_start();
    $server='localhost';
    $path='root';
    $password='';
    $project_name='notice_board';
    $db = mysqli_connect($server, $path, $password, $project_name);
    $template = [
        'notice' => [],
        'is_search' => false
    ];
    if(isset($_POST['look'])){
        $template['is_search'] = true;
        $search = $_POST['look'];
        $sql_notes = "SELECT `text` FROM `notice`";
        $result = mysqli_query($db, $sql_notes);
        while($data = mysqli_fetch_assoc($result)){
            $template['notice'][] = $data;
        };
    }

?>
<?php 
    $css = '..\css_files\style.css';
    
?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/parts/header.php');?>
<?php if($template['is_search']): ?>
    <div class="back_look">
        <button id="button_ad"><a id="href_back_look" href="..\attention.php">назад</a></button>
    

    </div>
    
    <?php if(!empty($template['notice'])): ?>
        <?php foreach($template['notice'] as $note): ?>
            <p id="note_look">
                <?=$note['text']?>
            </p>
        <?php endforeach; ?>
    <?php else: ?> <div class = 'wrapper'><h3 style = 'font-size: 25px; margin-left: 40px'>постов тютю</h3></div>;
    <?php endif; ?>
<?php endif; ?>