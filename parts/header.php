<?php

    include($_SERVER['DOCUMENT_ROOT'].'/server.php');
    include($_SERVER['DOCUMENT_ROOT'].'/is_reg.php'); 
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?="{$title}";?></title>
    <link rel="stylesheet" href=<?="{$css}";?>>
    
</head>
<body>
    <nav class="menu">
        <ul>
            
            <!-- <li class="spisok"><a href="example.html">О себе</a></li> -->
            <li class="spisok"><a href="..\index.php">Выход</a></li>
            <li class="spisok"><a href="..\pages\resume.php">Резюме</a></li>
            <li class="spisok"><a href="..\pages\portfolio.php">Портфолио</a></li>
            <li class="logo" ><a href="..\example.php"><img src="..\pictures\logo.png" width="80" alt="Лого уника"></a></li>
            <li class="spisok"><a href="..\pages\kompetencii.php">Компетенции</a></li>
            <li class="spisok" ><a href="..\pages\contacts.php">Контакты</a></li>
            <li class="spisok" ><a href="..\ad.php">Посты</a></li>
        </ul>
    </nav>
    <header  > 
        <h1 class="zagalovok">Web - technology</h1> 
    </header>
    <?php

//include($_SERVER['DOCUMENT_ROOT'].'/parts/conf.php');
//include($_SERVER['DOCUMENT_ROOT'].'/is_reg.php'); 
include($_SERVER['DOCUMENT_ROOT'].'/server.php');
include($_SERVER['DOCUMENT_ROOT'].'/is_reg.php'); 
?>