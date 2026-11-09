/* Small, dependency-free usability enhancements. */
(() => {
  const ready = () => {
    const search = document.getElementById('q');
    if (!search || search.dataset.uxReady) return;
    search.dataset.uxReady = '1';

    // Compact clear-search control; the original search/filter logic remains in charge.
    const wrap = search.parentElement;
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.id = 'clear-search';
    clear.className = 'absolute right-2 top-1/2 -translate-y-1/2 hidden items-center justify-center rounded-lg';
    clear.setAttribute('aria-label', 'Limpiar búsqueda');
    clear.title = 'Limpiar búsqueda';
    clear.innerHTML = '<span aria-hidden="true">×</span>';
    clear.style.cssText = 'width:28px;height:28px;color:#64748b;font-size:21px;line-height:1;background:transparent';
    wrap.appendChild(clear);
    search.classList.add('pr-10');
    const sync = () => clear.classList.toggle('hidden', !search.value);
    search.addEventListener('input', sync);
    clear.addEventListener('click', () => {
      search.value = '';
      search.dispatchEvent(new Event('input', {bubbles:true}));
      search.focus();
      sync();
    });
    sync();

    // Keyboard shortcuts for desktop users.
    document.addEventListener('keydown', event => {
      const tag = event.target && event.target.tagName;
      const typing = ['INPUT','TEXTAREA','SELECT'].includes(tag) || event.target?.isContentEditable;
      if (event.key === '/' && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault(); search.focus(); search.select();
      }
      if (event.key === 'Escape' && document.activeElement === search) {
        search.blur();
      }
    });

    // Make the search affordance understandable to assistive technology.
    search.setAttribute('aria-label', 'Buscar negocios por nombre, categoría o dirección');
    search.setAttribute('autocomplete', 'off');
    search.setAttribute('enterkeyhint', 'search');
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();
