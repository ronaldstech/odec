<?php
include 'db_connect.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM stories ORDER BY created_at DESC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $stories = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($stories);
        break;

    case 'POST':
        // Handle file upload and data insertion
        if (isset($_POST['title'])) {
            $title = $_POST['title'];
            $category = $_POST['category'];
            $author = $_POST['author'];
            $date = $_POST['date'];
            $excerpt = $_POST['excerpt'];
            $content = $_POST['content'];

            $image_url = '';
            $uploaded_images = [];

            if (isset($_FILES['images'])) {
                $target_dir = "../uploads/";
                if (!file_exists($target_dir)) {
                    mkdir($target_dir, 0777, true);
                }

                $files = $_FILES['images'];
                $count = count($files['name']);

                for ($i = 0; $i < $count; $i++) {
                    if ($files['error'][$i] == 0) {
                        $filename = time() . '_' . basename($files["name"][$i]);
                        $target_file = $target_dir . $filename;
                        if (move_uploaded_file($files["tmp_name"][$i], $target_file)) {
                            $path = "/uploads/" . $filename;
                            $uploaded_images[] = $path;
                            // Set the first image as the main cover image
                            if ($i === 0) {
                                $image_url = $path;
                            }
                        }
                    }
                }
            }

            $sql = "INSERT INTO stories (title, category, author, date, image_url, excerpt, content) VALUES (:title, :category, :author, :date, :image_url, :excerpt, :content)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':category', $category);
            $stmt->bindParam(':author', $author);
            $stmt->bindParam(':date', $date);
            $stmt->bindParam(':image_url', $image_url);
            $stmt->bindParam(':excerpt', $excerpt);
            $stmt->bindParam(':content', $content);

            if ($stmt->execute()) {
                $story_id = $conn->lastInsertId();

                // Insert all images into story_images table
                if (!empty($uploaded_images)) {
                    $img_sql = "INSERT INTO story_images (story_id, image_url) VALUES (:story_id, :img_url)";
                    $img_stmt = $conn->prepare($img_sql);
                    foreach ($uploaded_images as $img) {
                        $img_stmt->execute([':story_id' => $story_id, ':img_url' => $img]);
                    }
                }

                echo json_encode(["status" => "success", "message" => "Story created successfully with " . count($uploaded_images) . " images"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to create story"]);
            }
        } else {
            // Handle raw JSON input if not multipart/form-data (for updates without file maybe)
            $data = json_decode(file_get_contents("php://input"));
            // ... implementation for JSON input if needed
            echo json_encode(["status" => "error", "message" => "Invalid input"]);
        }
        break;

    // Add PUT and DELETE as needed
}
?>