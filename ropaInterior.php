<?php include 'includes/header.php'; ?>

<!-- Estilos personalizados para la página de ropa interior -->
<style>
.ropa-page {
    background: url('img/fondo1.jpg') center center/cover no-repeat fixed;
    min-height: 100vh;
    position: relative;
}

.ropa-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.ropa-content {
    position: relative;
    z-index: 2;
}

.ropa-title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    margin-bottom: 1rem;
    text-align: center;
}

.ropa-subtitle {
    color: #b72327;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 500;
}

.ejemplo-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 3rem;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
}

.ejemplo-title {
    color: #b72327;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
}

.ejemplo-image {
    text-align: center;
    margin-bottom: 1rem;
}

.ejemplo-image img {
    max-width: 300px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.version-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.version-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
}

.version-card.economica {
    border-top: 5px solid #28a745;
}

.version-card.estandar {
    border-top: 5px solid #007bff;
}

.version-card.plus {
    border-top: 5px solid #b72327;
}

.version-title {
    color: #333;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
}

.version-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 120px;
}

.version-price {
    color: #b72327;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
    padding: 8px 15px;
    background: rgba(183, 35, 39, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(183, 35, 39, 0.2);
    flex-shrink: 0;
}

.version-bottom {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.version-btn {
    background: linear-gradient(45deg, #b72327, #8b1a1a);
    border: none;
    border-radius: 25px;
    padding: 18px 35px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    color: white;
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 1rem;
    flex-shrink: 0;
    min-width: 200px;
}

.version-btn:hover {
    background: linear-gradient(45deg, #8b1a1a, #b72327);
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(183, 35, 39, 0.4);
    color: white;
    text-decoration: none;
}

.adicionales-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
}

.adicionales-title {
    color: #b72327;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
}

.adicionales-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.adicional-item {
    background: rgba(183, 35, 39, 0.1);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    border: 2px solid rgba(183, 35, 39, 0.2);
}

.adicional-item h4 {
    color: #b72327;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.adicional-item p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
}

.terminos-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
}

.terminos-title {
    color: #b72327;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
}

.terminos-content {
    color: #333;
    line-height: 1.6;
}

.terminos-content ul {
    list-style: none;
    padding: 0;
}

.terminos-content li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
}

.terminos-content li::before {
    content: "•";
    color: #b72327;
    font-weight: bold;
    position: absolute;
    left: 0;
}

@media (max-width: 768px) {
    .ropa-title {
        font-size: 2rem;
    }
    
    .version-card {
        height: auto;
        min-height: 400px;
    }
    
    .adicionales-grid {
        grid-template-columns: 1fr;
    }
    
    .version-btn {
        padding: 15px 25px;
        font-size: 0.9rem;
        min-width: 180px;
    }
}
</style>

<!-- Página de Ropa Interior con fondo personalizado -->
<div class="ropa-page">
    <div class="ropa-content">
        <div class="container" style="padding-top: 120px; padding-bottom: 50px;">
            <h1 class="ropa-title"><?php echo t('shop_underwear_title'); ?></h1>
            <p class="ropa-subtitle"><?php echo t('shop_underwear_description'); ?></p>
            
            <!-- Galería de Ropa Interior Usada -->
            <div class="ejemplo-section">
                <h2 class="ejemplo-title">Galería de Ropa Interior Usada</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="ejemplo-image">
                            <img src="img/tienda/interiorUsada1.jpg" alt="Ropa Interior Usada 1" class="img-fluid" style="border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="ejemplo-image">
                            <img src="img/tienda/interiorUsada2.jpg" alt="Ropa Interior Usada 2" class="img-fluid" style="border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
                        </div>
                    </div>
                </div>
                <p style="text-align: center; color: #666; font-style: italic; margin-top: 1rem;">
                    Prendas auténticas usadas por la Dominatrix Viuda Negra durante sesiones completas
                </p>
            </div>
            
            <!-- Sección de Ejemplo -->
            <div class="ejemplo-section">
                <h2 class="ejemplo-title">Ejemplo de Producto</h2>
                <div class="ejemplo-image">
                    <img src="img/tienda/interior1.jpg" alt="Ejemplo de Ropa Interior" class="img-fluid">
                </div>
                <p style="text-align: center; color: #666; font-style: italic;">
                    Todas las prendas son usadas por 1 día completo (24 horas) por la Dominatrix Viuda Negra
                </p>
            </div>
            
            <!-- Cards de Versiones -->
            <div class="row">
                <!-- Versión Económica -->
                <div class="col-lg-4 mb-4">
                    <div class="version-card economica">
                        <h3 class="version-title">Versión Económica</h3>
                        <div class="version-description">
                            <p><strong>Tanga Básica</strong> usada por la Dominatrix Viuda Negra durante una sesión completa.</p>
                            <p>Perfecta para comenzar tu colección con una prenda auténtica y con la esencia única de la dominatrix.</p>
                        </div>
                        <div class="version-bottom">
                            <a href="https://api.whatsapp.com/send?phone=573115710072&text=Hola! Me interesa la Versión Económica de ropa interior usada" class="version-btn">
                                Consultar Precio
                            </a>
                        </div>
                    </div>
    </div>

                <!-- Versión Estándar -->
                <div class="col-lg-4 mb-4">
                    <div class="version-card estandar">
                        <h3 class="version-title">Versión Estándar</h3>
                        <div class="version-description">
                            <p><strong>Solo Tanga Genérica</strong> de calidad media, usada por la dominatrix durante 24 horas completas.</p>
                            <p>Ideal para aquellos que buscan una opción balanceada entre calidad y precio.</p>
                        </div>
                        <div class="version-bottom">
                            <a href="https://api.whatsapp.com/send?phone=573115710072&text=Hola! Me interesa la Versión Estándar de ropa interior usada" class="version-btn">
                                Consultar Precio
                            </a>
                        </div>
                    </div>
        </div>
        
                <!-- Versión Plus -->
                <div class="col-lg-4 mb-4">
                    <div class="version-card plus">
                        <h3 class="version-title">Versión Plus</h3>
                        <div class="version-description">
                            <p><strong>Lencería de Marca</strong> de alta calidad, usada por la dominatrix durante una sesión especial.</p>
                            <p>Para coleccionistas exigentes que buscan prendas premium con la esencia auténtica de la dominatrix.</p>
                        </div>
                        <div class="version-bottom">
                            <a href="https://api.whatsapp.com/send?phone=573115710072&text=Hola! Me interesa la Versión Plus de ropa interior usada" class="version-btn">
                                Consultar Precio
                            </a>
                        </div>
                    </div>
                </div>
        </div>

            <!-- Sección de Adicionales -->
            <div class="adicionales-section">
                <h2 class="adicionales-title">Servicios Adicionales</h2>
                <div class="adicionales-grid">
                    <div class="adicional-item">
                        <h4>1 Día Adicional</h4>
                        <p>Extensión de uso por 24 horas más</p>
                    </div>
                    <div class="adicional-item">
                        <h4>Foto Impresa</h4>
                        <p>Con autógrafo personalizado</p>
                    </div>
                    <div class="adicional-item">
                        <h4>Nota Personalizada</h4>
                        <p>Mensaje especial de la dominatrix</p>
                    </div>
                    <div class="adicional-item">
                        <h4>Caja Premium</h4>
                        <p>Presentación elegante</p>
                    </div>
                    <div class="adicional-item">
                        <h4>Bolsa Exclusiva</h4>
                        <p>Embalaje discreto y seguro</p>
                    </div>
                </div>
        </div>

            <!-- Términos y Condiciones -->
            <div class="terminos-section">
                <h2 class="terminos-title">Términos y Condiciones</h2>
                <div class="terminos-content">
                    <ul>
                        <li>Todas las prendas son usadas por la Dominatrix Viuda Negra durante 24 horas completas</li>
                        <li>El cliente se encarga del costo del envío</li>
                        <li>Los precios varían según la versión y servicios adicionales seleccionados</li>
                        <li>Consultar disponibilidad antes de realizar el pedido</li>
                        <li>Envío discreto y confidencial garantizado</li>
                        <li>Productos auténticos con certificado de uso</li>
                        <li>Contacto exclusivo por WhatsApp para consultas y pedidos</li>
                    </ul>
        </div>
    </div>

            <!-- Botón de Contacto Principal -->
            <div class="text-center">
                <a href="https://api.whatsapp.com/send?phone=573115710072&text=Hola! Me interesa información sobre ropa interior usada" class="version-btn" style="display: inline-block; padding: 15px 40px; font-size: 1.1rem;">
                    <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
        </a>
    </div>
</div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
