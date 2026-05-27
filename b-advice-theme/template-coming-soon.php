<?php
/* Template Name: Coming Soon */
get_header(); ?>

<div class="coming-soon-wrap">
  <div class="coming-soon-tag">
    <span class="tag"><span class="tag-dot"></span>Binnenkort</span>
  </div>
  <h1 class="coming-soon-title"><?php the_title(); ?></h1>
  <div class="coming-soon-divider"></div>
  <p class="coming-soon-sub">
    <?php
    if (have_posts()) { while (have_posts()) { the_post();
      $excerpt = get_the_excerpt();
      echo $excerpt ? esc_html($excerpt) : 'We werken aan deze pagina. Binnenkort vindt u hier meer informatie.';
    }}
    ?>
  </p>
  <a href="<?php echo home_url('/contact/'); ?>" class="btn-primary">Neem alvast contact op</a>
  <a href="<?php echo home_url('/'); ?>" class="coming-soon-back">← Terug naar home</a>
</div>

<?php get_footer(); ?>
