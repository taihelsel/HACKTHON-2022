export default function testRoute(cb) {
  fetch("/api/test")
    .then((res) => res.json())
    .then(({ msg }) => {
      cb(msg);
    });
}
