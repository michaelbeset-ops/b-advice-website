/* Gedeeld script voor alle pagina's: navigatie, mobiel menu en cookiemelding.
   Dit is het bronbestand — pas het hier aan. */
(function(){
  var nav=document.getElementById('sitenav');
  if(nav){window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>20);},{passive:true});}
  var btn=document.getElementById('navHamburger');
  var overlay=document.getElementById('navMobileOverlay');
  if(btn&&overlay){
    btn.addEventListener('click',function(){var isOpen=overlay.classList.toggle('open');btn.classList.toggle('open',isOpen);btn.setAttribute('aria-expanded',isOpen);document.body.style.overflow=isOpen?'hidden':'';});
    overlay.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){overlay.classList.remove('open');btn.classList.remove('open');document.body.style.overflow='';});});
  }
  (function initCookieBanner(){
    if(localStorage.getItem('b_advice_consent'))return;
    var s=document.createElement('style');
    s.textContent='#cookie-banner{position:fixed;bottom:0;left:0;right:0;z-index:9998;background:#0f1e16;border-top:3px solid #4CAF72;padding:20px 80px;transform:translateY(110%);transition:transform .45s cubic-bezier(.4,0,.2,1);box-shadow:0 -8px 40px rgba(0,0,0,.3)}.ck-visible{transform:translateY(0)!important}.ck-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:24px}.ck-text{flex:1}.ck-title{display:block;font-size:15px;font-weight:700;color:#fff;margin-bottom:4px}.ck-desc{font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;margin:0}.ck-desc a{color:#4CAF72;text-decoration:underline}.ck-actions{display:flex;gap:10px;flex-shrink:0}#ck-accept{padding:10px 22px;background:#4CAF72;color:#fff;border:none;border-radius:7px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap}#ck-accept:hover{background:#3d9f63}#ck-necessary{padding:10px 18px;background:transparent;color:rgba(255,255,255,.7);border:1.5px solid rgba(255,255,255,.2);border-radius:7px;font-size:14px;font-weight:500;cursor:pointer;font-family:inherit;white-space:nowrap}@media(max-width:768px){#cookie-banner{padding:20px}.ck-inner{flex-direction:column;gap:16px}.ck-icon{display:none}.ck-actions{width:100%;flex-direction:column}#ck-accept,#ck-necessary{width:100%;text-align:center;padding:13px 20px;font-size:15px}}';
    document.head.appendChild(s);
    var banner=document.createElement('div');banner.id='cookie-banner';
    banner.innerHTML='<div class="ck-inner"><div class="ck-text"><strong class="ck-title">Wij gebruiken cookies</strong><p class="ck-desc">Wij gebruiken alleen functionele opslag voor een goede werking van de website, geen tracking- of analytische cookies. Lees meer in ons <a href="/cookies/">cookiebeleid</a>.</p></div><div class="ck-actions"><button id="ck-accept">Begrepen</button></div></div>';
    document.body.appendChild(banner);
    requestAnimationFrame(function(){requestAnimationFrame(function(){banner.classList.add('ck-visible');});});
    function dismiss(val){localStorage.setItem('b_advice_consent',val);banner.classList.remove('ck-visible');banner.addEventListener('transitionend',function(){if(banner.parentNode)banner.parentNode.removeChild(banner);},{once:true});}
    document.getElementById('ck-accept').addEventListener('click',function(){dismiss('acknowledged');});
    window.resetCookieConsent=function(){localStorage.removeItem('b_advice_consent');initCookieBanner();};
  })();
})();
