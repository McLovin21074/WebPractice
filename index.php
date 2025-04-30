<?php

$a = 10;
$b = -5;

echo "<h1>Задание 1</h1>";

if($a > 0 && $b > 0) {
    echo "Разность: " . ($a-$b);
}
elseif($a < 0 && $b < 0) {
    echo "Произведение: " . ($a*$b);
}
else {
    echo "Сумма: " . ($a+$b);
}

echo "<hr>";

echo "<h1>Задание 2</h1>";

$a = rand(0, 15);

switch ($a) {
    case 0: echo "0<br>";
    case 1: echo "1<br>";
    case 2: echo "2<br>";
    case 3: echo "3<br>";
    case 4: echo "4<br>";
    case 5: echo "5<br>";
    case 6: echo "6<br>";
    case 7: echo "7<br>";
    case 8: echo "8<br>";
    case 9: echo "9<br>";
    case 10: echo "10<br>";
    case 11: echo "11<br>";
    case 12: echo "12<br>";
    case 13: echo "13<br>";
    case 14: echo "14<br>";
    case 15: echo "15<br>"; break;
    default: echo "Значение вне диапазона [0..15]";
}

echo "<hr>";

echo "<h1>Задание 3</h1>";

function plus($x, $y) {
    return $x + $y;
}
function minus($x, $y) {
    return $x - $y;
}
function multiply($x, $y) {
    return $x * $y;
}
function division($x, $y) {
    if ($y != 0){
        return $x/$y;
    }
}
echo "<h2>3. Арифметические функции</h2>";
echo "5 + 3 = " . minus(5, 3) . "<br>";
echo "5 - 3 = " . plus(5, 3) . "<br>";
echo "5 * 3 = " . multiply(5, 3) . "<br>";
echo "5 / 4 = " . division(5, 4) . "<br>";

echo "<hr>";

echo "<h1>Задание 4</h1>";

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case "plus": return plus($arg1, $arg2);
        case "minus": return minus($arg1, $arg2);
        case "multiply": return multiply($arg1, $arg2);
        case "division": return division($arg1, $arg2);
        default: return "Неизвестная операция";
    }
}

echo "mathOperation(10, 2, 'multiply') = " . mathOperation(10, 2, 'multiply');

echo "<hr>";

echo "<h1>Задание 5</h1>";

$year1 = date("Y");
$year2 = getdate()["year"];
$year3 = (new DateTime())->format("Y");

echo "Способ 1: $year1<br>";
echo "Способ 2: $year2<br>";
echo "Способ 3: $year3<br>";

echo "<hr>";

echo "<h1>Задание 6</h1>";

function power($val, $pow) {
    if ($pow == 0) return 1;
    return $val * power($val, $pow - 1);
}

echo "2^5 = " . power(2, 5);

?>