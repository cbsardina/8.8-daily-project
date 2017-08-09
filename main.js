const main = document.querySelector('.main');
const recipeCard = document.querySelectorAll('form')[0];
const baseUrl = 'https://proxy.calweb.xyz/http://www.recipepuppy.com/api/';

recipeCard.addEventListener('submit', function (event) {

  event.preventDefault()
  // console.log("EVENT TARGET BELOW:");
  // console.log(event.target);

  const searchWords = event.target.querySelector('input[name="searchTerm"]').value

  let allHTML = `<h1 class="searchWords">Here are your search results for ${searchWords}</h1>`;
    // console.log("My search word: " + searchWords);
    // console.log("======================");

  searchRecipePuppy(searchWords).then(function (results) {
    // console.log("TURN BELOW INTO A CONST");
    // console.log(results.results);

    const loopARRAY = results.results;

    for (let i in loopARRAY){
      const pass = results.results[i];

      function buildRecipe(){

        let recipe = `
            <section class="recipeCard">
              <a href="${pass.href}">
              <img src="${pass.thumbnail}" alt="Recipe Immage">
              <h4>${pass.title}</h4>
              </a>
            </section>
            `
            return recipe;
        }
        allHTML += buildRecipe();

    }
console.log(allHTML);

  main.innerHTML = allHTML;
    // console.log(allHTML);

    event.target.querySelector('input[name="searchTerm"]').value = '';
  })
})

//FETCH FUNCTION Outside function calledback in recipeCard event listener
let searchRecipePuppy = function(inputWords) {
  return fetch(`${baseUrl}?q=${encodeURIComponent(inputWords)}`).then(function(response) {
    return response.json();
    // console.log("DATA FROM FETCH AS DATA VARIABLE BEFORE RETURNED:");
    // console.log(data);
    // console.log("=======================");
  })
}
