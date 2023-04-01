// ====================> Store latitude and longitude
const lngLat = [88.4386, 22.625];

const accessToken = `pk.eyJ1IjoibWUtc291cm92diIsImEiOiJjbGQ2MmhvY2YxNTg4M3JtbXAycTVrczV4In0._4tRPHRvOb0DiREPf6cXAQ`;
mapboxgl.accessToken = accessToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: lngLat,
  zoom: 16,
});

// ==========> Setting up the map marker
const marker = new mapboxgl.Marker({
  anchor: `bottom`,
  color: `#F05454`,
  draggable: false,
})
  .setLngLat(lngLat)
  .addTo(map);
