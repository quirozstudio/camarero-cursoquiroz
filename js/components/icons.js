const iconPaths = {
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-9"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.2 17 22l-5-3-5 3 1.5-8.8"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="m21 15-5-5L5 21"/>',
  video: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 9 4-2v10l-4-2"/>',
  spark: '<path d="M12 2v5"/><path d="M12 17v5"/><path d="M4.2 4.2 7.8 7.8"/><path d="m16.2 16.2 3.6 3.6"/><path d="M2 12h5"/><path d="M17 12h5"/><path d="m4.2 19.8 3.6-3.6"/><path d="m16.2 7.8 3.6-3.6"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  pin: '<path d="m16 3 5 5-4 4 1 7-7-1-4 4-5-5 4-4-1-7 7 1 4-4z"/><path d="m9 15 6-6"/>',
  table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M9 4v16"/><path d="M15 4v16"/>',
  glass: '<path d="M8 2h8l-1 10a4 4 0 0 1-6 0L8 2z"/><path d="M12 14v7"/><path d="M8 21h8"/>',
  coffee: '<path d="M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2"/><path d="M7 2v3"/><path d="M11 2v3"/>',
  beer: '<path d="M5 8h10v13H5z"/><path d="M15 10h2a3 3 0 0 1 0 6h-2"/><path d="M7 8V5a3 3 0 0 1 6 0v3"/><path d="M8 12v5"/><path d="M12 12v5"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
};

export const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.home}</svg>`;
