<?php include 'includes/header.php'; ?>

<!-- Servicios Presenciales -->
<div class="container-fluid servicios-presenciales py-5" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('img/fondo webcam.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">
    <div class="container py-4">
        <!-- Título Principal -->
        <div class="row g-6 align-items-center py-5">
            <div class="col-lg-12 p-5" style="background: linear-gradient(#b72327, rgba(0, 0, 0, 0.8)), url(img/fondo webcam.jpg);">
                <h1 class="mb-4 text-center" style="color: white;"><?php echo t('presenciales_title'); ?></h1>
                <p class="mb-4 text-center" style="color: white; font-size: 1.1rem; line-height: 1.6;">
                    <?php echo t('presenciales_description'); ?>
                </p>
            </div>
        </div>

        <!-- Reglas -->
        <?php include 'components/reglas-content.php'; ?>

        <!-- Servicios Adicionales -->
        <div class="row g-4 mt-4 py-5" style="background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%); padding: 40px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2);">
            <div class="col-12">
                <h2 class="text-center mb-5" style="color: #b72327; font-weight: bold;"><?php echo t('presenciales_additional_services'); ?></h2>
                
                <!-- Fuck Machine -->
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 20px; background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%); box-shadow: 0 15px 40px rgba(183, 35, 39, 0.3); transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <div class="card-header text-center" style="background: linear-gradient(135deg, #b72327 0%, #8b1a1a 100%); color: white; border-radius: 20px 20px 0 0; border: none; padding: 25px; box-shadow: 0 5px 15px rgba(183, 35, 39, 0.3);">
                                <h5 class="mb-0" style="font-weight: bold; color: white !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">🤖 <?php echo t('presenciales_fuck_machine'); ?></h5>
                            </div>
                            <div class="card-body text-center" style="padding: 30px;">
                                <img src="img/presenciales/fuckmachine.jpg" alt="Fuck Machine" class="img-fluid rounded" style="max-height: 300px; width: 100%; object-fit: cover; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
                                <p class="mt-3 text-muted" style="font-size: 0.95rem; line-height: 1.6;">
                                    <?php echo t('presenciales_fuck_machine_description'); ?>
                                </p>
                                <div class="mt-4">
                                    <span class="badge bg-success me-2" style="font-size: 0.8rem;">✓ <?php echo t('virtuales_available'); ?></span>
                                </div>
                                <button class="btn btn-danger btn-sm mt-3" style="border-radius: 25px; padding: 8px 20px; font-weight: bold;" onclick="window.open('https://wa.me/573115710072?text=Hola,%20me%20interesa%20el%20servicio%20de%20Fuck%20Machine', '_blank');">
                                    <i class="fas fa-robot me-1"></i><?php echo t('virtuales_select'); ?>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
