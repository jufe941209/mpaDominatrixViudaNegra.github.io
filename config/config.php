<?php
// Configuración del sitio
$site_config = [
    'title' => 'DOMINATRIX VIUDA NEGRA',
    'email' => 'Dominatrixbogota@gmail.com',
    'phone' => '3115710072',
    'location' => 'Bogotá',
    
    // Redes sociales
    'social_links' => [
        'twitter' => 'https://twitter.com/Dominatrixbog',
        'telegram' => 'https://t.me/+P5nA2u54FUQwODI5',
        'instagram' => 'https://www.instagram.com/viuda_negra_dominatrix',
        'whatsapp' => 'https://api.whatsapp.com/send?phone=573115710072',
        'snapchat' => 'https://www.snapchat.com/add/amaviudanegra?share_id=5Cp-MiuolJM&locale=es-US',
        'tiktok' => 'https://www.tiktok.com/@dominatrix_viuda_negra',
        'youtube' => 'https://www.youtube.com/channel/UC5HmJn8VLOXRRUqiodQ55Xg',
        'paypal' => 'https://www.paypal.com/paypalme/amaviudanegra'
    ],
    
    // Navegación
    'navigation' => [
        'home' => 'index.php',
        'practicas' => 'practicas.php',
        'servicios' => [
            'presenciales' => 'presenciales.php',
            'virtuales' => 'virtuales.php',
            'webcam' => 'webcam.php',
            'shows' => 'shows.php',
            'talleres' => 'talleres.php'
        ],
        'galeria' => [
            'profesionales' => 'profesionales.php',
            'sesiones' => 'sesiones.php',
            'mazmorra' => 'mazmorra.php'
        ],
        'tienda' => [
            'sexshop' => 'sexshop.php',
            'ropa_interior' => 'ropaInterior.php'
        ],
        'noticias' => [
            'eventos' => 'eventos.php'
        ],
        'lista_deseos' => 'listaDeDeseos.php',
        'prensa' => 'prensa.php'
    ]
];

// Función para obtener configuración
function get_config($key = null) {
    global $site_config;
    if ($key === null) {
        return $site_config;
    }
    return isset($site_config[$key]) ? $site_config[$key] : null;
}

// Función para obtener URL de redes sociales
function get_social_url($platform) {
    $social = get_config('social_links');
    return isset($social[$platform]) ? $social[$platform] : '#';
}

// Sistema de idiomas
function get_language() {
    return isset($_SESSION['language']) ? $_SESSION['language'] : 'es';
}

function set_language($lang) {
    if (in_array($lang, ['es', 'en'])) {
        $_SESSION['language'] = $lang;
    }
}

// Función t() movida más abajo para evitar conflictos

// Inicializar sesión si no existe (solo si no se han enviado headers)
if (session_status() == PHP_SESSION_NONE && !headers_sent()) {
    session_start();
}

// Cargar idioma seleccionado
$current_lang = get_language();
$lang_file = __DIR__ . "/../lang/{$current_lang}.php";
if (file_exists($lang_file)) {
    include $lang_file;
} else {
    // Fallback al español si no existe el archivo
    include __DIR__ . "/../lang/es.php";
}

// Incluir sistema de traducción simple y funcional
include __DIR__ . "/../lib/simple_translator.php";

// Función mejorada de traducción que incluye traducción automática
function t($key, $auto_translate = false) {
    global $lang, $current_lang;
    
    // Primero intentar obtener traducción del sistema de idiomas
    if (isset($lang[$key])) {
        return $lang[$key];
    }
    
    // Si no existe y se solicita traducción automática
    if ($auto_translate && $current_lang === 'en') {
        return auto_translate($key, 'en', 'es');
    }
    
    // Fallback: devolver la clave
    return $key;
}

// Función para traducir contenido dinámico
function translate_content($content) {
    global $current_lang;
    
    if ($current_lang === 'es') {
        return $content;
    }
    
    return translate_dynamic_content($content, $current_lang);
}

// No usar output buffer para evitar problemas con imágenes y formato
// La traducción se maneja directamente en el frontend
?>
