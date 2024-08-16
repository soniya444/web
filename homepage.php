<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Replace these credentials with your own database verification logic
    $validUsername = 'user';
    $validPassword = 'password';

    if ($username === $validUsername && $password === $validPassword) {
        // If login is successful, redirect to the main page
        header("Location: mainpage.html");
        exit();
    } else {
        // If login fails, redirect back to login page with an error message
        header("Location: index.html?error=Invalid username or password.");
        exit();
    }
}
?>
