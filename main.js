let recipeCard = document.querySelector('.recipeCard');
let baseUrl = 'http://crossorigin.me/http://www.recipepuppy.com/api/?q=';


let submit = document.querySelector('#submit');

submit.onclick = function (click) {

  let search = document.querySelectorAll('recipePuppySearch');
  // let searchArray = search.innerHTML;
  let wordsArray = ["pizza", "biscuit"];
  console.log(search);
  console.log(wordsArray);

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

}



//FULL CODE - ABOVE IS TESTING FETCH AND WORKING TO GET INFO FROM INPUT FIELD
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
//
//             function buildRecipe(data){
//
//               let recipe = `
//               <section class="recipeCard">
//                 <a href="${link}">
//                 <img src="${thumbnail}" alt="Recipe Immage">
//                 <h4>${recipetitle}</h4>
//                 </a>
//               </section>
//               `
//               return recipe;
//               }
//                   let allHTML = '';
//
//                   allHTML += buildRecipe(data);
//
//                   recipeCard.innerHTML = allHTML;
//           });
//         })
//       .catch(function(err) {
//         console.log("Fetch Error :-S", err);
//       });
//   }
// }
