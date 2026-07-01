<?php
function badvice_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    add_post_type_support('page', 'excerpt');
}
add_action('after_setup_theme', 'badvice_setup');

// Duidelijke, unieke titel voor de homepage in zoekresultaten
add_filter('document_title_parts', function($title_parts) {
    if (is_front_page()) {
        $title_parts['title'] = 'Ondergrondse container plaatsen & beheer';
    }
    return $title_parts;
});

// Meta description per pagina — voorkomt dat Google zelf een (rommelige) samenvatting kiest
function badvice_meta_description() {
    $descriptions_by_template = [
        'template-diensten.php'       => 'Bekijk alle diensten van B-Advice: plaatsing van ondergrondse containers, projectmanagement, beheer, onderhoud en aanbesteding voor gemeenten.',
        'template-over-ons.php'       => 'B-Advice is specialist in ondergrondse afvalinfrastructuur met meer dan twee decennia ervaring. Actief in 40+ gemeenten in Nederland.',
        'template-contact.php'        => 'Neem contact op met B-Advice voor advies over ondergrondse containers, plaatsing of containerbeheer. Via e-mail, telefoon of het contactformulier.',
        'template-locatieaanvraag.php' => 'Vraag een locatiebeoordeling aan voor een ondergrondse container. B-Advice beoordeelt de haalbaarheid snel en professioneel.',
        'template-privacy.php'        => 'Lees hoe B-Advice omgaat met persoonsgegevens conform de AVG. Privacyverklaring voor bezoekers van b-advice.info.',
        'template-cookies.php'        => 'Het cookiebeleid van B-Advice: welke cookies we gebruiken op b-advice.info en hoe u uw voorkeuren kunt instellen.',
    ];

    if (is_front_page()) {
        return 'B-Advice is specialist in ondergrondse afvalinfrastructuur. Van plaatsing tot digitaal containerbeheer via B-Organized. Actief in 40+ gemeenten in Nederland.';
    }

    foreach ($descriptions_by_template as $template => $description) {
        if (is_page_template($template)) {
            return $description;
        }
    }

    if (is_singular() && has_excerpt()) {
        return wp_strip_all_tags(get_the_excerpt());
    }

    if (is_singular()) {
        return wp_trim_words(wp_strip_all_tags(get_the_content()), 30, '...');
    }

    return 'B-Advice is specialist in ondergrondse afvalinfrastructuur en digitaal containerbeheer.';
}

add_action('wp_head', function() {
    $description = trim(badvice_meta_description());
    if ($description === '') {
        return;
    }
    echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
}, 1);

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
