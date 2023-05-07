let jokes = ["Why don't scientists trust atoms? Because they make up everything!"];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "You cannot love life until you live the life you love.",
      "Your shoes will make you happy today.",
      "The man on the top of the mountain did not fall there.",
      "Meeting adversity well is the source of your strength.",
      "A dream you have will come true.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getJokes: (req, res) => {
    res.status(200).send(jokes);
  },

  addJoke: (req, res) => {
    const { joke } = req.body;
    jokes.push(joke);
    res.status(200).send("Joke added successfully!");
  },

  changeJoke: (req, res) => {
    const { newJoke } = req.body;
    if (jokes.length > 0) {
      jokes[0] = newJoke;
      res.status(200).send("Joke changed successfully!");
    } else {
      res.status(400).send("No jokes available to change!");
    }
  },

  deleteJokes: (req, res) => {
    jokes = [];
    res.status(200).send("Jokes deleted successfully!");
  },
};
