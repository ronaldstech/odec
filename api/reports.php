<?php
include 'db_connect.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM reports ORDER BY year DESC, created_at DESC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $reports = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($reports);
        break;

    case 'POST':
        if (isset($_POST['title'])) {
            $title = $_POST['title'];
            $year = $_POST['year'];
            $description = $_POST['description'];

            $file_url = '';
            if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
                $target_dir = "../uploads/reports/";
                if (!file_exists($target_dir)) {
                    mkdir($target_dir, 0777, true);
                }
                $target_file = $target_dir . basename($_FILES["file"]["name"]);
                if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                    $file_url = "/uploads/reports/" . basename($_FILES["file"]["name"]);
                }
            }

            $thumbnail_url = '';
            if (isset($_FILES['thumbnail']) && $_FILES['thumbnail']['error'] == 0) {
                $target_dir = "../uploads/thumbnails/";
                if (!file_exists($target_dir)) {
                    mkdir($target_dir, 0777, true);
                }
                $target_file = $target_dir . basename($_FILES["thumbnail"]["name"]);
                if (move_uploaded_file($_FILES["thumbnail"]["tmp_name"], $target_file)) {
                    $thumbnail_url = "/uploads/thumbnails/" . basename($_FILES["thumbnail"]["name"]);
                }
            }

            $sql = "INSERT INTO reports (title, year, file_url, thumbnail_url, description) VALUES (:title, :year, :file_url, :thumbnail_url, :description)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':year', $year);
            $stmt->bindParam(':file_url', $file_url);
            $stmt->bindParam(':thumbnail_url', $thumbnail_url);
            $stmt->bindParam(':description', $description);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Report uploaded successfully"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to upload report"]);
            }
        }
        break;
}
?>