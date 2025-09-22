<?php
// Iniciar sesión al principio
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Cambiar idioma si se recibe parámetro
if (isset($_GET['lang'])) {
    $lang = $_GET['lang'];
    if (in_array($lang, ['es', 'en'])) {
        $_SESSION['language'] = $lang;
    }
}

// Redirigir de vuelta a la página anterior o al inicio
$redirect = isset($_GET['redirect']) ? $_GET['redirect'] : 'index.php';
header("Location: $redirect");
exit;
?>
