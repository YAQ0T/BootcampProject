// function logAllData() {
function templateUsage(id, templateAttribute) {
  const source = $("#" + id).html();
  const template = Handlebars.compile(source);
  const newHTML = template(templateAttribute);
  $("." + id).append(newHTML);
}
class Renderer {
  renderUserContainer = () => {
    let tempObj = {
      img: RandomDataApi.data.personInfo.img,
      FirstName: RandomDataApi.data.personInfo.firstName,
      LastName: RandomDataApi.data.personInfo.lastName,
      city: RandomDataApi.data.personInfo.city,
      state: RandomDataApi.data.personInfo.state,
    };
    templateUsage("user-container", tempObj);
  };
  renderQuote = () => {
    let tempObj = {
      qoute: RandomDataApi.data.quote,
    };
    templateUsage("quote-container", tempObj);
  };
  renderPokemon = () => {
    let tempObj = {
      img: RandomDataApi.data.pokemon.img,
      PokemonName: RandomDataApi.data.pokemon.name,
    };
    templateUsage("pokemon-container", tempObj);
  };
  renderBacon = () => {
    let tempObj = {
      meat: RandomDataApi.data.bacon,
    };
    templateUsage("meat-container", tempObj);
  };
  renderFrinds = () => {
    let tempObj = {
      frind1: RandomDataApi.data.personFrinds[0].firstName,
      frind2: RandomDataApi.data.personFrinds[1].firstName,
      frind3: RandomDataApi.data.personFrinds[2].firstName,
      frind4: RandomDataApi.data.personFrinds[3].firstName,
      frind5: RandomDataApi.data.personFrinds[4].firstName,
      frind6: RandomDataApi.data.personFrinds[5].firstName,
    };
    templateUsage("friends-container", tempObj);
  };
}
