<?php

$db = mysqli_connect('127.127.126.10', 'webis22', '12345', 'catalog');

function getMenuItems($db) {
    $result = mysqli_query($db, "SELECT * FROM menu_items");
    $items = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return buildTree($items);
}

function buildTree($elements, $parentId = null) {
    $branch = [];
    foreach ($elements as $element) {
        if ($element['parent_id'] == $parentId) {
            $children = buildTree($elements, $element['id']);
            $element['items'] = $children;
            $element['hasChildren'] = !empty($children);
            $branch[] = $element;
        }
    }
    return $branch;
}

function renderMenu($items) {
    foreach ($items as $item) {
        $hasChildren = $item['hasChildren'];
        echo '<div class="list-item ' . ($hasChildren ? 'list-item_open' : '') . '" ' . ($hasChildren ? 'data-parent' : '') . '>';
        echo '<div class="list-item__inner">';
        if ($hasChildren) {
            echo '<img class="list-item__arrow" src="img/chevron-down.png" alt="arrow" data-open>';
        }
        echo '<img class="list-item__folder" src="img/folder.png" alt="folder">';
        echo '<span>' . $item['name'] . '</span>';
        echo '</div>';
        if ($hasChildren) {
            echo '<div class="list-item__items">';
            renderMenu($item['items']);
            echo '</div>';
        }
        echo '</div>';
    }
}

$menu = getMenuItems($db);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Меню</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="list-items" id="list-items">
    <?php renderMenu($menu); ?>
</div>
<script type="module" src="script.js"></script>
</body>
</html>
