let RandomDataApi = new APIManager();
let RenderdData = new Renderer();

$("#loadData").on("click", function () {
  RandomDataApi.getRandomPerson();
  RandomDataApi.getRandomFrinds();
  RandomDataApi.getRandomQoute();
  RandomDataApi.getRandomPokeon(getRandomIdNumber());
  RandomDataApi.getRandomBacon();
});
$("#DisplayData").on("click", function () {
  $(".user-container").empty();
  $(".quote-container").empty();
  $(".pokemon-container").empty();
  $(".meat-container").empty();
  $(".friends-container").empty();

  RenderdData.renderUserContainer();
  RenderdData.renderQuote();
  RenderdData.renderPokemon();
  RenderdData.renderBacon();
  RenderdData.renderFrinds();
});
