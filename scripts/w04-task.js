/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:  "Mauricio Grinzato",
    photo: "images/profilepicture.jpeg",
    favoriteFoods: [
        "pizza",
        "cesars salad",
        "black beans",
        "sandwich",
        "chocolate"
    ],
    hobbies: [
        "video games",
        "make electronic circuits board",
        "listen music",
        "read books",
        "programing in python"
    ],
    placesLived:[
        
    ],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Maturin, Monagas Venezuela",
    length: "25 year"
    
 }
);
myProfile.placesLived.push({
    place: "Maracaibo, Zulia Venezuela",
    length: "1 year"
 }
);
myProfile.placesLived.push({
    place: "Merida, Merida Venezuela",
    length: "6 months"
 }
);
myProfile.placesLived.push({
    place: "São Jose dos campos, São Paulo Brasil",
    length: "4 years"
 }
);
myProfile.placesLived.push({
    place: "Taubate, São Paulo Brasil",
    length: "1 year"
 }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */
let imageElemennt = document.querySelector('img');
imageElemennt.setAttribute('src', myProfile.photo);
imageElemennt.setAttribute('alt', `profile image ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach(food=> {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
//call the ID places-lived
let dlElement = document.getElementById("places-lived");

//the array iteration from myProfile
myProfile.placesLived.forEach(function(obj) {
  //create a dt element for each iteration in place element
  let dtElement = document.createElement("dt");
  dtElement.textContent = obj.place;
  //create a dd element for each element in length propierty
  let ddElement = document.createElement("dd");
  ddElement.textContent = obj.length;
  
  //locate data into de child element of dl element
  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
});

