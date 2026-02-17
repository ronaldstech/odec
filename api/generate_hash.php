<?php
$password = isset($_GET['password']) ? $_GET['password'] : 'admin123';
$hash = password_hash($password, PASSWORD_DEFAULT);

echo "Password: " . htmlspecialchars($password) . "<br>";
echo "Hash: " . $hash . "<br>";
echo "SQL Query: UPDATE admins SET password = '$hash' WHERE username = 'admin';";
?>