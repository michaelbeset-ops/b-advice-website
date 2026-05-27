<?php get_header(); ?>

<section class="page-hero">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>Nieuws</span></div>
  <h1 class="page-hero-title">Laatste <em>nieuws</em></h1>
  <p class="page-hero-sub">Actuele berichten over afvalinfrastructuur, projecten en B-Advice.</p>
</section>

<section class="section">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:0;">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article style="background:#fff;border:1px solid var(--border);border-radius:12px;overflow:hidden;">
      <?php if (has_post_thumbnail()) : ?>
        <div style="aspect-ratio:16/9;overflow:hidden;">
          <?php the_post_thumbnail('medium_large', ['style' => 'width:100%;height:100%;object-fit:cover;display:block;']); ?>
        </div>
      <?php endif; ?>
      <div style="padding:24px;">
        <div style="font-family:var(--mono);font-size:10px;color:var(--green);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">
          <?php echo get_the_date('d M Y'); ?>
        </div>
        <h2 style="font-size:18px;font-weight:700;letter-spacing:-.3px;color:var(--ink);margin-bottom:10px;">
          <a href="<?php the_permalink(); ?>" style="color:inherit;"><?php the_title(); ?></a>
        </h2>
        <p style="font-size:14px;line-height:1.65;color:var(--ink-3);"><?php the_excerpt(); ?></p>
        <a href="<?php the_permalink(); ?>" style="display:inline-flex;margin-top:16px;font-size:13px;font-weight:600;color:var(--green);">Lees meer →</a>
      </div>
    </article>
    <?php endwhile;
    the_posts_pagination(['mid_size' => 2]);
    else : ?>
    <p style="color:var(--ink-3);">Geen berichten gevonden.</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
