<?php
/* Template Name: Dienst Detail */
get_header(); ?>

<section class="page-hero">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>Diensten</span></div>
  <h1 class="page-hero-title"><?php the_title(); ?></h1>
  <?php if (has_excerpt()) : ?>
  <p class="page-hero-sub"><?php the_excerpt(); ?></p>
  <?php endif; ?>
</section>

<div class="dienst-layout">
  <div class="dienst-body">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <?php the_content(); ?>
    <?php endwhile; endif; ?>
  </div>
  <aside class="dienst-sidebar">
    <div class="sidebar-card">
      <div class="sidebar-card-title">Alle diensten</div>
      <nav class="dienst-nav">
        <a href="<?php echo home_url('/diensten/afvalinzameling/'); ?>" <?php if(is_page('afvalinzameling')) echo 'class="current"'; ?>>Afvalinzameling &amp; Management</a>
        <a href="<?php echo home_url('/diensten/plaatsing/'); ?>" <?php if(is_page('plaatsing')) echo 'class="current"'; ?>>Plaatsen van inzamelmiddelen</a>
        <a href="<?php echo home_url('/diensten/projectmanagement/'); ?>" <?php if(is_page('projectmanagement')) echo 'class="current"'; ?>>Projectmanagement</a>
        <a href="<?php echo home_url('/diensten/meerjaren-investeringsplan/'); ?>" <?php if(is_page('meerjaren-investeringsplan')) echo 'class="current"'; ?>>Meerjaren Investeringsplan</a>
        <a href="<?php echo home_url('/diensten/beheer-onderhoud/'); ?>" <?php if(is_page('beheer-onderhoud')) echo 'class="current"'; ?>>Beheer, onderhoud &amp; refurbish</a>
        <a href="<?php echo home_url('/diensten/aanbesteding/'); ?>" <?php if(is_page('aanbesteding')) echo 'class="current"'; ?>>Aanbesteding &amp; bestek</a>
        <a href="<?php echo home_url('/diensten/bewonersparticipatie/'); ?>" <?php if(is_page('bewonersparticipatie')) echo 'class="current"'; ?>>Bewonersparticipatie</a>
      </nav>
    </div>
    <div class="sidebar-card" style="background:var(--green);border-color:var(--green);">
      <div class="sidebar-card-title" style="color:#fff;">Vrijblijvend adviesgesprek</div>
      <p style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.6;margin-bottom:16px;">Benieuwd wat wij voor uw project kunnen betekenen? Neem contact op.</p>
      <a href="<?php echo home_url('/contact/'); ?>" style="display:block;background:#fff;color:var(--green);text-align:center;padding:11px 16px;border-radius:7px;font-size:14px;font-weight:600;">Contact opnemen</a>
    </div>
  </aside>
</div>

<div class="cta-band">
  <div>
    <div class="cta-band-title">Heeft u een project waar wij in mee kunnen denken?</div>
    <p class="cta-band-sub">Neem vrijblijvend contact op — wij reageren binnen één werkdag.</p>
  </div>
  <a href="<?php echo home_url('/contact/'); ?>" class="btn-white">Neem contact op</a>
</div>

<?php get_footer(); ?>
