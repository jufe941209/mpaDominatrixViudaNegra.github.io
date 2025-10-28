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

        <!-- Sesiones Múltiples -->
        <div class="row g-4 mt-4 py-5" style="background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 2px solid #b72327;">
            <div class="col-12">
                <div class="text-center mb-5">
                    <h2 class="mb-3" style="color: #b72327; font-weight: bold; font-size: 2.5rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                        🔥 <?php echo t('presenciales_multiples_title'); ?> 🔥
                    </h2>
                    <h4 class="mb-4" style="color: #ffffff; font-weight: 300; font-style: italic;">
                        <?php echo t('presenciales_multiples_subtitle'); ?>
                    </h4>
                    <div class="alert alert-warning mb-4" style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); border: 2px solid #ff4500; border-radius: 15px; color: white; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        <?php echo t('presenciales_multiples_warning'); ?>
                    </div>
                    <p class="mb-4" style="color: #e0e0e0; font-size: 1.1rem; line-height: 1.6;">
                        <?php echo t('presenciales_multiples_description'); ?>
                    </p>
                </div>
                
                <!-- Galería de Sesiones Múltiples -->
                <div class="row g-4">
                    <div class="col-12">
                        <h3 class="text-center mb-4" style="color: #b72327; font-weight: bold;">
                            <i class="fas fa-images me-2"></i><?php echo t('presenciales_multiples_gallery'); ?>
                        </h3>
                    </div>
                    
                    <!-- Imagen 1 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 15px; background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <img src="img/presenciales/multiples 1.jpg" alt="Sesión Múltiple 1" class="card-img-top" style="height: 250px; object-fit: cover; transition: transform 0.3s ease;">
                            <div class="card-body text-center" style="padding: 20px;">
                                <h5 class="card-title" style="color: #b72327; font-weight: bold;">Sesión Grupal 1</h5>
                                <p class="card-text" style="color: #e0e0e0; font-size: 0.9rem;">Experiencia de dominación grupal</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Imagen 2 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 15px; background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <img src="img/presenciales/multiples 2.jpg" alt="Sesión Múltiple 2" class="card-img-top" style="height: 250px; object-fit: cover; transition: transform 0.3s ease;">
                            <div class="card-body text-center" style="padding: 20px;">
                                <h5 class="card-title" style="color: #b72327; font-weight: bold;">Sesión Grupal 2</h5>
                                <p class="card-text" style="color: #e0e0e0; font-size: 0.9rem;">Dinámicas de poder múltiples</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Imagen 3 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 15px; background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <img src="img/presenciales/multiples 3.jpg" alt="Sesión Múltiple 3" class="card-img-top" style="height: 250px; object-fit: cover; transition: transform 0.3s ease;">
                            <div class="card-body text-center" style="padding: 20px;">
                                <h5 class="card-title" style="color: #b72327; font-weight: bold;">Sesión Grupal 3</h5>
                                <p class="card-text" style="color: #e0e0e0; font-size: 0.9rem;">Exploración grupal avanzada</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Imagen 4 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 15px; background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <img src="img/presenciales/multiples 4.jpg" alt="Sesión Múltiple 4" class="card-img-top" style="height: 250px; object-fit: cover; transition: transform 0.3s ease;">
                            <div class="card-body text-center" style="padding: 20px;">
                                <h5 class="card-title" style="color: #b72327; font-weight: bold;">Sesión Grupal 4</h5>
                                <p class="card-text" style="color: #e0e0e0; font-size: 0.9rem;">Experiencia de sumisión colectiva</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Imagen 5 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 15px; background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <img src="img/presenciales/multiples 5.jpg" alt="Sesión Múltiple 5" class="card-img-top" style="height: 250px; object-fit: cover; transition: transform 0.3s ease;">
                            <div class="card-body text-center" style="padding: 20px;">
                                <h5 class="card-title" style="color: #b72327; font-weight: bold;">Sesión Grupal 5</h5>
                                <p class="card-text" style="color: #e0e0e0; font-size: 0.9rem;">Dominación múltiple exclusiva</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Botón de Contacto -->
                <div class="text-center mt-5">
                    <button class="btn btn-danger btn-lg" style="border-radius: 30px; padding: 15px 40px; font-weight: bold; font-size: 1.1rem; box-shadow: 0 10px 30px rgba(183, 35, 39, 0.4);" onclick="window.open('https://wa.me/573115710072?text=Hola,%20me%20interesa%20información%20sobre%20Sesiones%20Múltiples', '_blank');">
                        <i class="fas fa-calendar-check me-2"></i>Consultar Disponibilidad y Reservar
                    </button>
                </div>
            </div>
        </div>

        <!-- Reglas -->
        <?php include 'components/reglas-content.php'; ?>

        <!-- Servicios Adicionales -->
        <div class="row g-4 mt-4 py-5" style="background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%); padding: 40px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2);">
            <div class="col-12">
                <h2 class="text-center mb-5" style="color: #b72327; font-weight: bold;"><?php echo t('presenciales_additional_services'); ?></h2>
                
                <!-- Servicios Adicionales -->
                <div class="row g-4">
                    <!-- Fuck Machine -->
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
                    
                    <!-- Alquiler de Sissys -->
                    <div class="col-md-6">
                        <div class="card h-100 shadow-lg" style="border: 2px solid #b72327; border-radius: 20px; background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%); box-shadow: 0 15px 40px rgba(183, 35, 39, 0.3); transition: transform 0.3s ease, box-shadow 0.3s ease;">
                            <div class="card-header text-center" style="background: linear-gradient(135deg, #b72327 0%, #8b1a1a 100%); color: white; border-radius: 20px 20px 0 0; border: none; padding: 25px; box-shadow: 0 5px 15px rgba(183, 35, 39, 0.3);">
                                <h5 class="mb-0" style="font-weight: bold; color: white !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">👗 <?php echo t('presenciales_sissys_rental'); ?></h5>
                            </div>
                            <div class="card-body text-center" style="padding: 30px;">
                                <img src="img/presenciales/sissys.jpg" alt="Alquiler de Sissys" class="img-fluid rounded" style="max-height: 300px; width: 100%; object-fit: cover; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
                                <p class="mt-3 text-muted" style="font-size: 0.95rem; line-height: 1.6;">
                                    <?php echo t('presenciales_sissys_rental_description'); ?>
                                </p>
                                <div class="mt-4">
                                    <span class="badge bg-success me-2" style="font-size: 0.8rem;">✓ <?php echo t('virtuales_available'); ?></span>
                                </div>
                                <button class="btn btn-danger btn-sm mt-3" style="border-radius: 25px; padding: 8px 20px; font-weight: bold;" onclick="window.open('https://wa.me/573115710072?text=Hola,%20me%20interesa%20el%20servicio%20de%20Alquiler%20de%20Sissys', '_blank');">
                                    <i class="fas fa-heart me-1"></i><?php echo t('virtuales_select'); ?>
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
