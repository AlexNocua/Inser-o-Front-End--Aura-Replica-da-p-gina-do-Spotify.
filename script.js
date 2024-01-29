// console.log('hola'); con este verificamos su funcionamiento en la consola del navegador


//parte do BOM DIA/ BOA TARDE/ BOA NOITE

const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();


const greetingMessage =
    currentHour >= 5 && currentHour < 12 ? "Bom dia" :
        currentHour >= 12 && currentHour < 18 ? "Boa tarde" :
            "Boa Noite";

greetingElement.textContent = greetingMessage;

/*Se crea una variable para guardar el id de el HTML donde queremos aplicar esta fincionalidad.
creamos otra variable que recupere la hora de nuestro sistema
como ultimo otra variable que almacene el mensaje respecto a una condicion
asignar el valor a nuestra variable con la regla establecida*/


/*GRIDD*/

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
    const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
    const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

    //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

    console.log({ container });
    console.log({ numColumns });
});
//observando a mudança do elemento
observer.observe(container);


//manipulacion de resultados:

//conceptos DOM Document Model Object 

//en la consola escrivimos document y me trae toda la estructura del html

//getElementById Traze tudos os elementos do html segundoo o seu ID
const resultArtist = document.getElementById('result-artist'); //id de result-artist
const playlistContainer = document.getElementById('result-playlists');
const searchInput = document.getElementById('search-input'); // a gente troze esse id
//const searchinput2 = document.querySelector('.card'); // a gente pode trazer esse como o mesmo funcionamiento do byid so que a gente chama as clases nele.
// se a gente tem mais clases com o nome de card, o que vai fazer el trazer so o primer clase com o seu nome card
//mas se a gente faz uso de querySelectorAll manipula tudas as nossas clases card


//consumir api
//const url = (`http://localhost:3000/artists?name_like=${searchTerm}`) //llamamos nuestra Api
//tem é um metodo para trabalhar PROMISES "programacao assincorna"-requicicoes, leturas etc.
//mostrar a playlist ou o artist

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}


function displayResults(results) {
    hidePlaylists();
    const resultContainer = document.getElementById("result-artist");
    resultContainer.innerHTML = ''; // Limpiamos el contenido existente

    const searchTerm = searchInput.value.toLowerCase();

    const filteredResults = results.filter((element) =>
        element.name.toLowerCase().startsWith(searchTerm)
    );

    filteredResults.forEach((element) => {
        const artistCard = createArtistCard(element);
        resultContainer.appendChild(artistCard);
    });

    resultContainer.classList.remove('hidden');
}

function createArtistCard(element) {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');

    const img = document.createElement('img');
    img.classList.add('artist-img');
    img.src = element.urlImg;

    const playDiv = document.createElement('div');
    playDiv.classList.add('play');

    const playSpan = document.createElement('span');
    playSpan.classList.add('fa', 'fa-solid', 'fa-play');

    playDiv.appendChild(playSpan);
    cardImg.appendChild(img);
    cardImg.appendChild(playDiv);

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const artistLink = document.createElement('a');
    artistLink.title = element.name;
    artistLink.classList.add('vst');
    artistLink.href = '';

    const artistName = document.createElement('span');
    artistName.classList.add('artist-name');
    artistName.innerText = element.name;

    const artistCategory = document.createElement('span');
    artistCategory.classList.add('artist-categorie');
    artistCategory.innerHTML = '<br>Artista';

    artistLink.appendChild(artistName);
    artistLink.appendChild(artistCategory);
    cardText.appendChild(artistLink);

    artistCard.appendChild(cardImg);
    artistCard.appendChild(cardText);

    return artistCard;
}




function hidePlaylists() {
    playlistContainer.classList.add("hidden");
}

//manipulacao de eventos


searchInput.addEventListener("input", function () { //tem que reseiver uma funcao anonima cuando este oivindo o nosso evento, a gente pode trazer issa fincao anonima o deste geito () =>{}
    const searchTerm = searchInput.value.toLowerCase(); //obter o value e trnsformar a nossa value en minuscula
    if (searchTerm === '') {     //ocultar 
        resultArtist.classList.add('hidden')
        playlistContainer.classList.remove('hidden');// llamamos una clase hidden para el resultplaylist
        return;
    } // == se so calores sao iguais, === se os valores sao iguais o do mesmo tipo.

    requestApi(searchTerm);
});
//

//hora do sistema

const fechaHoraActual = new Date;
// Formatear la hora para mostrarla
const horaFormateada ='São as ' +`${fechaHoraActual.getHours()}:${fechaHoraActual.getMinutes()}`;
//const horaFormateada = `${fechaHoraActual.getHours()}:${fechaHoraActual.getMinutes()}:${fechaHoraActual.getSeconds()}`;




const etapaDia =
    currentHour >= 5 && currentHour < 12 ? " do dia" :
        currentHour >= 12 && currentHour < 18 ? " da tarde" :
            " da Noite";

greetingElement.textContent = greetingMessage;
// Mostrar la hora en el elemento con el ID "hora"
document.getElementById("hora").innerText = horaFormateada + etapaDia;