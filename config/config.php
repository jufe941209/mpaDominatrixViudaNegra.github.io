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
        'reglas' => 'reglas.php',
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

function t($key) {
    global $lang;
    return isset($lang[$key]) ? $lang[$key] : $key;
}

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
?>
