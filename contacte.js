// CONTACTE · un únic lloc per canviar el destí de tots els botons «Vull una demostració».
// Quan el formulari estigui creat, posa aquí el seu enllaç (https://forms.gle/... o https://docs.google.com/forms/...).
const CONTACT_URL = '';

document.querySelectorAll('[data-contact]').forEach(a => {
  if (CONTACT_URL) { a.href = CONTACT_URL; a.target = '_blank'; a.rel = 'noopener'; }
  else { a.href = 'venda.html#contacte'; }
});
