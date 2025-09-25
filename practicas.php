<?php include 'includes/header.php'; ?>

<style>
/* Estilos para la página de prácticas */
.practicas-page {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(183, 35, 39, 0.3), rgba(0, 0, 0, 0.9)), url('img/hero-bg.png.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    position: relative;
    padding-top: 120px;
}

.practicas-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(183, 35, 39, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
    z-index: 1;
}

.practicas-content {
    position: relative;
    z-index: 2;
    padding: 40px 0;
}

/* Estilos para las secciones */
.gallery-section {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    margin: 30px 0;
    padding: 40px 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: fadeInUp 0.8s ease-out;
    position: relative;
}

.gallery-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(183, 35, 39, 0.1), rgba(0, 0, 0, 0.2));
    border-radius: 20px;
    z-index: -1;
}

.gallery-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
}

.section-title {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #b72327, transparent);
    border-radius: 2px;
}

/* Estilos para las imágenes */
.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.image-card {
    position: relative;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
}

.image-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

.image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-card:hover img {
    transform: scale(1.1);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(183, 35, 39, 0.8), rgba(0, 0, 0, 0.6));
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-card:hover .image-overlay {
    opacity: 1;
}

.search-icon {
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .practicas-page {
        padding-top: 100px;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .image-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }
    
    .image-card {
        height: 200px;
    }
}

/* Lightbox styles */
.lb-data .lb-close {
    background: #b72327 !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    line-height: 40px !important;
    text-align: center !important;
    font-size: 20px !important;
    color: white !important;
    text-shadow: none !important;
}

.lb-overlay {
    background: rgba(0, 0, 0, 0.9) !important;
}

.lb-image {
    border: 3px solid #b72327 !important;
    border-radius: 10px !important;
}

/* Footer protection */
.footer, .copyright {
    background: #000000 !important;
    background-color: #000000 !important;
}

.footer *, .copyright * {
    background: inherit !important;
    background-color: inherit !important;
}
</style>

<!-- Página de Prácticas -->
<div class="practicas-page">
    <div class="practicas-content">
        <div class="container">

            <!-- Sección: Fetiche de Pies -->
            <section class="gallery-section">
                <h1 class="section-title"><?php echo t('practicas_feet_title'); ?></h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 10; $i++): ?>
                        <div class="image-card">
                            <img src="img/pies/pies<?php echo $i; ?>.jpg" alt="Pies <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/pies/pies<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

            <!-- Sección: Fishnet Fetish -->
            <section class="gallery-section">
                <h1 class="section-title"><?php echo t('practicas_fishnet_title'); ?></h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 18; $i++): ?>
                        <div class="image-card">
                            <img src="img/fishnets/fishnets<?php echo $i; ?>.jpg" alt="Fishnet <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/fishnets/fishnets<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

            <!-- Sección: Smell Fetish -->
            <section class="gallery-section">
                <h1 class="section-title"><?php echo t('practicas_smell_title'); ?></h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 4; $i++): ?>
                        <div class="image-card">
                            <img src="img/smell/smell<?php echo $i; ?>.jpg" alt="Smell <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/smell/smell<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

            <!-- Sección: Lick my boots -->
            <section class="gallery-section">
                <h1 class="section-title"><?php echo t('practicas_boots_title'); ?></h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 7; $i++): ?>
                        <div class="image-card">
                            <img src="img/boots/boots<?php echo $i; ?>.jpg" alt="Boots <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/boots/boots<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

            <!-- Sección: Nylon Fetish -->
            <section class="gallery-section">
                <h1 class="section-title"><?php echo t('practicas_nylon_title'); ?></h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 6; $i++): ?>
                        <div class="image-card">
                            <img src="img/nylon/nylon<?php echo $i; ?>.jpg" alt="Nylon <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/nylon/nylon<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

            <!-- Sección: Smoking Fetish -->
            <section class="gallery-section">
                <h1 class="section-title"><?php echo t('practicas_smoking_title'); ?></h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 3; $i++): ?>
                        <div class="image-card">
                            <img src="img/smoking/smoking<?php echo $i; ?>.jpg" alt="Smoking <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/smoking/smoking<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

            <!-- Sección: Chastity -->
            <section class="gallery-section">
                <h1 class="section-title">CHASTITY</h1>
                <div class="image-grid">
                    <?php for($i = 1; $i <= 4; $i++): ?>
                        <div class="image-card">
                            <img src="img/chastity/castidad<?php echo $i; ?>.jpg" alt="Chastity <?php echo $i; ?>">
                            <div class="image-overlay">
                                <a href="img/chastity/castidad<?php echo $i; ?>.jpg" data-lightbox="practicas" title="Ver imagen en tamaño completo">
                                    <i class="fa fa-search-plus search-icon"></i>
                                </a>
                            </div>
                        </div>
                    <?php endfor; ?>
                </div>
            </section>

        </div>
    </div>
</div>

<!-- Script para lightbox -->
<script>
$(document).ready(function() {
    // Inicializar lightbox
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': false,
            'albumLabel': 'Imagen %1 de %2'
        });
    }
    
    // Fallback personalizado si lightbox no está disponible
    $('[data-lightbox]').on('click', function(e) {
        e.preventDefault();
        const imageSrc = $(this).attr('href');
        const modal = $(`
            <div class="custom-lightbox" style="
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.9); z-index: 9999; display: flex; 
                align-items: center; justify-content: center;
            ">
                <div style="position: relative; max-width: 90%; max-height: 90%;">
                    <img src="${imageSrc}" style="max-width: 100%; max-height: 100%; border-radius: 10px;">
                    <button class="close-btn" style="
                        position: absolute; top: -40px; right: 0; background: #b72327; 
                        color: white; border: none; border-radius: 50%; width: 40px; 
                        height: 40px; font-size: 20px; cursor: pointer;
                    ">×</button>
                </div>
            </div>
        `);
        
        $('body').append(modal);
        modal.fadeIn();
        
        modal.on('click', function(e) {
            if (e.target === this || $(e.target).hasClass('close-btn')) {
                modal.fadeOut(function() {
                    modal.remove();
                });
            }
        });
        
        $(document).on('keyup', function(e) {
            if (e.keyCode === 27) {
                modal.fadeOut(function() {
                    modal.remove();
                });
            }
        });
    });
});
</script>

<?php include 'includes/footer.php'; ?>