let knowIfExtinct = (birdIsExtinct) => {
  let bird_status = "";
  if (birdIsExtinct) {
    bird_status = "Si";
  } else {
    bird_status = "no";
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

let displayBirds = (data) => {
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

  export { fillBirdsFamilies, displayBirds };