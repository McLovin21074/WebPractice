<!DOCTYPE html>
<html lang="ru">
<meta charset="UTF-8">

<?php
$imagesDir = 'images';
$fileTypes = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
$maxSize = 10 * 1024 * 1024; 

logImage();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['files_input'])) {
    $file = $_FILES['files_input'];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (in_array($ext, $fileTypes) && $file['size'] <= $maxSize) {
        $name = basename($file['name']);
        move_uploaded_file($file['tmp_name'], "$imagesDir/$name");
        header("Location: index.php");
        exit;
    }
}

$files = array_filter(scandir($imagesDir), fn($f) => in_array(strtolower(pathinfo($f, PATHINFO_EXTENSION)), $fileTypes));

function logImage() {
    $logFile = 'log0.txt';
    $time = date("Y-m-d H:i:s");

    if (!file_exists($logFile)) file_put_contents($logFile, '');
    $lines = file($logFile, FILE_IGNORE_NEW_LINES);
    
    if (count($lines) >= 10) {
        $i = 1;
        while (file_exists("log{$i}.txt")) $i++;
        rename($logFile, "log{$i}.txt");
        file_put_contents($logFile, '');
    }

    file_put_contents($logFile, "Request: $time\n", FILE_APPEND);
}
?>

<body>
    <h1>Практическая работа 19</h1>

    <?php foreach ($files as $file): ?>
        <a href="<?= "$imagesDir/$file" ?>" target="_blank">
            <img src="<?= "$imagesDir/$file" ?>" style="max-width: 350px; max-height: 190px; padding: 10px;">
        </a>
    <?php endforeach; ?>

    <form action="index.php" method="post" enctype="multipart/form-data" style="margin-top:20px">
        <input type="file" name="files_input" required>
        <button type="submit">Загрузить</button>
    </form>
</body>
</html>
