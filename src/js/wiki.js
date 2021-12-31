// MENU HAMBURGUER WIKI
const modal = document.querySelector(".main-modal");
const closeButton = document.querySelectorAll(".modal-close");

const modalClose = () => {
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
};

const openModal = () => {
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "flex";
};

for (let i = 0; i < closeButton.length; i++) {
  const elements = closeButton[i];
  elements.onclick = (e) => modalClose();
  modal.style.display = "none";
  window.onclick = function (event) {
    if (event.target === modal) modalClose();
  };
}
// WIKI PAGE

function dataAnimals(name, imageFirst) {
  const html = `<div class="card-clickable" href="#">
<div class="card-text rounded overflow-hidden shadow-lg">
  <img
    class="w-full"
    src="${imageFirst}"
    alt="Sunset in the mountains"
  />
  <div class="px-6 py-4 text-center">
    <div class="font-bold text-xl mb-2">${name}</div>
  </div>
</div>
</div>`;
  return html;
}

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

let birds_family = {} // {7463: Garza, 3278: pajaro, ... , 361837: pinguino}

fetch("https://api.inaturalist.org/v1/taxa?rank=family&locale=es&preferred_place_id=6774&taxon_id=3", requestOptions)
.then(res => res.json())
.then(data => {
  let results = data.results
  for(let family of results) {
    birds_family[family.id] = family.preferred_common_name
  }
  fetch("https://api.inaturalist.org/v1/taxa?is_active=true&taxon_id=3&rank=species&rank_level=10&locale=es&preferred_place_id=6774", requestOptions)
  .then(response => response.json())
  .then(data => {
    let results = data.results
    let struct_data = [{
      "birds": []
    }]

    for (let bird of results ) {
      let birdFamilyId = bird.ancestor_ids[6]
      let photo = bird.default_photo["medium_url"]
      struct_data[0]['birds'].push({
        "id": bird.id,
        "category": birds_family[birdFamilyId],
        "name": bird.preferred_common_name,
        "images": [
          {
            "image1":photo,
            "noimage":"/assets/styles/images/birds/no-image.jpg",
          }
        ],
        "description": bird.wikipedia_url,
        "location": bird.atlas_id,
        "ejemplares": bird.observations_count
      })
    }
    data = struct_data

    // data ya debe de estar estructurado after thisssss
    // PETICION PARA GORRIONES
    const clickedCard = document.getElementsByClassName("card-clickable");
    for (let i = 0; i < data[0].birds.length; i++) {
      const cards = document.querySelector(".cards");
      if (data[0].birds[i].images[0].image1 !== undefined) {
        cards.innerHTML += dataAnimals(data[0].birds[i].name, data[0].birds[i].images[0].image1);
      } else {
        cards.innerHTML += dataAnimals(data[0].birds[i].name, data[0].birds[i].images[0].noimage);
      }


      // SHOW SPARROWS AND INFO MODAL
      for (let i = 0; i < clickedCard.length; i++) {
        clickedCard[i].addEventListener("click", () => {
          openModal();
          document.querySelector(".name-animal").textContent = data[0].birds[i].name;
          console.log(data[0].birds[i].images[0].image1);
          if (data[0].birds[i].images[0].image1 === undefined) {
            document.querySelector(".image-animal").src = data[0].birds[i].images[0].noimage;
          } else {
            document.querySelector(".image-animal").src = data[0].birds[i].images[0].image1;
          }
          document.querySelector(".description-animal").textContent = data[0].birds[i].description;
          document.querySelector(".location-animal").textContent = data[0].birds[i].location;
          document.querySelector(".ejemplares-animal").textContent = data[0].birds[i].ejemplares;
        });
      }
    }


    // SHOW TOTAL BIRDS
    const totalBirds = [];
    for (let index = 0; index < data[0].birds.length; index++) {
      totalBirds.push(index);
    }
    document.querySelector(".total-birds").textContent = `${clickedCard.length} / ${totalBirds.length}`;

    /*     // SEARCH ENGINE
    const birds = data[0].birds;
    console.log(data[0].birds);
    for (let index = 0; index < data[0].birds.length; index++) {
      console.log(data[0].birds.find(user => user.name.includes("Gorri")));
    } */
  });


})


// Petición HTTP
// fetch("/data.json")
//   .then(response => response.json()) 






// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://api.inaturalist.org/v1/taxa?is_active=true&taxon_id=3&rank=species&rank_level=10&locale=es&preferred_place_id=6774", requestOptions)
//   .then(response => response.json())
//   .then(r => console.log(r))
//   .catch(error => console.log('error', error));
// {
//   {
//     "id": 1,
//     "category": "Gorriones",
//     "name": "Gorrión de garganta negra",
//     "images": [
//       {
//         "image1": "/assets/styles/images/birds/sparrow/garganta-negra-1.jpg",
//         "noimage": "/assets/styles/images/birds/no-image.jpg"
//       }
//     ],
//     "description": "El gorrión de garganta negra es una especie encontrada en los desiertos del oeste de Estados Unidos y México. Es gris con la garganta negra, con franjas blancas en el rostro. Las puntas de las plumas de su cola también son blancas. Son aves terrestres que se alimentan de insectos y semillas.",
//     "location": "EEUU",
//     "ejemplares": "4009"
//      },