<?php
/**
 * Traductor Simple y Funcional
 * Sistema básico que no rompe nada
 */

class SimpleTranslator {
    private $current_lang;
    private $target_lang;
    
    public function __construct() {
        $this->current_lang = isset($_SESSION['language']) ? $_SESSION['language'] : 'es';
        $this->target_lang = ($this->current_lang === 'es') ? 'en' : 'es';
    }
    
    /**
     * Traduce solo texto específico sin tocar HTML
     */
    public function translateText($text) {
        if ($this->current_lang === 'es') {
            return $text;
        }
        
        // Diccionario simple de traducciones
        $translations = [
            'REGLAS' => 'RULES',
            'SERVICIOS PRESENCIALES' => 'IN-PERSON SERVICES',
            'SERVICIOS VIRTUALES' => 'VIRTUAL SERVICES',
            'PLATAFORMAS WEBCAM' => 'WEBCAM PLATFORMS',
            'GALERÍA DE ROPA INTERIOR USADA' => 'USED UNDERWEAR GALLERY',
            'EJEMPLO DE PRODUCTO' => 'PRODUCT EXAMPLE',
            'VIDEO LLAMADA DOMINACIÓN' => 'VIDEO CALL DOMINATION',
            'VIDEO LLAMADA SUMISIÓN' => 'VIDEO CALL SUBMISSION',
            'WHATSAPP CALIENTE' => 'HOT WHATSAPP',
            'LLAMADA CALIENTE' => 'HOT CALL',
            'VIDEOS PERSONALIZADOS' => 'CUSTOM VIDEOS',
            'RELATO ERÓTICO' => 'EROTIC STORY',
            'FUCK MACHINE' => 'FUCK MACHINE',
            'Disponible' => 'Available',
            'Seleccionar' => 'Select',
            'Consultar Precio' => 'Consult Price',
            'Contactar por WhatsApp' => 'Contact via WhatsApp',
            'Versión Económica' => 'Economic Version',
            'Versión Estándar' => 'Standard Version',
            'Versión Plus' => 'Plus Version',
            'Servicios Adicionales' => 'Additional Services',
            '1 Día Adicional' => '1 Additional Day',
            'Foto Impresa' => 'Printed Photo',
            'Nota Personalizada' => 'Personalized Note',
            'Caja Premium' => 'Premium Box',
            'Bolsa Exclusiva' => 'Exclusive Bag',
            'Términos y Condiciones' => 'Terms and Conditions',
            '¡Solicita una sesión aquí!' => 'Request a session here!',
            'Solicita una sesión aquí' => 'Request a session here',
            '¡IMPORTANTE!' => 'IMPORTANT!',
            'Hola lee muy bien...' => 'Hello, read carefully...',
            'Telegram:' => 'Telegram:',
            'Debe Enviar Comprobante De Pago Primero, NO MUESTRAS GRATIS' => 'You must send payment proof first, NO FREE SHOWS'
        ];
        
        // Buscar traducción exacta
        if (isset($translations[$text])) {
            return $translations[$text];
        }
        
        // Buscar traducción parcial
        foreach ($translations as $spanish => $english) {
            if (stripos($text, $spanish) !== false) {
                return str_ireplace($spanish, $english, $text);
            }
        }
        
        return $text;
    }
}

/**
 * Función simple para traducir texto
 */
function translate_simple($text) {
    $translator = new SimpleTranslator();
    return $translator->translateText($text);
}
?>
