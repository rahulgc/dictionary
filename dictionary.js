const getMeaning = async () => {
  let word = document.getElementById("input").value;

  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a079c7f131msh33f1c53e5c1346ap1b2a0fjsncd2de6776c83",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  await fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let meaning = res.definition;
      let arr = meaning.split(";");
      console.log(arr);
      if (arr.length > 3) {
        for (let i = 0; i <= 3; i++) {
          document.getElementById(
            "meaning"
          ).innerHTML += `<h4><li id="meaning">${arr[i]}</li></h4></br>`;
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (!(arr[i].toString() == "")) {
            document.getElementById(
              "meaning"
            ).innerHTML += `<h4><li id="meaning">${arr[i]}</li></h4></br>`;
          } else {
            document.getElementById("meaning").innerHTML +=
              "Sorry ! No meaning available for this word";
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
document.getElementById("button").addEventListener("click", () => {
  getMeaning();
  document.getElementById("display").innerHTML= "";
});
