const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const addJokeBtn = document.getElementById("addJokeButton");
const changeJokeBtn = document.getElementById("changeJokeButton");
const deleteJokesBtn = document.getElementById("deleteJokesButton");
const jokesTextarea = document.getElementById("jokesTextarea");




const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const updateJokes = () => {
  axios.get("http://localhost:4000/api/jokes").then((res) => {
    const jokes = res.data;
    jokesTextarea.value = jokes.join("\n");
  });
};

const addJoke = () => {
  const jokeInput = document.getElementById("jokeInput");
  const joke = jokeInput.value;
  axios
    .post("http://localhost:4000/api/jokes", { joke })
    .then((res) => {
      alert("Joke added successfully!");
      jokeInput.value = "";
      updateJokes();
    })
    .catch((err) => {
      console.error(err);
    });
};

const changeJoke = () => {
  const newJokeInput = document.getElementById("newJokeInput");
  const newJoke = newJokeInput.value;
  axios
    .put("http://localhost:4000/api/jokes", { newJoke })
    .then((res) => {
      alert("Joke changed successfully!");
      newJokeInput.value = "";
      updateJokes();
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteJokes = () => {
  axios
    .delete("http://localhost:4000/api/jokes")
    .then((res) => {
      alert("Jokes deleted successfully!");
      updateJokes();
    })
    .catch((err) => {
      console.error(err);
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
addJokeBtn.addEventListener("click", addJoke);
changeJokeBtn.addEventListener("click", changeJoke);
deleteJokesBtn.addEventListener("click", deleteJokes);
updateJokes();




