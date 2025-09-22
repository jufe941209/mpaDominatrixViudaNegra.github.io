<!-- Página en Construcción -->
<div class="container" style="padding-top: 150px; padding-bottom: 100px;">
    <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
            <div class="construction-icon mb-4">
                <i class="fas fa-tools fa-5x text-primary"></i>
            </div>
            <h1 class="mb-4"><?php echo t('construction_title'); ?></h1>
            <p class="mb-4"><?php echo t('construction_message'); ?></p>
            <div class="spinner-border text-primary mb-4" role="status" style="width: 3rem; height: 3rem;">
                <span class="sr-only">Cargando...</span>
            </div>
            <div class="mt-4">
                <a href="index.php" class="btn btn-primary btn-lg me-3">
                    <i class="fas fa-home me-2"></i><?php echo t('construction_home'); ?>
                </a>
                <a href="https://api.whatsapp.com/send?phone=573115710072" class="btn btn-success btn-lg" target="_blank">
                    <i class="fab fa-whatsapp me-2"></i><?php echo t('construction_contact'); ?>
                </a>
            </div>
        </div>
    </div>
</div>
