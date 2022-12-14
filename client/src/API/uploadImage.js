export default function uploadImage(image, cb) {
  const encodedParams = new URLSearchParams();
  encodedParams.append("image", image);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Client-ID 36b309421d6755b",
      "X-RapidAPI-Key": "a77c27478bmshea651e48cbb47d0p1e9b90jsnbfcf5ad863d9",
      "X-RapidAPI-Host": "imgur-apiv3.p.rapidapi.com",
    },
    body: encodedParams,
  };

  fetch("https://imgur-apiv3.p.rapidapi.com/3/image", options)
    .then((response) => response.json())
    .then(({ data }) => cb(data.link))
    .catch((err) => console.error(err));
}
