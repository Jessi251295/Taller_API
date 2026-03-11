//Variables Globales
let contenedor = document.querySelector("#contenedor");
let boton = document.querySelector("button")

    ///Agregar evento al botón
    boton.addEventListener("click", ()=> {
        // alert("Estamos melos");
        peticionApi();
    });

    //Funcion para realizar la peticion
    function peticionApi(){
        let urlExterna = "https://jsonplaceholder.typicode.com/photos"; 
        let urlInterna = "http://localhost/api/peliculas.txt"
        //Realizar la petición
        fetch(urlExterna)
                 .then((d)=> d.json())
                 .then((u) =>{
            console.log(u);
            u.forEach(photos => {
                contenedor.innerHTML +=`
                <img src="${photos.Imagen}" width= "200px">
                <h3>${photos.Titulo}</h3>
                <p>${photos.Descripcion}</p>
                <hr>
                ` ;
            })
            }).catch((error)=> {
                console.log(error);
            })


    }