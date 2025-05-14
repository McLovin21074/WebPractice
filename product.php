<?php
$conn = mysqli_connect('127.127.126.10', 'webis22', '12345', 'lab21');
$id = intval($_GET['id']);

$product = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM products WHERE id = $id"));
$reviews = mysqli_query($conn, "SELECT * FROM reviews WHERE product_id = $id ORDER BY created_at DESC");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $author = mysqli_real_escape_string($conn, $_POST['author']);
    $content = mysqli_real_escape_string($conn, $_POST['content']);
    mysqli_query($conn, "INSERT INTO reviews (product_id, author, content) VALUES ($id, '$author', '$content')");
    header("Location: product.php?id=$id");
    exit;
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title><?= $product['name'] ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1><?= $product['name'] ?></h1>
    <img src="<?= $product['image'] ?>" alt="<?= $product['name'] ?>" width="300">
    <p><strong>Цена:</strong> <?= $product['price'] ?> ₽</p>
    <p><?= $product['description'] ?></p>

    <h2>Отзывы</h2>
    <ul>
        <?php while($rev = mysqli_fetch_assoc($reviews)): ?>
            <li><strong><?= $rev['author'] ?>:</strong> <?= $rev['content'] ?> (<?= $rev['created_at'] ?>)</li>
        <?php endwhile; ?>
    </ul>

    <h3>Оставить отзыв</h3>
    <form method="post">
        <input name="author" placeholder="Ваше имя" required><br>
        <textarea name="content" placeholder="Ваш отзыв" required></textarea><br>
        <button type="submit">Отправить</button>
    </form>

    <p><a href="index.php">Назад в каталог</a></p>
</body>
</html>
