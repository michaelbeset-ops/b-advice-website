<?php get_header(); ?>

<section class="page-hero">
  <h1 class="page-hero-title"><?php the_title(); ?></h1>
</section>

<section class="section">
  <div style="max-width:760px;">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <div style="font-size:16px;line-height:1.8;color:var(--ink-3);"><?php the_content(); ?></div>
    <?php endwhile; endif; ?>
  </div>
</section>

<?php get_footer(); ?>
