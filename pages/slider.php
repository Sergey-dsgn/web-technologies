<?php 
    $title = 'Резюме';
    $css = '..\css_files\style_contacts.css';
    
?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/parts/header.php');?>
    <article>
        <div id="slider">
            <div id="pic">
                <img id="pic1" src="..\pictures\tree.jpg"  >
                <img id="pic2" src="..\pictures\cookies.jpg"  >
                <img id="pic3" src="..\pictures\space.jpg"  >


            </div>
            <div id="buts">
                <div id="but1">
                    <button >Next</button>
                </div>
                <div id="but2">
                    <button >Prev</button>
                </div>


            </div>

        </div>


    </article>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/parts/footer.php');?>