// +++++ INITIAL VARIABLES +++++

const main = document.querySelector('.main');
const recipeCard = document.querySelectorAll('form')[0];
const baseUrl = 'https://proxy.calweb.xyz/http://www.recipepuppy.com/api/';

//=====================================================================================
//++++++++++++++++++++ADDS GENERIC PLACEHOLDERS BEFORE SEARCH++++++++++++++++++++++++++
//=====================================================================================
let i = 8;
let placeholder = '';
while (i > 0){
  let placeHolderRecipe = `
      <section id="remove" class="recipeCard">
        <img src="https://lh3.googleusercontent.com/dutChlaXdyAFMiyXSqUl79PSqrYpFpE7NpuDMDd4Uiq28XbqmkNxJJe953OkWxf5oTc=w300" alt="Recipe Immage">
        <h4>Search For Your Favorite Recipes</h4>
      </section>
      `;
      placeholder += placeHolderRecipe;
      i--;
}
    main.innerHTML = placeholder;

//=========================================================================================
//+++++++++++++++++++++++++++MAIN SEARCH FUNCTION +++++++++++++++++++++++++++++++++++++++++
//=========================================================================================
recipeCard.addEventListener('submit', function (event) {

  event.preventDefault()
  // console.log("EVENT TARGET BELOW:");
  // console.log(event.target);

  const searchWords = event.target.querySelector('input[name="searchTerm"]').value

  let allHTML = `<h1 class="searchWords">Recipe results for ${searchWords}</h1>`;
    // console.log("My search word: " + searchWords);

  searchRecipePuppy(searchWords).then(function (results) {
    // console.log("TURN BELOW INTO A CONST");
    // console.log(results.results);

    const loopARRAY = results.results;

    for (let i in loopARRAY){
      const pass = results.results[i];

      function buildRecipe(){
        if (pass.thumbnail === "") {
          let recipe = `
              <section class="recipeCard">
                <a href="${pass.href}">
                <img src="https://s-media-cache-ak0.pinimg.com/736x/3a/c1/96/3ac19695e3ea15750552151e89cd148f--kitty-litter-cake-chocolate-cake-mixes.jpg" alt="Recipe Immage">
                <h4>${pass.title}</h4>
                </a>
              </section>
              `
              return recipe;
        }
        else {
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
      }

        allHTML += buildRecipe();

    } //end for loop
    console.log(allHTML);

  main.innerHTML = allHTML;

  event.target.querySelector('input[name="searchTerm"]').value = '';

  })
})

//=========================================================================================
//+++++++++FETCH FUNCTION Outside function calledback in recipeCard event listener+++++++++
//=========================================================================================
let searchRecipePuppy = function(inputWords) {
  return fetch(`${baseUrl}?q=${encodeURIComponent(inputWords)}`).then(function(response) {
    return response.json();
    // console.log("DATA FROM FETCH AS DATA VARIABLE BEFORE RETURNED:");
    // console.log(data);
  })
}
