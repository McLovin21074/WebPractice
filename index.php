<?php
function printNumbers() {
    $i = 0;
    do {
        if ($i === 0) {
            echo "$i – это ноль.<br>";
        } elseif ($i % 2 === 0) {
            echo "$i – чётное число.<br>";
        } else {
            echo "$i – нечётное число.<br>";
        }
        $i++;
    } while ($i <= 10);
}


function cities() {
    $regions = [
        'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
        'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
        'Рязанская область' => ['Рязань', 'Скопин', 'Михайлов']
    ];

    foreach ($regions as $region => $cities) {
        echo "$region:<br>";
        echo implode(', ', $cities) . ".<br>";
        echo "<br>";
    }
}

$translitMap = [
    'а'=>'a','б'=>'b','в'=>'v','г'=>'g','д'=>'d','е'=>'e','ё'=>'yo','ж'=>'zh','з'=>'z','и'=>'i',
    'й'=>'y','к'=>'k','л'=>'l','м'=>'m','н'=>'n','о'=>'o','п'=>'p','р'=>'r','с'=>'s','т'=>'t',
    'у'=>'u','ф'=>'f','х'=>'h','ц'=>'ts','ч'=>'ch','ш'=>'sh','щ'=>'sch','ъ'=>'','ы'=>'y','ь'=>'',
    'э'=>'e','ю'=>'yu','я'=>'ya'
];

function transliterate($string, $map) {
    $string = mb_strtolower($string);
    return strtr($string, $map);
}

$menu = [
    'Главная',
    'Пункт 1' => [
        'Подпункт 1',
        'Подпункт 2',
        'Подпункт 3'
    ],
    'Пункт 2' => [
        'Подпункт 1',
        'Подпункт 2',
        'Подпункт 3'
    ],
    'Пункт 3'
];

function renderMenu($menu) {
    echo "<ul>";
    foreach ($menu as $key => $item) {
        if (is_array($item)) {
            echo "<li>$key";
            renderMenu($item);
            echo "</li>";
        } else {
            echo "<li>$item</li>";
        }
    }
    echo "</ul>";
}

renderMenu($menu);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Практическая работа 18</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body> 
        <div class="content">
            <h1>Задание 1</h1>
            <p><?php printNumbers() ?></p>
            <h1>Задание 2</h1>
            <p><?php cities() ?></p>
            <h1>Задание 3</h1>
            <p><?php echo transliterate("Тюмень", $translitMap) ?></p>
            <h1>Задание 4</h1>
            <?php renderMenu($menu) ?>
        </div>
    </body>
</html>