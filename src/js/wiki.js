import { info } from 'autoprefixer';
import { nextPage, prevPage } from '../pagination.js';
import { qs } from '../utils.js';
import { birdSummary } from "./birdsSummary.js";

let pagination = {
  cur_page: 1,
  records_per_page: 30,
  birds_seen: 0
}
let struct_data = []
let displayBirds = (data) => {

  // PETICION PARA GORRIONES
  const clickedCard = document.getElementsByClassName("card-clickable");
  let parentNames = document.querySelector(".otherNames-animal")
  // parentNames.style.textAlign = "center"
  let ul = document.createElement("ul")  
  for (let i = 0; i < data[0].birds.length; i++) {
    const cards = document.querySelector(".cards");
    if (data[0].birds[i].images[0].image1 !== undefined) {
      cards.innerHTML += dataAnimals(data[0].birds[i].name, data[0].birds[i].images[0].image1);
    } else {
      cards.innerHTML += dataAnimals(data[0].birds[i].name, data[0].birds[i].images[0].noimage);
    }


    // SHOW SPARROWS AND INFO MODAL
   
    // parentNames.appendChild(ul)

    for (let i = 0; i < clickedCard.length; i++) {
      clickedCard[i].addEventListener("click", () => {
        openModal();


        // mifuncioncita va aqui

        birdSummary(data[0].birds[i].specie);


        document.querySelector(".name-animal").textContent = data[0].birds[i].name;
        if (data[0].birds[i].images[0].image1 === undefined) {
          document.querySelector(".image-animal").src = data[0].birds[i].images[0].noimage;
        } else {
          document.querySelector(".image-animal").src = data[0].birds[i].images[0].image1;
        }
        // document.querySelector(".description-animal").textContent = data[0].birds[i].description;
        document.querySelector(".ejemplares-animal").textContent = data[0].birds[i].ejemplares;
        document.querySelector(".location-animal").textContent = data[0].birds[i].location;
        document.querySelector(".extinct-animal").textContent = data[0].birds[i].extinct;
        document.querySelector(".family-animal").textContent = data[0].birds[i].category;
    
        // console.log(data[0].birds[i].otherNames)
        // for(let name of data[0].birds[i].otherNames) {
        //   let li = document.createElement("li")
        //   li.textContent = name
        //   li.style.display = "inline" 
        //   li.innerHTML += "<br>"
        //   ul.appendChild(li)
        // } 
  
        // document.querySelector(".birds-list").textContent = data[0].birds[i].category;
      });
    }
    
    

  }
  console.log(ul)
  parentNames.appendChild(ul)
  //  SHOW TOTAL BIRDS
  document.querySelector(".total-birds").textContent = `${pagination["birds_seen"]} / ${pagination["total_results"]}`;


}



let resetBirds = () => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = ""
}


let knowIfExtinct = (birdIsExtinct) => {
  let bird_status = "";
    if (birdIsExtinct){
      bird_status = "Si";
    }else {
      bird_status = "no";
    }
  return bird_status;
}



// let getNames = (names) => {
//   let otherLanguagesNames = [];
//   for (let difName of names) {
//     otherLanguagesNames.push(difName.name)
    
//   }
//   return otherLanguagesNames;
// }



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
    alt="${name}"
  />
  <div class="px-6 py-4 text-center">
    <div class="font-bold text-xl mb-2">${name}</div>
  </div>
</div>
</div>`;
  return html;
}

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

let fillBirdsFamilies = () => {
  return new Promise((resolve, reject) => {
    let birds_family = {}
    fetch("https://api.inaturalist.org/v1/taxa?rank=family&locale=es&preferred_place_id=6774&taxon_id=3", requestOptions)
      .then(res => {
        if (!res.ok) {
          reject(new Error("Error getting the birds families"))
        }
        return res.json()
      })
      .then(data => {
        let results = data.results
        for (let family of results) {
          birds_family[family.id] = family.preferred_common_name
        }
        resolve(birds_family)
      })
      .catch(error => {
        return reject(Error(error.message))
      })
  })
}

// let per_page = 30
// let page = 1 


let structureBirdData = (birds_family) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.inaturalist.org/v1/taxa?is_active=true&taxon_id=3&rank=species&rank_level=10&locale=es&preferred_place_id=6774&all_names=true&per_page=${pagination["records_per_page"]}&page=${pagination["cur_page"]}`, requestOptions)
    // fetch(`https://api.inaturalist.org/v1/taxa?is_active=true&taxon_id=3&rank=family&rank_level=30&locale=es&preferred_place_id=6774&per_page=${pagination["records_per_page"]}&page=${pagination["cur_page"]}&all_names=true`, requestOptions)
    // fetch(`https://api.inaturalist.org/v1/taxa?is_active=true&taxon_id=3&rank=species&rank_level=10&locale=es&preferred_place_id=6774&rank=family&all_names=true&per_page=${pagination["records_per_page"]}&page=${pagination["cur_page"]}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          reject(new Error("Error getting the birds species"))
        }
        return response.json()
      })
      .then(data => {
        pagination.total_results = data.total_results
        let results = data.results
        let struct_data = [{
          "birds": []
        }]

        for (let bird of results) {
          let birdFamilyId = bird.ancestor_ids[6]
          let photo = bird.default_photo["medium_url"]
          struct_data[0]['birds'].push({
            "id": bird.id,
            "category": birds_family[birdFamilyId],
            "name": bird.preferred_common_name,
            "images": [{
              "image1": photo,
              "noimage": "/assets/styles/images/birds/no-image.jpg",
            }],
            "description": bird.wikipedia_url,
            "location": bird.atlas_id,
            "ejemplares": bird.observations_count,
            // "otherNames":getNames(bird.names),
            "extinct":knowIfExtinct(bird.extinct),
            "specie":bird.name,
            "summary":bird.extract

          })
        }
        resolve(struct_data)
      })
      .catch(error => {
        return reject(Error(error.message))
      })
  })
}

async function getBirdsFromAPI() {
  const birds_family = await fillBirdsFamilies()
  struct_data = await structureBirdData(birds_family)
  pagination = {
    ...pagination,
    birds_in_this_call: struct_data[0]["birds"].length
  }
  if(pagination["birds_seen"] == 0)
    pagination["birds_seen"] += pagination["birds_in_this_call"]
  displayBirds(struct_data)
 
}

async function searchBirds(text) {
  let birds = struct_data[0]["birds"]
  birds = birds.filter((bird)=> bird["name"].includes(text))
  let search_struct = [
    {
      "birds": birds
    }
  ]
  resetBirds()
  displayBirds(search_struct)
}

getBirdsFromAPI()
// document.querySelector(".total-birds").textContent = `${pagination["birds_seen"]} / ${pagination["total_results"]}`;

pagination = {
  ...pagination,
  show_fn: getBirdsFromAPI,
}

let searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", ()=> searchBirds(searchInput.value))

qs("#btn-next").addEventListener("click", ()=> {
  pagination["birds_seen"] += pagination["birds_in_this_call"]
  nextPage(pagination)
})

qs("#btn-prev").addEventListener("click", ()=> {
  pagination["birds_seen"] -= pagination["birds_in_this_call"]
  prevPage(pagination)
})

