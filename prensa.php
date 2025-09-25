<?php include 'includes/header.php'; ?>

<!-- Estilos personalizados para la página de prensa -->
<style>
.prensa-page {
    background: url('img/fondo1.jpg') center center/cover no-repeat fixed;
    min-height: 100vh;
    position: relative;
}

.prensa-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.prensa-content {
    position: relative;
    z-index: 2;
}

.prensa-title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    margin-bottom: 3rem;
    text-align: center;
}

.prensa-card {
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
}

.prensa-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
}

.prensa-card h3 {
    color: #b72327;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.prensa-card p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}

.prensa-card .btn {
    background: linear-gradient(45deg, #b72327, #8b1a1a);
    border: none;
    border-radius: 25px;
    padding: 12px 30px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.prensa-card .btn:hover {
    background: linear-gradient(45deg, #8b1a1a, #b72327);
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(183, 35, 39, 0.4);
}

.prensa-image {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
}

.prensa-image:hover {
    transform: scale(1.02);
}

.prensa-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.prensa-card .row {
    height: 100%;
}

.prensa-card .col-md-4 {
    display: flex;
    align-items: center;
}

.prensa-card .col-md-8 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.prensa-image {
    height: 200px;
    width: 100%;
}

@media (max-width: 768px) {
    .prensa-title {
        font-size: 2rem;
    }
    
    .prensa-card {
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        height: auto;
        min-height: 400px;
    }
    
    .prensa-card p {
        -webkit-line-clamp: 4;
    }
    
    .prensa-image {
        height: 150px;
    }
    
    .container {
        padding-top: 100px !important;
        padding-bottom: 30px !important;
    }
}
</style>

<!-- Página de Prensa con fondo personalizado -->
<div class="prensa-page">
    <div class="prensa-content">
        <div class="container" style="padding-top: 120px; padding-bottom: 50px;">
            <h1 class="prensa-title"><?php echo t('nav_press'); ?></h1>
            
            <!-- Grid de Cards de Prensa -->
            <div class="row">
                <!-- Prensa 1 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa1.png" alt="Prensa 1" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_1_title'); ?></h3>
                                <p><?php echo t('prensa_1_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.instagram.com/p/BtQ8NP_F_Bh/" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                    </div>
                </div>
            </div>
        </div>


       <!-- Prensa 2 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa2.png" alt="Prensa 2" class="img-fluid">
                                </div>
                    </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_2_title'); ?></h3>
                                <p><?php echo t('prensa_2_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.vice.com/es/article/nemej7/asi-es-ser-dominatrix-en-bogota-sexo-esclavo" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
  
        
       <!-- Prensa 3 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa3.png" alt="Prensa 3" class="img-fluid">
                        </div>
                    </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_3_title'); ?></h3>
                                <p><?php echo t('prensa_3_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.shock.co/sexo-y-amor-en-los-tiempos-de-internet/la-guia-del-placer-sexual-no-convencional" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                    </div>
                </div>
            </div>
        </div>

 <!-- Prensa 4 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa4.png" alt="Prensa 4" class="img-fluid">
                                </div>
                    </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_4_title'); ?></h3>
                                <p><?php echo t('prensa_4_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=jRmn1qWch7s&amp;t=8s" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
  
        
       <!-- Prensa 5 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa5.png" alt="Prensa 5" class="img-fluid">
                        </div>
                    </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_5_title'); ?></h3>
                                <p><?php echo t('prensa_5_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=lqQ0-a6GOCw" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                    </div>
                </div>
            </div>
        </div>


 <!-- Prensa 6 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa6.png" alt="Prensa 6" class="img-fluid">
                                </div>
                    </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_6_title'); ?></h3>
                                <p><?php echo t('prensa_6_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.facebook.com/100063796582080/videos/c%C3%B3mo-vamos-colombia/392524402714265/" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

        <!-- Prensa 7 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa7.png" alt="Prensa 7" class="img-fluid">
                        </div>
                    </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_7_title'); ?></h3>
                                <p><?php echo t('prensa_7_text'); ?></p>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=3DfdERZbigs" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                    </div>
                </div>
            </div>
        </div>

         <!-- Prensa 8 -->
                <div class="col-12 mb-4">
                    <div class="prensa-card">
                        <div class="row align-items-center">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="prensa-image">
                                    <img src="img/prensa/prensa8.png" alt="Prensa 8" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h3><?php echo t('prensa_8_title'); ?></h3>
                                <p><?php echo t('prensa_8_text'); ?></p>
                                <a class="btn btn-primary" href="https://calameo.com/read/006241677dee32cd8aa84" target="_blank" role="button">
                                    <?php echo t('prensa_click'); ?>
                                </a>
                    </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<?php include 'includes/footer.php'; ?>
