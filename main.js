/* Llamando a un node del DOM */
let root = document.querySelector("#root");

// Elemento de tipo div con un atributo class
let div_formularios = document.createElement("div");

// Agregar una clase al div 
div_formularios.className = "div_formularios";

// lista de textos
let formularios = [
    {nombre:"login",link:"https:"},
    {nombre:"login",link:"https:"},
    {nombre:"login",link:"https:"},
    {nombre:"login",link:"https:"},
];


//forEach (for), 
formularios.forEach(itemLista => {

    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link; // se inserta el link del objeto
    div_item.innerText = itemLista.nombre; // se inserta solo el nombre de la lista de objetos
    
    //main inserta al item en formularios
    div_formularios.appendChild(div_item);
});

// Agrega al node root, el elemento div_formulario
// Con este se agrega los div, sino no aparecerá
root.appendChild(div_formularios);

// los algoritmos permiten crear elementos sin necesidad de crear más lineas de codigo