export default function addressToGeo(address, cb) {
  fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`)
    .then((res) => res.json)
    .then((data) => {
      const { lat, lon } = data[0];
      cb({ lat, long: lon });
    });
}
