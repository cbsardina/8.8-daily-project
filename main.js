const recipeCard = document.querySelectorAll('form')[0];
const baseUrl = 'https://proxy.calweb.xyz/http://www.recipepuppy.com/api/';


recipeCard.addEventListener('submit', function (event) {
  event.preventDefault()

  console.log(event.target);
  const searchWords = event.target.querySelector('input[name="searchTerm"]').value
  console.log("My search word: " + searchWords);

  // searchRecipePuppy(searchWords).then(function (results) {
  //   console.log(results);
  //   event.target.querySelector('input[name="searchTerm"]').value = '';
  //
  // })
})
//THIS WORKS
// let searchRecipePuppy = function(inputWords) {
//   return fetch(`${baseUrl}?q=${encodeURIComponent(inputWords)}`).then(function(response) {
//     return response.json();
//   })
// }
// console.log(searchRecipePuppy('pizza'));





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
