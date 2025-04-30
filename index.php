<?php
$title = "<title>Практическая работа 16</title>";
$heading = "<h1>Добро пожаловать!</h1>";
$currentYear = date("Y");

function getPluralForm($number, $forms) {
    $number = abs($number) % 100;
    $n1 = $number % 10;
    if ($number > 10 && $number < 20) return $forms[2];
    if ($n1 > 1 && $n1 < 5) return $forms[1];
    if ($n1 == 1) return $forms[0];
    return $forms[2];
}

function getFormattedTime() {
    $h = (int)date("G");
    $m = (int)date("i");
    $hForm = getPluralForm($h, ["час", "часа", "часов"]);
    $mForm = getPluralForm($m, ["минута", "минуты", "минут"]);
    return "$h $hForm $m $mForm";
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <?= $title ?>
</head>
<body>
    <?= $heading ?>
    <p>Текущее время: <?= getFormattedTime() ?></p>
    <p>год <?= $currentYear ?></p>
</body>
</html>
