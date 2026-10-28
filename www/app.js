const map = L.map('map').setView([20.65, -87.05], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

const colores = { cancun:'#0077cc', 'costa-mujeres':'#00aa66', riviera:'#ff8800', tulum:'#cc0044' };

HOTELES.forEach(h => {
  L.circleMarker([h.lat, h.lng], {
    radius: 8, color: '#fff', weight: 2,
    fillColor: colores[h.zona] || '#888', fillOpacity: 1
  }).addTo(map).bindPopup(`<strong>${h.nombre}</strong><br>${'⭐'.repeat(h.estrellas)}`);
});
