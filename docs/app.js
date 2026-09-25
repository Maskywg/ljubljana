'use strict';
const designStyles = document.createElement('link');
designStyles.rel = 'stylesheet';
designStyles.href = 'design.css';
document.head.append(designStyles);
const cards = [...document.querySelectorAll('.stop-card')];
const grid = document.querySelector('.walk-grid');
const selectedName = document.querySelector('#selected-name');
const mapStatus = document.querySelector('#map-status');
let map, markers = [], stops = [], route, activeId = 1;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sourcesSection = document.querySelector('#sources');
if (sourcesSection) {
  sourcesSection.insertAdjacentHTML('beforebegin', `<section class="ivy-teaser" aria-labelledby="ivy-teaser-title"><div class="ivy-collage"><img src="ivy/photos/01-market-mushrooms.jpg" alt="中央市場的新鮮菇類" loading="lazy"><img src="ivy/photos/14-prometheus.jpg" alt="屠夫橋旁的 Prometheus 雕塑" loading="lazy"><img src="ivy/photos/31-nuk-staircase.jpg" alt="NUK 國家暨大學圖書館的黑色大理石階梯" loading="lazy"></div><div class="ivy-teaser-copy"><p class="eyebrow">IVY'S PHOTO JOURNAL</p><h2 id="ivy-teaser-title">看完城市的歷史，<br>再走進旅人的視線。</h2><p>31 張現地旅拍，從市場攤上的森林氣味、屠夫橋的怪誕雕塑，到圖書館由幽暗走向知識之光的階梯。每一張照片，都補上一段在地典故與旅途故事。</p><a class="primary" href="ivy/">翻閱 Ivy 旅拍影像誌 <span>↗</span></a></div></section>`);
}
function setView(view) {
  grid.dataset.view = view;
  document.querySelectorAll('.mobile-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
  if (map) requestAnimationFrame(() => { map.invalidateSize(); if (view === 'map' && route) { map.stop(); map.closePopup(); map.fitBounds(route.getBounds(), {padding:[32,32],animate:false}); } });
}
function selectStop(id, { pan = true, scroll = false } = {}) {
  activeId = id;
  const card = cards[id-1];
  if (!card) return;
  cards.forEach(c => { c.open = c === card; c.classList.toggle('active', c === card); });
  const title = card.querySelector('strong').textContent;
  selectedName.textContent = String(id).padStart(2,'0') + ' ' + title;
  if (scroll) {
    const list = document.querySelector('.stop-list');
    list.scrollTo({ top: card.offsetTop, behavior: 'instant' });
  }
  markers.forEach((m,i) => {m.getElement()?.classList.toggle('chosen', i===id-1); m.setZIndexOffset(i===id-1 ? 1000 : 0);});
  if (pan && map && markers[id-1]) { map.stop(); map.setView(markers[id-1].getLatLng(),17,{animate:!reduced}); markers[id-1].openPopup(); }
}
document.querySelectorAll('.mobile-switch button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
cards.forEach((card,i) => card.querySelector('summary').addEventListener('click', e => { e.preventDefault(); selectStop(i+1); }));
document.querySelectorAll('[data-map]').forEach(b => b.addEventListener('click', () => {setView('map'); selectStop(Number(b.dataset.map));}));
document.querySelectorAll('[data-stop]').forEach(b => b.addEventListener('click', () => {
  setView('list'); selectStop(Number(b.dataset.stop),{scroll:true});
  document.querySelector('#walk').scrollIntoView({behavior:reduced?'instant':'smooth'});
  cards[Number(b.dataset.stop)-1].querySelector('summary').focus({preventScroll:true});
}));
document.querySelector('#reset-map').addEventListener('click', () => {if(map&&route){map.stop();map.closePopup();map.fitBounds(route.getBounds(),{padding:[38,38],animate:false});}});
async function initMap() {
  try {
    stops = LJUBLJANA_STOPS;
    if (typeof L === 'undefined') throw Error('Map library not available');
    map = L.map('map',{scrollWheelZoom:false}).setView([46.0498,14.506],15);
    let loaded = 0, failed = 0;
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',maxZoom:19
    }).on('tileload',()=>{loaded++;if(failed===0)mapStatus.textContent='';})
      .on('tileerror',()=>{failed++;mapStatus.textContent='部分底圖暫時無法載入；景點故事與各站外部導航仍可使用。';}).addTo(map);
    route=L.polyline(stops.map(s=>[s.lat,s.lng]),{color:'#a26339',weight:3,dashArray:'5 9',opacity:.75}).addTo(map);
    markers=stops.map(s=>{
      const marker=L.marker([s.lat,s.lng],{title:`第 ${s.id} 站 ${s.name}`,alt:`第 ${s.id} 站 ${s.name}`,icon:L.divIcon({className:'number-marker',html:`<span>${String(s.id).padStart(2,'0')}</span>`,iconSize:[34,34],iconAnchor:[17,17]})}).addTo(map);
      const content=document.createElement('div');content.className='map-popup';
      const title=document.createElement('strong');title.textContent=`${String(s.id).padStart(2,'0')} ${s.name}`;content.append(title);
      const era=document.createElement('p');era.textContent=s.era;content.append(era);
      const story=document.createElement('p');story.textContent=s.story;content.append(story);
      const button=document.createElement('button');button.textContent='閱讀建築細節與拍照建議 →';
      button.addEventListener('click',()=>{setView('list');selectStop(s.id,{pan:false,scroll:true});cards[s.id-1].querySelector('summary').focus({preventScroll:true});});content.append(button);
      marker.bindPopup(content,{maxWidth:280});marker.on('click',()=>selectStop(s.id,{pan:false,scroll:true}));
      return marker;
    });
    map.fitBounds(route.getBounds(),{padding:[38,38],animate:false});
    selectStop(activeId,{pan:false});
    new ResizeObserver(()=>map.invalidateSize()).observe(document.querySelector('#map'));
  } catch(error) {
    mapStatus.textContent='互動地圖暫時無法載入。請展開景點故事，使用各站「步行到這裡」查看地圖與導航。';
    document.querySelector('#map').classList.add('map-unavailable');
    document.querySelector('#reset-map').disabled=true;
  }
}
initMap();
