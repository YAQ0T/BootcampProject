//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  getRandomPerson() {
    $.ajax({
      type: "GET",
      url: "https://randomuser.me/api/?results=7&inc=name,picture,location",
      success: (response) => {
        this.data.personInfo = {};

        this.data.personInfo.firstName = response.results[0].name.first;
        this.data.personInfo.lastName = response.results[0].name.last;
        this.data.personInfo.img = response.results[0].picture.large;
        this.data.personInfo.city = response.results[0].location.city;
        this.data.personInfo.state = response.results[0].location.state;
      },
      error: function () {
        console.log("Erorr");
      },
    });
  }
  getRandomFrinds() {
    $.ajax({
      type: "GET",
      url: "https://randomuser.me/api/?results=7&inc=name,picture,location",
      success: (response) => {
        this.data.personFrinds = [];
        for (let i = 1; i < 7; i++) {
          let personInfo = {};
          personInfo.firstName = response.results[i].name.first;
          personInfo.lastName = response.results[i].name.last;
          personInfo.img = response.results[i].picture.large;
          this.data.personFrinds.push(personInfo);
        }
      },
    });
  }
  getRandomQoute() {
    $.ajax({
      type: "GET",
      url: "https://api.kanye.rest",
      success: (response) => {
        this.data.quote = response.quote;
      },
    });
  }
  getRandomPokeon(id) {
    $.ajax({
      type: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + id,
      success: (response) => {
        this.data.pokemon = {};
        this.data.pokemon.img = response.sprites.front_default;
        this.data.pokemon.name = response.name;
      },
    });
  }
  getRandomBacon() {
    $.ajax({
      type: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (response) => {
        this.data.bacon = response[0];
      },
    });
  }
}
function getRandomIdNumber() {
  const MAX = 949; //max id no of pokemon
  const MIN = 1; //min id no of pokemon
  {
    return Math.floor(Math.random() * MAX) + MIN;
  }
}
