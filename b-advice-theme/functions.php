<?php
function badvice_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    add_post_type_support('page', 'excerpt');
}
add_action('after_setup_theme', 'badvice_setup');

function badvice_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'badvice-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Mono:wght@400;500&display=swap',
        [],
        null
    );
    // Hoofdstijlblad
    wp_enqueue_style('badvice-style', get_stylesheet_uri(), ['badvice-fonts'], '1.0');
}
add_action('wp_enqueue_scripts', 'badvice_scripts');

// Verwijder WordPress standaard emoji scripts
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Verwijder WordPress versienummer uit head
remove_action('wp_head', 'wp_generator');

// Forceer front-page.php voor de voorpagina, ongeacht WordPress template-selectie
add_filter('template_include', function($template) {
    if (is_front_page() || (is_page() && 'home' === get_post_field('post_name', get_queried_object_id()))) {
        $fp = get_template_directory() . '/front-page.php';
        if (file_exists($fp)) {
            return $fp;
        }
    }
    return $template;
}, 99);
