<?php include 'includes/header.php'; ?>

<!-- Comienzo de tienda -->

<div class="tienda-container">
    <div class="tienda-header">
        <h1 class="tienda-titulo"><?php echo t('shop_underwear_title'); ?></h1>
        <p class="tienda-descripcion"><?php echo t('shop_underwear_description'); ?></p>
    </div>

    <div class="tienda-productos">
        <div class="tienda-item">
            <a href="img/tienda/interior1.jpg" data-lightbox="tienda" data-title="Conjunto Rojo Seductor">
                <img src="img/tienda/interior1.jpg" alt="Ropa Interior 1" class="tienda-img">
            </a>
            <h3 class="tienda-nombre">Conjunto Rojo Seductor</h3>
            <p class="tienda-detalle">Tejido suave y aroma irresistible. Perfecto para coleccionistas.</p>
            <span class="tienda-precio">$50 USD</span>
        </div>
        
        <div class="tienda-item">
            <img src="img/ropa2.jpg" alt="Ropa Interior 2" class="tienda-img">
            <h3 class="tienda-nombre">Panties de Encaje Negro</h3>
            <p class="tienda-detalle">Usado en una noche especial, lleno de recuerdos y sensualidad.</p>
            <span class="tienda-precio">$40 USD</span>
        </div>

        <div class="tienda-item">
            <img src="img/ropa3.jpg" alt="Ropa Interior 3" class="tienda-img">
            <h3 class="tienda-nombre">Brasier de Seda Azul</h3>
            <p class="tienda-detalle">Ligero, cómodo y con esencia inolvidable.</p>
            <span class="tienda-precio">$45 USD</span>
        </div>

        <div class="tienda-item">
            <img src="img/ropa4.jpg" alt="Ropa Interior 4" class="tienda-img">
            <h3 class="tienda-nombre">Pack Especial (3 piezas)</h3>
            <p class="tienda-detalle">Edición limitada con tres prendas seleccionadas a tu gusto.</p>
            <span class="tienda-precio">$120 USD</span>
        </div>
    </div>

    <div class="tienda-boton">
        <a href="https://api.whatsapp.com/send?phone=573115710072" class="tienda-compra">
            <i class="fab fa-whatsapp"></i> <?php echo t('shop_underwear_buy'); ?>
        </a>
    </div>
</div>

<!--Fin de la tienda-->

<?php include 'includes/footer.php'; ?>
