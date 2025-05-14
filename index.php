<?php
$conn = mysqli_connect('127.127.126.10', 'webis22', '12345', 'lab21');

$result = mysqli_query($conn, "SELECT * FROM products");
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Каталог товаров</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Каталог товаров</h1>
    <?php while($row = mysqli_fetch_assoc($result)): ?>
        <div class="product">
            <a href="product.php?id=<?= $row['id'] ?>">
                <img src="<?= $row['image'] ?>" alt="<?= $row['name'] ?>">
                <h3><?= $row['name'] ?></h3>
                <p><?= $row['price'] ?> ₽</p>
            </a>
        </div>
    <?php endwhile; ?>
</body>
</html>
