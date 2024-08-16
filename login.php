<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Here you can replace with database checking
    if ($username === 'user' && $password === 'password') {
        // If login is successful, redirect to the main page
        header("Location: mainpage.html");
        exit();
    } else {
        // If login fails, redirect back to login page with error
        header("Location: index.html?error=Invalid username or password.");
        exit();
    }
}
?>
