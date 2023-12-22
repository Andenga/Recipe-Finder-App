//API Key: 2e76d9c8af5d47958e644e990cc1cdf5


document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('form[role="search"]');
    const userInput = document.getElementById('userinput');
    const resultContainer = document.getElementById('result');
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const query = userInput.value.trim();
  
      if (query !== '') {
        const apiKey = '2e76d9c8af5d47958e644e990cc1cdf5'; // Replace with your actual Spoonacular API key
        const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}&number=9`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => displayRecipes(data.results))
          .catch(error => console.error('Error fetching recipes:', error));
      }
    });
  
    function displayRecipes(recipes) {
      resultContainer.innerHTML = ''; // Clear previous search results
  
      recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
  
        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.title;
  
        const title = document.createElement('h2');
        title.textContent = recipe.title;
  
        recipeCard.appendChild(image);
        recipeCard.appendChild(title);
  
        resultContainer.appendChild(recipeCard);
      });
    }
  });
  