<?php include_once 'config/config.php'; ?>

<div class="navbar-nav ms-auto py-0">
    <a href="<?php echo get_config('navigation')['home']; ?>" class="nav-item nav-link active"><?php echo t('nav_home'); ?></a>
    <a href="<?php echo get_config('navigation')['reglas']; ?>" class="nav-item nav-link active"><?php echo t('nav_rules'); ?></a>
    <a href="<?php echo get_config('navigation')['practicas']; ?>" class="nav-item nav-link active"><?php echo t('nav_practices'); ?></a>

    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><?php echo t('nav_services'); ?></a>
        <div class="dropdown-menu m-0">
            <a href="<?php echo get_config('navigation')['servicios']['presenciales']; ?>" class="dropdown-item"><?php echo t('services_presencial'); ?></a>
            <a href="<?php echo get_config('navigation')['servicios']['virtuales']; ?>" class="dropdown-item"><?php echo t('services_virtual'); ?></a>
            <a href="<?php echo get_config('navigation')['servicios']['shows']; ?>" class="dropdown-item"><?php echo t('services_shows'); ?></a>
            <a href="<?php echo get_config('navigation')['servicios']['talleres']; ?>" class="dropdown-item"><?php echo t('services_workshops'); ?></a>
        </div>
    </div>
    
    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><?php echo t('nav_gallery'); ?></a>
        <div class="dropdown-menu m-0">
            <a href="<?php echo get_config('navigation')['galeria']['profesionales']; ?>" class="dropdown-item"><?php echo t('gallery_professional'); ?></a>
            <a href="<?php echo get_config('navigation')['galeria']['sesiones']; ?>" class="dropdown-item"><?php echo t('gallery_sessions'); ?></a>
            <a href="<?php echo get_config('navigation')['galeria']['mazmorra']; ?>" class="dropdown-item"><?php echo t('gallery_dungeon'); ?></a>
        </div>
    </div>
    
    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><?php echo t('nav_shop'); ?></a>
        <div class="dropdown-menu m-0">
            <a href="<?php echo get_config('navigation')['tienda']['sexshop']; ?>" class="dropdown-item"><?php echo t('shop_sexshop'); ?></a>
            <a href="<?php echo get_config('navigation')['tienda']['ropa_interior']; ?>" class="dropdown-item"><?php echo t('shop_underwear'); ?></a>
        </div>
    </div>

    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><?php echo t('nav_news'); ?></a>
        <div class="dropdown-menu m-0">
            <a href="<?php echo get_config('navigation')['noticias']['eventos']; ?>" class="dropdown-item"><?php echo t('news_events'); ?></a>
        </div>
    </div>
    
    <a href="<?php echo get_config('navigation')['lista_deseos']; ?>" class="nav-item nav-link"><?php echo t('nav_wishlist'); ?></a>
    <a href="<?php echo get_config('navigation')['prensa']; ?>" class="nav-item nav-link"><?php echo t('nav_press'); ?></a>
    
    <!-- Selector de idioma -->
    <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i class="fas fa-globe me-1"></i><?php echo t('language'); ?>
        </a>
        <div class="dropdown-menu m-0">
            <a href="change_language.php?lang=es&redirect=<?php echo urlencode($_SERVER['REQUEST_URI']); ?>" class="dropdown-item">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI1IiBmaWxsPSIjQ0MwMDAwIi8+CjxyZWN0IHk9IjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iNSIgZmlsbD0iI0NDMDAwMCIvPgo8L3N2Zz4K" alt="ES" width="20" height="15" class="me-2"><?php echo t('language_es'); ?>
            </a>
            <a href="change_language.php?lang=en&redirect=<?php echo urlencode($_SERVER['REQUEST_URI']); ?>" class="dropdown-item">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjMDA0MDg4Ii8+CjxwYXRoIGQ9Ik0wIDBoMjB2MTVoLTIweiIgZmlsbD0iI0ZGRkZGRiIvPgo8cGF0aCBkPSJNMiAwaDE2djE1aC0xNnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==" alt="EN" width="20" height="15" class="me-2"><?php echo t('language_en'); ?>
            </a>
        </div>
    </div>
</div>
