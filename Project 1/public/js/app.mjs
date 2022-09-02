import fetch from "node-fetch";
const data = {
  key: "b7cca735c2ac09a4a39b38feac141f39",
  q: "https://youtu.be/0x5fmz5Tjtc",
};

const link = async function () {
  const res = await fetch("https://api.linkpreview.net", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
  });
  const dat = await res.json();
  console.log(dat);
};
link();

module.exports = link;
