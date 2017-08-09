const main = document.querySelector('main');
const recipeCard = document.querySelectorAll('form')[0];
const baseUrl = 'https://proxy.calweb.xyz/http://www.recipepuppy.com/api/';


recipeCard.addEventListener('submit', function (event) {

  let allHTML = '';

  event.preventDefault()
  console.log("EVENT TARGET BELOW:");
  console.log(event.target);
  console.log("=====================");

  const searchWords = event.target.querySelector('input[name="searchTerm"]').value

  console.log("My search word: " + searchWords);
  console.log("======================");


  searchRecipePuppy(searchWords).then(function (results) {
    console.log("TURN BELOW INTO A CONST");
    console.log(results.results);

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
        return allHTML;
        main.innerHTML = allHTML;
        // console.log("ALL HTML:");
        // console.log(allHTML);
    }



    // console.log("DATA OBJECT BELOW:");
    // console.log(results);
    // console.log("=======================");
    event.target.querySelector('input[name="searchTerm"]').value = '';

    // allHTML += buildRecipe();
    //
    // console.log("allHTML BELOW:");
    // console.log(allHTML);
    // console.log(allHTML);
    main.innerHTML = allHTML;

  })


})

//FETCH FUNCTION Outside function calledback in recipeCard event listener
let searchRecipePuppy = function(inputWords) {
  return fetch(`${baseUrl}?q=${encodeURIComponent(inputWords)}`).then(function(response) {
    return response.json();
    //
    // let data =
    // console.log("DATA FROM FETCH AS DATA VARIABLE BEFORE RETURNED:");
    // console.log(data);
    // console.log("+++++++++++++++++++++++++++++");
    // return data;
  })
}

//TEMPLATE LITERAL POPULATE WITH searchRecipePuppy
// const buildRecipe = function (results){
//
//   let recipe = `
//   <section class="recipeCard">
//     <a href="${results.href}">
//     <img src="${results.thumbnail}" alt="Recipe Immage">
//     <h4>${results.title}</h4>
//     </a>
//   </section>
//   `
//   return recipe;
// }
//




// fetch(`${baseUrl}${search[0]}`)
//   .then(
//     // The promise returns a response from the server.
//     function(response) {
//       // We process the response accordingly.
//       if (response.status !== 200) {
//         console.log(response.status);
//         return;
//       }
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     })
//   .catch(function(err) {
//     console.log("Fetch Error :-S", err);
//   });


// submit.onclick = function() {
//   for (let i in search) {
//     let searchTerm = search[i];
//
//     fetch(`${url}${searchTerm[i]}`)
//       .then(
//         // The promise returns a response from the server.
//         function(response) {
//           // We process the response accordingly.
//           if (response.status !== 200) {
//             console.log(response.status);
//             return;
//           }
//           response.json().then(function(data) {
//TAKE OUT BELOW
            // function buildRecipe(data){
            //
            //   let recipe = `
            //   <section class="recipeCard">
            //     <a href="${link}">
            //     <img src="${thumbnail}" alt="Recipe Immage">
            //     <h4>${recipetitle}</h4>
            //     </a>
            //   </section>
            //   `
            //   return recipe;
            //   }
            //       let allHTML = '';
            //
            //       allHTML += buildRecipe(data);
            //
            //       recipeCard.innerHTML = allHTML;
// //TOOK OUT ABOVE
//
//           });
//         })
//       .catch(function(err) {
//         console.log("Fetch Error :-S", err);
//       });
//   }
// }
