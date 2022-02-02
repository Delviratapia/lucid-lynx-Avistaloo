import {
    birdSummary
} from "./birdsSummary.js";

let modal = null
let closeButton = null
window.addEventListener('load', function() {
    modal = document.querySelector(".main-modal");
    closeButton = document.querySelectorAll(".modal-close");
    console.log(modal)
    for (let i = 0; i < closeButton.length; i++) {
        const elements = closeButton[i];
        elements.onclick = (e) => modalClose();
        modal.style.display = "none";
        window.onclick = function (event) {
            if (event.target === modal) modalClose();
        };
    }
})

const modalClose = () => {
    modal.classList.remove("fadeIn");
    modal.classList.add("fadeOut");
    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
};

const openModal = () => {
    console.log("the modal is: ")
    console.log(modal)
    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
    modal.style.display = "flex";
};




let pagination = {
    cur_page: 1,
    records_per_page: 30,
    birds_seen: 0
}
let struct_data = []

function getPagination() {
    return pagination
}

function getStructData() {
    return struct_data
}

let knowIfExtinct = (birdIsExtinct) => {
    let bird_status = "";
    if (birdIsExtinct) {
        bird_status = " Extinto";
    } else {
        bird_status = "No extinto";
    }
    return bird_status;
}

let knowIfNative = (birdIsNative) => {
    let bird_establishment = "";
    if (birdIsNative === "native") {
        bird_establishment = "Nativo";
    } else {
        bird_establishment = "Introducido";
    }
    return bird_establishment;
}

let displayBirds = (data = null) => {
    if (data == null) {
        data = struct_data
    }
    // PETICION PARA GORRIONES
    const clickedCard = document.getElementsByClassName("card-clickable");
    let parentNames = document.querySelector(".otherNames-animal")
    let ul = document.createElement("ul");
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
                let modalBird = document.querySelector(".modal-bird")
                modalBird.classList.remove('hidden')

                birdSummary(data[0].birds[i].specie);

                document.querySelector(".name-animal").textContent = data[0].birds[i].name;
                if (data[0].birds[i].images[0].image1 === undefined) {
                    document.querySelector(".image-animal").src = data[0].birds[i].images[0].noimage;
                } else {
                    document.querySelector(".image-animal").src = data[0].birds[i].images[0].image1;
                }
                document.querySelector(".ejemplares-animal").textContent = data[0].birds[i].ejemplares;
                document.querySelector(".location-animal").textContent = data[0].birds[i].location;
                document.querySelector(".extinct-animal").textContent = data[0].birds[i].extinct;
                document.querySelector(".family-animal").textContent = data[0].birds[i].category;
                document.querySelector(".establishment-animal").textContent = data[0].birds[i].establishment;
                document.querySelector(".sciName-animal").textContent = data[0].birds[i].scientificName;
            });
        };
    }
    document.querySelector(".total-birds").textContent = `${pagination["birds_seen"]} / ${pagination["total_results"]}`;
}


let structureBirdData = (birds_family, q = null) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let url = `https://api.inaturalist.org/v1/observations/species_counts?is_active=true&place_id=6774&iconic_taxa=Aves&rank=species&locale=es&preferred_place_id=6774&per_page=${pagination["records_per_page"]}&page=${pagination["cur_page"]}`
    if (q != null) {
        url = `https://api.inaturalist.org/v1/observations/species_counts?is_active=true&q=${q}&place_id=6774&iconic_taxa=Aves&rank=species&locale=es&preferred_place_id=6774&per_page=${pagination["records_per_page"]}&page=${pagination["cur_page"]}`
    }
    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
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
                    let birdFamilyId = bird.taxon.ancestor_ids[5]
                    let photo = bird.taxon.default_photo["medium_url"]
                    struct_data[0]['birds'].push({
                        "id": bird.id,
                        "category": birds_family[birdFamilyId],
                        "name": bird.taxon.preferred_common_name,
                        "images": [{
                            "image1": photo,
                            "noimage": "/assets/styles/images/birds/no-image.jpg",
                        }],
                        "description": bird.taxon.wikipedia_url,
                        "location": bird.atlas_id,
                        "ejemplares": bird.taxon.observations_count,
                        // "otherNames":getNames(bird.names),
                        "extinct": knowIfExtinct(bird.taxon.extinct),
                        "specie": bird.taxon.name,
                        "summary": bird.extract,
                        "establishment": knowIfNative(bird.taxon.preferred_establishment_means),
                        "scientificName": bird.taxon.name
                    })
                }
                resolve(struct_data)
            })
            .catch(error => {
                return reject(Error(error.message))
            })
    })
}


let fillBirdsFamilies = (q = null) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let url = "https://api.inaturalist.org/v1/taxa?rank=order&locale=es&preferred_place_id=6774&taxon_id=3"
    if (q != null) {
        url = `https://api.inaturalist.org/v1/taxa?rank=order&q=${q}locale=es&preferred_place_id=6774&taxon_id=3`
    }
    return new Promise((resolve, reject) => {
        let birds_family = {}
        fetch(url, requestOptions)
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

let resetBirds = () => {
    const cards = document.querySelector(".cards");
    cards.innerHTML = ""
}

// WIKI PAGE

function dataAnimals(name, imageFirst) {
    const html = `<div class="card-clickable" href="#">
<div class="card-text rounded overflow-hidden shadow-lg">
  <img
  class="w-full h-48 object-cover"
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



async function getBirdsFromAPI(q = null) {
    console.log("entered birds from api")

    const birds_family = await fillBirdsFamilies(q)
    struct_data = await structureBirdData(birds_family, q)
    pagination["birds_in_this_call"] = struct_data[0]["birds"].length
    if (pagination["birds_seen"] == 0)
        pagination["birds_seen"] += pagination["birds_in_this_call"]
}

const turnSearchBarOn = () => {

    async function searchBirds(text) {
        let birds = struct_data[0]["birds"]
        birds = birds.filter((bird) => bird["name"].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(text.toLowerCase()));
        let search_struct = [{
            "birds": birds
        }]

        displayBirds(search_struct)
    }
    // search all
    let btnSearch = document.querySelector(".birds-searchbtn")
    btnSearch.addEventListener("click", async () => {
        let textInput = qs("#search")
        let textwritten = textInput.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        pagination.args = textwritten
        resetBirds()

        pagination["cur_page"] = 1;
        pagination["birds_seen"] = 0;

        const loading = document.createElement("div")
        loading.classList.add("lds-roller")
        loading.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
        loading.style.display = "block"
        loading.style.margin = "0 auto"

        qs(".wikiOptions").appendChild(loading);
        await getBirdsFromAPI(textwritten)
        loading.style.display = "none"

        qs("#page-span").innerHTML = pagination["cur_page"];
        displayBirds()
    })

    // searchbox family
    async function searchBirdsFamily(text) {
        let birds = struct_data[0]["birds"]
        console.log("boku no birds: ", birds)
        birds = birds.filter((bird) => {
            if (bird["category"] === undefined) {
                return false;
            }

            return bird["category"].toLowerCase().includes(text)
        });
        let search_struct = [{
            "birds": birds
        }]

        resetBirds()
        displayBirds(search_struct)
    }
}

export {
    getPagination,
    getStructData,
    turnSearchBarOn,
    getBirdsFromAPI,
    resetBirds,
    displayBirds
};