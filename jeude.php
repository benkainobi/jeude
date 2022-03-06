<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta description="dé, hasard, qui atteindra 100 le plus rapidement">
    <link rel="stylesheet" href="jeude2.css">
    <title>jeu de dé</title>
</head>

<body>
    <?php
    ?>
    <div class="rejouer">Nouvelle partie</div>
    <div class="de"></div>
    <div class="lancer">&#8634 Lancer</div>
    <div class="tenir">&#8592 Tenir</div>

    <div class="cadre">
        <div class="joueur1">
            <div class="entete">
                <div class="joueur">PLAYER 1</div>
                <div class="encadre">
                    <div class="signal1"></div>
                </div>
            </div>
            <div class="total one"></div>
            <div class="current un"></div>
        </div>
        <div class="joueur2">
            <div class="entete">
                <div class="joueur">PLAYER 2</div>
                <div class="encadre">
                    <div class="signal2"></div>
                </div>
            </div>
            <div class="total two"></div>
            <div class="current deux"></div>
        </div>
    </div>

    <script src="jeude.js"></script>
</body>

</html>