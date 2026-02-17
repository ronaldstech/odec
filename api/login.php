<?php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($data->username) && isset($data->password)) {
        $username = $data->username;
        $password = $data->password;

        $stmt = $conn->prepare("SELECT id, username, password FROM admins WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if (password_verify($password, $row['password'])) {
                // Generate a simple token (in production use JWT)
                $token = bin2hex(random_bytes(32));
                
                // For simplicity, we are returning success. 
                // In a real app, store token in DB or use JWT.
                echo json_encode([
                    "status" => "success",
                    "message" => "Login successful",
                    "token" => $token,
                    "user" => ["id" => $row['id'], "username" => $row['username']]
                ]);
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid password"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "User not found"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Incomplete data"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
