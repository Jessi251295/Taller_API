//Simulación peticion a una BD
let Imagenes =[
    {
        "Id":1,
        "Titulo":"Noche Estrellada",
        "Descripción": "Obra de Vincent Van Gogh. El contexto de la producción del cuadro fue durante la etapa del decaimiento emocional, psicológico y físico de Van Gogh. ",
        "Imagen": "https://editorialtelevisa.brightspotcdn.com/dims4/default/5ccd815/2147483647/strip/true/crop/1156x650+22+0/resize/1440x810!/quality/90/?url=https:%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2018%2F05%2F10-obras-de-Arte-cl%25C3%25A1sicas-que-todos-deben-conocer.jpg"
       
    },
{
    "Id":2,
        "Titulo":"El Grito",
        "Descripción": "una de las pinturas más famosas que Edvard Munch realizó. Usando óleo y pastel sobre cartón, el artista de origen noruego plasmó una figura fantasmal, una obra de arte del más puro estilo expresionista.",
        "Imagen": "https://www.freim.tv/wp-content/uploads/2017/03/lienzo-en-tela-edvard-munch-el-grito-60x70cm-D_NQ_NP_617901-MLM20438320531_102015-F.jpg"
},

{
    "Id":3,
        "Titulo":"La Creación de Adán",
        "Descripción": "La obra de arte fue realizada por el artista renacentista Miguel Ángel.La seriedad de su trabajo hace referencia a un momento religioso repleto de simbolismo. Dios, con gran amor, decide compartir su perfecta creación con un ser al que dotará de inteligencia y voluntad. Un ser creado a la imagen y semejanza de Dios. Es el instante donde las manos del Creador sellan su alianza con el reciente ser humano.",
        "Imagen": "https://i0.wp.com/freim.tv/wp-content/uploads/2017/03/Creation_of_Adam.jpg?w=1280&ssl=1"
},
{
    "Id":4,
        "Titulo":"La joven de la perla",
        "Descripción": "Johannes Vermer es sin lugar a dudas, después de Van Gogh, el pintor más famoso e interesante de Holanda. Su pintura más famosa muestra a una joven misteriosa. Sus ojos, grandes y expresivos miran al espectador de manera inquisidora. ",
        "Imagen": "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvcGVybGEuanBnIiwicmVzaXplLDgwMCJdfQ.6XgLz2ia3rvHjAfnzCy4RzeU85zg41qHC4I1k2E1Nb8.jpg"
},
{
    "Id":5,
        "Titulo":"La persistencia de la memoria",
        "Descripción": "Toda una belleza realizada por el señor padre y amo del surrealismo: Salvador Dalí en el año de 1931. Este cuadro representa una costa lúgubre cubierta de relojes derretidos y está inspirado en la teoría de la relatividad de Albert Einstein.",
        "Imagen": "https://i0.wp.com/www.freim.tv/wp-content/uploads/2017/03/la-persistencia-de-la-memoria-salvador-dali-oleo-pintura-D_NQ_NP_954917-MLM27168877544_042018-F.jpg?resize=600%2C434&ssl=1"
},
{
    "Id":6,
        "Titulo":"Los Tres Músicos",
        "Descripción": "una de las pinturas más famosas de Pablo Picasso,Este autor realizó esta obra al óleo en 1921, de la cual pintó otras dos muy similares que en la actualidad están exhibidas en el MoMa de Nueva York y el museo de arte de Filadelfia.",
        "Imagen": "https://i0.wp.com/www.freim.tv/wp-content/uploads/2017/03/20130608-los-tres-musicos1.jpg?resize=600%2C551&ssl=1"
},
{
    "Id":7,
        "Titulo":"La Gioconda",
        "Descripción": "También conocido como la Mona Lisa, el retrato pintado por Leonardo Da Vinci es, sin duda alguna, el cuadro más famoso de la historia. Una mujer, con una enigmática sonrisa, mira al emocionado espectador, mientras este intenta resolver los misterios detrás de ese rostro serio pero al mismo tiempo sarcástico.",
        "Imagen": "https://historia.nationalgeographic.com.es/medio/2018/06/11/01-mona-lisa-marco-gioconda-louvre_2d7f91a1_1280x1691.jpg",
},
{
    "Id":8,
        "Titulo":"Impresión, Sol Naciente",
        "Descripción": "marcó un punto de inflexión en el mundo del arte puesto que a este cuadro se debe el nombre de Impresionismo",
        "Imagen": "https://hips.hearstapps.com/hmg-prod/images/impression-sunrise-by-claude-monet-paris-mus-c3-a9e-marmottan-news-photo-1652352017.jpg?resize=980:*",
},
{

    "Id":9,
        "Titulo":"La Última Cena",
        "Descripción": "Otra de las obras más enigmáticas de Leonardo da Vinci. La realizó a finales del s.XV y se encuentre en una de las paredes ​ del refectorio del convento dominico de Santa Maria delle Grazie, en Milán. Fue declarado Patrimonio de la Humanidad por la Unesco en 1980.​",
        "Imagen": "https://hips.hearstapps.com/hmg-prod/images/the-last-supper-15th-century-mural-painting-in-milan-news-photo-1676890788.jpg?resize=980:*",
},
{
    "Id":10,
        "Titulo":"Los Girasoles",
        "Descripción": "Los Girasoles, muestra un jarrón con quince girasoles en flor.La pintura es famosa por sus vibrantes colores amarillos y la energía emocional que parece irradiar desde el lienzo. Van Gogh utilizó pinceladas gruesas y audaces para crear una textura que da vida a las flores y al jarrón.",
        "Imagen": "https://hips.hearstapps.com/hmg-prod/images/sunflowers-painting-by-vincent-van-gogh-news-photo-1689195843.jpg?resize=980:*",
},
];

//Función para realizar peticion
function obtenerImagenes(Imagenes) {
    return new Promise((resolve, reject) => {
            //Simular retraso de 2seg
    setTimeout(()=>{
        //Verificar si hay peliculas
        if (Imagenes.length == 0){
            reject("Error, no hay imágenes en la BD");

        }else{
            resolve(Imagenes);

        }
    }, 2000);    
     
    });
    

}

// //Mostrar resultado de la petición
//Forma 1 - Metodos then() - catch()
// obtenerPeliculas (peliculas) 
//     .then((d)=> console.log(d))
//     .catch((e) => console.log(e))

//Forma 2 - async y await 
async function mostrarImagenes() {
    try{
        let datos = await obtenerImagenes(Imagenes);
        console.log(datos);
        
        // Generar HTML para mostrar las imágenes
        let contenedor = document.getElementById('contenedor');
        let html = '';
        
        datos.forEach(imagen => {
            html += `
                <div class="tarjeta-imagen">
                    <h3>${imagen.Titulo}</h3>
                    <img src="${imagen.Imagen}" alt="${imagen.Titulo}">
                    <p>${imagen.Descripción}</p>
                </div>
            `;
        });
        
        contenedor.innerHTML = html;
        
    } catch (error) {
        console.log(error);
    }
}

//Ejecutar funcion
mostrarImagenes();