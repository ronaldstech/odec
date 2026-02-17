<?php
include 'db_connect.php';

$username = isset($_GET['username']) ? $_GET['username'] : 'admin';
$password = isset($_GET['password']) ? $_GET['password'] : 'admin123';

echo "Testing login for user: " . htmlspecialchars($username) . "<br>";
echo "Testing password: " . htmlspecialchars($password) . "<br><br>";

$stmt = $conn->prepare("SELECT id, username, password FROM admins WHERE username = :username");
$stmt->bindParam(':username', $username);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "User found in database.<br>";
    echo "Stored Hash: " . $row['password'] . "<br>";

    if (password_verify($password, $row['password'])) {
        echo "<h3 style='color:green'>SUCCESS: Password matches!</h3>";
    } else {
        echo "<h3 style='color:red'>FAILURE: Password does not match.</h3>";
        echo "Generated Hash of input: " . password_hash($password, PASSWORD_DEFAULT) . "<br>";
    }
} else {
    echo "<h3 style='color:red'>User not found.</h3>";
}
?>