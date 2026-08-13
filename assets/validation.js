(() => {
  const STORAGE_KEY = 'du_validation_context_v1';
  const TRACK_KEYS = ['src', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];

  const currentUrl = new URL(window.location.href);
  const existing = (() => {
    try { return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (_) { return {}; }
  })();

  const context = { ...existing };

  TRACK_KEYS.forEach((key) => {
    const value = currentUrl.searchParams.get(key);
    if (value && !context[key]) context[key] = value.slice(0, 120);
  });

  if (!context.landing_page) {
    context.landing_page = currentUrl.pathname;
  }

  if (!context.referrer && document.referrer) {
    try {
      const referrer = new URL(document.referrer);
      if (referrer.hostname !== window.location.hostname) {
        context.referrer = referrer.hostname.slice(0, 160);
      }
    } catch (_) {}
  }

  context.last_page = currentUrl.pathname;

  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context)); }
  catch (_) {}

  const trackingParams = new URLSearchParams();
  TRACK_KEYS.forEach((key) => {
    if (context[key]) trackingParams.set(key, context[key]);
  });

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    const url = new URL(link.getAttribute('href'), window.location.origin);
    if (url.origin !== window.location.origin) return;

    trackingParams.forEach((value, key) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    });

    link.href = url.pathname + url.search + url.hash;
  });

  document.querySelectorAll('a[href*="/contact.html"]').forEach((link) => {
    link.addEventListener('click', () => {
      const url = new URL(link.href, window.location.origin);
      const label = (link.dataset.track || link.textContent || 'contact')
        .trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        .slice(0, 80);
      if (label) url.searchParams.set('cta', label);
      link.href = url.toString();
    });
  });

  document.querySelectorAll('a[href^="mailto:hello@digitalunity.co.uk"]').forEach((link) => {
    link.addEventListener('click', () => {
      const latest = (() => {
        try { return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}'); }
        catch (_) { return context; }
      })();
      const params = new URLSearchParams(window.location.search);
      const cta = params.get('cta') || 'direct-email';
      const source = latest.src || latest.utm_source || latest.referrer || 'direct';
      const campaign = latest.utm_campaign || '';
      const medium = latest.utm_medium || '';
      const detail = [
        `Source: ${source}`,
        campaign ? `Campaign: ${campaign}` : '',
        medium ? `Medium: ${medium}` : '',
        `Landing page: ${latest.landing_page || '/'}`,
        `Last page: ${window.location.pathname}`,
        `CTA: ${cta}`
      ].filter(Boolean).join('\n');

      const subject = 'Digital Unity enquiry';
      const body = `Hi Chris,\n\n\n\n---\nWebsite context\n${detail}`;
      link.href = `mailto:hello@digitalunity.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();