//import styles from "./css/styles.css";

function GetCatPicture() {
  const BASE_URL = "https://api.thecatapi.com/v1/images/search";
  const catBtn = document.getElementById("change-cat");

  const getCats = async () => {
    try {
      const data = await fetch(BASE_URL);
      const json = await data.json();
      console.log(json[0].url);

      return json[0].url;
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadImg = async () => {
    const catImg = document.getElementById("cat");
    catImg.src = await getCats();
  };

  catBtn.addEventListener("click", loadImg);

  loadImg();
}

document.querySelector("#app").innerHTML = `
  <main>
    <h1>Just... cats!</h1>
    <img id="cat" /><br />
    <button id="change-cat">Change cat</button>
  </main>
`;

GetCatPicture();