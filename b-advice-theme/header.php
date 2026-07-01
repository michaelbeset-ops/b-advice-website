<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="<?php echo get_template_directory_uri(); ?>/assets/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/assets/favicon-16x16.png">
  <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/apple-touch-icon.png">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="nav" id="sitenav">
  <a class="nav-logo" href="<?php echo home_url('/'); ?>" style="display:flex;align-items:center;">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/b-advice-logo.png" alt="B-Advice" style="height:40px;display:block;" />
  </a>
  <div class="nav-center">
    <a href="<?php echo home_url('/diensten/'); ?>"<?php if (is_page('diensten') || is_page_parent('diensten')) echo ' class="active"'; ?>>Diensten</a>
    <a href="<?php echo home_url('/b-organized/'); ?>"<?php if (is_page('b-organized')) echo ' class="active"'; ?>>B-Organized</a>
    <a href="<?php echo home_url('/b-covered/'); ?>"<?php if (is_page('b-covered')) echo ' class="active"'; ?>>B-Covered</a>
    <a href="<?php echo home_url('/producten/'); ?>"<?php if (is_page('producten')) echo ' class="active"'; ?>>Producten</a>
    <a href="<?php echo home_url('/nieuws/'); ?>"<?php if (is_page('nieuws') || is_singular('post') || is_home()) echo ' class="active"'; ?>>Nieuws</a>
    <a href="<?php echo home_url('/locatieaanvraag/'); ?>"<?php if (is_page('locatieaanvraag')) echo ' class="active"'; ?>>Locatieaanvraag</a>
    <a href="<?php echo home_url('/over-ons/'); ?>"<?php if (is_page('over-ons')) echo ' class="active"'; ?>>Over ons</a>
  </div>
  <div class="nav-right">
    <a href="<?php echo home_url('/contact/'); ?>" class="nav-contact">Contact</a>
    <a href="http://b-organized.info" target="_blank" class="nav-cta">Login B-Organized</a>
  </div>
  <button class="nav-hamburger" id="navHamburger" aria-label="Menu" style="display:none;">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-mobile-overlay" id="navMobileOverlay">
  <div class="nav-mobile-links">
    <a href="<?php echo home_url('/diensten/'); ?>">Diensten</a>
    <a href="<?php echo home_url('/b-organized/'); ?>">B-Organized</a>
    <a href="<?php echo home_url('/b-covered/'); ?>">B-Covered</a>
    <a href="<?php echo home_url('/producten/'); ?>">Producten</a>
    <a href="<?php echo home_url('/nieuws/'); ?>">Nieuws</a>
    <a href="<?php echo home_url('/locatieaanvraag/'); ?>">Locatieaanvraag</a>
    <a href="<?php echo home_url('/over-ons/'); ?>">Over ons</a>
    <a href="<?php echo home_url('/contact/'); ?>" class="nav-mobile-contact" style="font-size:15px;color:var(--ink-4);font-weight:400;">Contact</a>
  </div>
  <a href="http://b-organized.info" target="_blank" class="nav-mobile-cta" style="display:block;text-align:center;text-decoration:none;">Login B-Organized</a>
</div>
