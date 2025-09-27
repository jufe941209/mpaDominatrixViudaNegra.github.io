<?php
/**
 * Configuración para el sistema de traducción automática
 */

// Configuración de Google Translate API
define('GOOGLE_TRANSLATE_API_KEY', 'YOUR_GOOGLE_TRANSLATE_API_KEY_HERE'); // Replace with your actual API key for best translation quality

// Configuración de idiomas soportados
define('SUPPORTED_LANGUAGES', ['es', 'en']);

// Idioma por defecto
define('DEFAULT_LANGUAGE', 'es');

// Configuración de caché de traducciones
define('TRANSLATION_CACHE_ENABLED', true);
define('TRANSLATION_CACHE_DIR', __DIR__ . '/../cache/translations/');

// Configuración de traducción automática
define('AUTO_TRANSLATE_ENABLED', true);
define('AUTO_TRANSLATE_FALLBACK', true); // Usar traducciones manuales si falla la API

// Configuración de logging
define('TRANSLATION_LOG_ENABLED', true);
define('TRANSLATION_LOG_FILE', __DIR__ . '/../logs/translations.log');

/**
 * Función para obtener la configuración de traducción
 */
function get_translate_config() {
    return [
        'api_key' => GOOGLE_TRANSLATE_API_KEY,
        'supported_languages' => SUPPORTED_LANGUAGES,
        'default_language' => DEFAULT_LANGUAGE,
        'cache_enabled' => TRANSLATION_CACHE_ENABLED,
        'cache_dir' => TRANSLATION_CACHE_DIR,
        'auto_translate_enabled' => AUTO_TRANSLATE_ENABLED,
        'fallback_enabled' => AUTO_TRANSLATE_FALLBACK,
        'log_enabled' => TRANSLATION_LOG_ENABLED,
        'log_file' => TRANSLATION_LOG_FILE
    ];
}

/**
 * Función para verificar si la traducción automática está disponible
 */
function is_auto_translate_available() {
    return AUTO_TRANSLATE_ENABLED && !empty(GOOGLE_TRANSLATE_API_KEY);
}

/**
 * Función para obtener el idioma actual
 */
function get_current_language() {
    return isset($_SESSION['language']) ? $_SESSION['language'] : DEFAULT_LANGUAGE;
}

/**
 * Función para cambiar idioma
 */
function set_current_language($lang) {
    if (in_array($lang, SUPPORTED_LANGUAGES)) {
        $_SESSION['language'] = $lang;
        return true;
    }
    return false;
}
?>
