/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Mauricio Grinzato';
let currentYear = 2024;
let profilePicture = 'images/profilepicture.jpeg';



/* Step 3 - Element Variables */

let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElemennt = document.querySelector('img');
let favFoods = ['sandwuich', 'pizza', 'chocolate', 'blackbeans'];




/* Step 4 - Adding Content */

/*strong full name */ 
nameElement.innerHTML =  `<strong>${fullName}</strong>`;

/*add the current year from currentYear const*/ 
yearElement.textContent = currentYear;

/*change the url profile img*/
imageElemennt.setAttribute('src', profilePicture);

/*change de alternative img text*/
imageElemennt.setAttribute('alt', `profile image ${fullName}`);



/* Step 5 - Array */

/*show the original array*/
foodElement.innerHTML += `<br>${favFoods}`

/*add a new item at the final of the array*/
let addFood = 'cesar`s salad';
favFoods.push(addFood);
foodElement.innerHTML += `<br>${favFoods}`;

/*delete the first item of the array*/
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

/*delay the last element of the array*/
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;















