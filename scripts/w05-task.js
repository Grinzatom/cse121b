/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples")
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    
  
    // Iterar sobre cada templo en la lista
    temples.forEach(templeList => {
      // Crear un nuevo elemento de artículo <article> para cada templo
      const article = document.createElement("article");
  
      // Crear un nuevo elemento de encabezado <h3> para el nombre del templo
      const heading = document.createElement("h3");
      heading.textContent = templeList.templeName;
  
      // Crear un nuevo elemento de imagen <img> para la imagen del templo
      const image = document.createElement("img");
      image.src = templeList.imageUrl; // Suponiendo que cada templo tiene una propiedad imageUrl
      image.alt = templeList.location; // Suponiendo que cada templo tiene una propiedad location
  
      // Agregar el elemento h3 y el elemento img al artículo
      article.appendChild(heading);
      article.appendChild(image);
  
      // Agregar el artículo al contenedor
      templesElement.appendChild(article);
    });  
  }
 
    
 


/* async getTemples Function using fetch()*/
//call the json file wait the response and save into the temples list if charge or have and download error show and a mesage wit a mesage error
const getTemples = async(templeList) =>{
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok) {
            const templesData = await response.json();
            templeList = templesData;
            displayTemples(templeList);
        } else {
            console.error("Error data loading", response.statusText);
        }
    } catch (error) {
        console.error("Error data loading", error);
    }

}

/* reset Function */

const reset = () => {
    //delete article when is calling
    const templesElement = document.getElementById("templesElement");
    const articles = templesElement.querySelectorAll("article");
    articles.forEach(article => {
        article.remove();
    });
};


/* filterTemples Function */




getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList) });
