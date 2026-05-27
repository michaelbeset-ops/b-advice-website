<?php
/* Template Name: Dienst Detail */
add_action('wp_head', function() { ?>
<style>
.dienst-layout { display:grid; grid-template-columns:1fr 360px; gap:72px; padding:64px 80px 96px; align-items:start; }
.dienst-body { font-size:16px; line-height:1.8; color:var(--ink-3); }
.dienst-body h2 { font-size:24px; font-weight:700; color:var(--ink); margin:36px 0 12px; letter-spacing:-.3px; }
.dienst-body h3 { font-size:18px; font-weight:700; color:var(--ink); margin:24px 0 8px; }
.dienst-body p { margin-bottom:16px; }
.dienst-body ul { padding-left:20px; margin-bottom:16px; }
.dienst-body li { margin-bottom:8px; }
.dienst-sidebar { position:sticky; top:88px; display:flex; flex-direction:column; gap:20px; }
.sidebar-card { background:var(--bg-2); border:1px solid var(--border); border-radius:12px; padding:28px; }
.sidebar-card-title { font-size:14px; font-weight:700; color:var(--ink); margin-bottom:16px; }
.dienst-nav { display:flex; flex-direction:column; gap:6px; }
.dienst-nav a { font-size:14px; color:var(--ink-3); padding:8px 12px; border-radius:6px; transition:background .15s, color .15s; }
.dienst-nav a:hover { background:rgba(76,175,114,.08); color:var(--ink); }
.dienst-nav a.current { background:rgba(76,175,114,.1); color:var(--green); font-weight:600; }
@media(max-width:768px) { .dienst-layout { grid-template-columns:1fr !important; padding:32px 20px 64px !important; } .dienst-sidebar { position:static; } }
</style>
<?php });

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
