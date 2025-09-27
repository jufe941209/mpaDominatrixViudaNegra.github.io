/**
 * Traductor Simple y Funcional
 * Sistema básico que no rompe nada
 */

class SimpleTranslator {
    constructor() {
        this.currentLang = this.getCurrentLanguage();
        this.targetLang = this.currentLang === 'es' ? 'en' : 'es';
        this.translations = new Map();
        
        this.init();
    }
    
    init() {
        if (this.currentLang === 'en') {
            this.translatePage();
        }
    }
    
    getCurrentLanguage() {
        let lang = localStorage.getItem('language');
        if (lang) return lang;
        
        const urlParams = new URLSearchParams(window.location.search);
        lang = urlParams.get('lang');
        if (lang) return lang;
        
        const bodyLang = document.body.getAttribute('lang') || document.documentElement.getAttribute('lang');
        if (bodyLang) return bodyLang;
        
        return 'es';
    }
    
    translatePage() {
        // Traducir solo texto específico sin tocar HTML
        this.translateSpecificText();
    }
    
    translateSpecificText() {
        // Diccionario de traducciones
        const translations = {
            'REGLAS': 'RULES',
            'SERVICIOS PRESENCIALES': 'IN-PERSON SERVICES',
            'SERVICIOS VIRTUALES': 'VIRTUAL SERVICES',
            'PLATAFORMAS WEBCAM': 'WEBCAM PLATFORMS',
            'GALERÍA DE ROPA INTERIOR USADA': 'USED UNDERWEAR GALLERY',
            'EJEMPLO DE PRODUCTO': 'PRODUCT EXAMPLE',
            'VIDEO LLAMADA DOMINACIÓN': 'VIDEO CALL DOMINATION',
            'VIDEO LLAMADA SUMISIÓN': 'VIDEO CALL SUBMISSION',
            'WHATSAPP CALIENTE': 'HOT WHATSAPP',
            'LLAMADA CALIENTE': 'HOT CALL',
            'VIDEOS PERSONALIZADOS': 'CUSTOM VIDEOS',
            'RELATO ERÓTICO': 'EROTIC STORY',
            'FUCK MACHINE': 'FUCK MACHINE',
            'Disponible': 'Available',
            'Seleccionar': 'Select',
            'Consultar Precio': 'Consult Price',
            'Contactar por WhatsApp': 'Contact via WhatsApp',
            'Versión Económica': 'Economic Version',
            'Versión Estándar': 'Standard Version',
            'Versión Plus': 'Plus Version',
            'Servicios Adicionales': 'Additional Services',
            '1 Día Adicional': '1 Additional Day',
            'Foto Impresa': 'Printed Photo',
            'Nota Personalizada': 'Personalized Note',
            'Caja Premium': 'Premium Box',
            'Bolsa Exclusiva': 'Exclusive Bag',
            'Términos y Condiciones': 'Terms and Conditions',
            '¡Solicita una sesión aquí!': 'Request a session here!',
            'Solicita una sesión aquí': 'Request a session here',
            '¡IMPORTANTE!': 'IMPORTANT!',
            'Hola lee muy bien...': 'Hello, read carefully...',
            'Telegram:': 'Telegram:',
            'Debe Enviar Comprobante De Pago Primero, NO MUESTRAS GRATIS': 'You must send payment proof first, NO FREE SHOWS'
        };
        
        // Traducir elementos específicos
        const elementsToTranslate = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'div', 'a', 'button', 'label'
        ];
        
        elementsToTranslate.forEach(tag => {
            const elements = document.querySelectorAll(tag);
            elements.forEach(element => {
                if (element.dataset.translated === 'true') return;
                
                const text = element.textContent.trim();
                if (text && this.isSpanishText(text)) {
                    const translated = this.translateText(text, translations);
                    if (translated !== text) {
                        element.textContent = translated;
                        element.dataset.translated = 'true';
                    }
                }
            });
        });
        
        // Traducir atributos específicos
        const attributesToTranslate = ['alt', 'title', 'placeholder'];
        attributesToTranslate.forEach(attr => {
            const elements = document.querySelectorAll(`[${attr}]`);
            elements.forEach(element => {
                if (element.dataset.translated === 'true') return;
                
                const value = element.getAttribute(attr);
                if (value && this.isSpanishText(value)) {
                    const translated = this.translateText(value, translations);
                    if (translated !== value) {
                        element.setAttribute(attr, translated);
                        element.dataset.translated = 'true';
                    }
                }
            });
        });
    }
    
    isSpanishText(text) {
        // Patrones básicos de español
        const spanishPatterns = [
            /\b(la|el|de|que|y|a|en|un|es|se|no|te|lo|le|da|su|por|son|con|para|al|del|los|las|una|uno)\b/i,
            /\b(servicios|galería|contacto|información|disponible|seleccionar|consultar|precio|whatsapp|telegram)\b/i,
            /\b(presenciales|virtuales|webcam|shows|talleres|eventos|prensa|noticias|tienda|sexshop|ropa|interior|usada)\b/i,
            /\b(dominación|sumisión|bdsm|fetiche|fantasías|sesiones|experiencia|personalizada|exclusiva|auténtica)\b/i,
            /\b(videollamada|llamada|caliente|videos|personalizados|relato|erótico|fotos|exclusivas|contenido)\b/i,
            /\b(plataformas|stripchat|livejasmin|xlovecam|streamate|fansly|onlyfans|manyvids|pornhub)\b/i,
            /\b(versión|económica|estándar|premium|adicional|día|hora|minuto|foto|impresa|nota|personalizada)\b/i,
            /\b(caja|premium|bolsa|exclusiva|embalaje|discreto|seguro|envío|confidencial|garantizado)\b/i,
            /\b(productos|auténticos|certificado|uso|contacto|exclusivo|consultas|pedidos|términos|condiciones)\b/i,
            /\b(extensión|autógrafo|mensaje|especial|dominatrix|presentación|elegante|packaging|discrete)\b/i
        ];
        
        for (const pattern of spanishPatterns) {
            if (pattern.test(text)) {
                return true;
            }
        }
        
        // Caracteres especiales del español
        if (/[ñáéíóúü¿¡]/i.test(text)) {
            return true;
        }
        
        return false;
    }
    
    translateText(text, translations) {
        // Buscar traducción exacta
        if (translations[text]) {
            return translations[text];
        }
        
        // Buscar traducción parcial
        for (const [spanish, english] of Object.entries(translations)) {
            if (text.includes(spanish)) {
                return text.replace(new RegExp(spanish, 'gi'), english);
            }
        }
        
        return text;
    }
}

// Inicializar traductor cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    new SimpleTranslator();
});

// También inicializar si el script se carga después del DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        new SimpleTranslator();
    });
} else {
    new SimpleTranslator();
}
