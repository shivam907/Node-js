import fetch from "node-fetch";
const data = {
  key: "b7cca735c2ac09a4a39b38feac141f39",
  q: "https://youtu.be/0x5fmz5Tjtc",
};

const apiData = fetch("https://api.linkpreview.net", {
  method: "POST",
  mode: "cors",
  body: JSON.stringify(data),
})
  .then((res) => {
    if (res.status != 200) {
      console.log(res.status);
      throw new Error("something went wrong");
    }
    return res.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(apiData);
