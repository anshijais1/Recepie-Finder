let button = document.querySelector("#button");
button.addEventListener("click", async (evt) => {
    let inp = document.querySelector("#input");
    let val = inp.value;
    console.log(val);
    console.log("Hello");
    let platechole=document.querySelector("#platechole");
platechole.addEventListener("click", async (evt) => {
   
    let val = "Chana";
    console.log(val);
    console.log("Hello");

    // Include the "https://" protocol in the URL
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);

    const box = document.querySelector('.hide'); // Use querySelector for class
    if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        const mealId = meal.idMeal;
        console.log(mealId);

        let recipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        let recipeResponse = await fetch(recipeUrl);
        let recipeData = await recipeResponse.json();
        console.log(recipeData);

        const mealDetails = recipeData.meals[0];

        // Construct HTML content for recipe details with styles
        let recipeContent = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Recipe Details</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }

                    h3 {
                        color: #333;
                        color: black;
                        
                    }

                    img {
                        max-width: 35vh;
                        height: 35vh;
                        margin-bottom: 15px;
                    }

                    ul {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                    }

                    li {
                        margin-bottom: 5px;
                    }

                    p {
                        color: black;

                    }
                </style>
            </head>
            <body>
                <h3>${mealDetails.strMeal}</h3>
                <img src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
                <ul>`;

        for (let i = 1; i <= 20; i++) {
            const ingredient = mealDetails[`strIngredient${i}`];
            const measure = mealDetails[`strMeasure${i}`];

            if (ingredient && measure) {
                recipeContent += `<li>${ingredient}: ${measure}</li>`;
            }
        }

        recipeContent += `</ul>
                <p>${mealDetails.strInstructions}</p>
            </body>
            </html>`;

        // Create a new window and load the HTML content
        let recipeWindow = window.open('', '_blank', 'width=2000,height=1000');
        recipeWindow.document.open();
        recipeWindow.document.write(recipeContent);
        recipeWindow.document.close();
    } else {
        console.log('No meals found for the given ingredient.');
    }
});

let platebiryani=document.querySelector("#platebiryani");
platebiryani.addEventListener("click", async (evt) => {
   
    let val = "Biryani";
    console.log(val);
    console.log("Hello");

    // Include the "https://" protocol in the URL
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);

    const box = document.querySelector('.hide'); // Use querySelector for class
    if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        const mealId = meal.idMeal;
        console.log(mealId);

        let recipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        let recipeResponse = await fetch(recipeUrl);
        let recipeData = await recipeResponse.json();
        console.log(recipeData);

        const mealDetails = recipeData.meals[0];

        // Construct HTML content for recipe details with styles
        let recipeContent = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Recipe Details</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }

                    h3 {
                        color: #333;
                        color: black;
                        
                    }

                    img {
                        max-width: 35vh;
                        height: 35vh;
                        margin-bottom: 15px;
                    }

                    ul {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                    }

                    li {
                        margin-bottom: 5px;
                    }

                    p {
                        color: black;

                    }
                </style>
            </head>
            <body>
                <h3>${mealDetails.strMeal}</h3>
                <img src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
                <ul>`;

        for (let i = 1; i <= 20; i++) {
            const ingredient = mealDetails[`strIngredient${i}`];
            const measure = mealDetails[`strMeasure${i}`];

            if (ingredient && measure) {
                recipeContent += `<li>${ingredient}: ${measure}</li>`;
            }
        }

        recipeContent += `</ul>
                <p>${mealDetails.strInstructions}</p>
            </body>
            </html>`;

        // Create a new window and load the HTML content
        let recipeWindow = window.open('', '_blank', 'width=2000,height=1000');
        recipeWindow.document.open();
        recipeWindow.document.write(recipeContent);
        recipeWindow.document.close();
    } else {
        console.log('No meals found for the given ingredient.');
    }
});
let platechole = document.querySelector("#platechole");
button.addEventListener("click", async (evt) => {
   
    let val = "chole"
    console.log(val);
    console.log("Hello");

    // Include the "https://" protocol in the URL
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);

    const box = document.querySelector('.hide'); // Use querySelector for class
    box.innerHTML = ''; // Clear previous content

    if (data.meals && data.meals.length > 0) {
        data.meals.forEach(meal => {
            const mealName = meal.strMeal;
            const mealImage = meal.strMealThumb;

            const mealContainer = document.createElement('div');

            const mealTitle = document.createElement('h3');
            mealTitle.textContent = mealName;
            mealContainer.appendChild(mealTitle);

            const mealImageElement = document.createElement('img');
            mealImageElement.src = mealImage;
            mealImageElement.alt = mealName;
            mealContainer.appendChild(mealImageElement);

            box.appendChild(mealContainer);
        });
    } else {
        console.log('No meals found for the given ingredient.');
    }
});
