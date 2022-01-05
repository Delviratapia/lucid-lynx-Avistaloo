<template>
   <section class="container mx-auto p-5 fix-container-fixed-navbar">
      <div class="top-page flex items-center gap-10">
        <div class="menu-bars">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href="#"><li>Gorriones</li></a>
                <!-- <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="https://erikterwan.com/" target="_blank"
                  ><li>Show me more</li></a
                > -->
              </ul>
            </div>
          </nav>
        </div>
        <div class="search-box grow">
          <form onsubmit="event.preventDefault();" role="search">
            <input
              id="search"
              type="search"
              placeholder="Buscar"
              autofocus
              required
            />
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
      </div>
    </section>
    <section class="container mx-auto p-5">
      <div class="text-center mb-10 text-3xl">
        <h2>Categoría: Gorriones</h2>
      </div>
      <div class="cards grid grid-cols-1 md:grid-cols-3 gap-10">
      </div>
    </section>
    <section class="button-navigation container mx-auto p-5">
      <div class="block sm:flex justify-between">
        <div class="total-birds px-4 py-2 text-gray-700 bg-gray-200 rounded-md m-4">
          Pajaros encontrados: 6/276
        </div>
        <div class="flex items-center space-x-1 justify-center m-4">
          <!-- <a
            href="#"
            class="
              flex
              items-center
              px-4
              py-2
              text-gray-500
              bg-gray-300
              rounded-md
            "
            >Anterior</a
          > -->
          <a
            href="#"
            class="
              px-4
              py-2
              text-gray-700
              bg-gray-200
              rounded-md
              hover:bg-blue-400 hover:text-white
            "
            >1</a
          >
         <!--  <a
            href="#"
            class="
              px-4
              py-2
              font-bold
              text-gray-500
              bg-gray-300
              rounded-md
              hover:bg-blue-400 hover:text-white
            "
            >Siguiente</a
          > -->
        </div>
      </div>
    </section>
    <div class="modal">
      <div class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
		style="background: rgba(0,0,0,.7);">
		<div
			class=" fix-container-fixed-navbar border border-teal-500 shadow-lg modal-container bg-white w-11/12  mx-auto rounded shadow-lg z-50 overflow-y-auto">
			<div class="modal-content text-left">
				<!--Title-->
				<div class="flex justify-between items-center py-3 px-6 bg-slate-200 mb-5 sticky top-0">
					<p class="text-2xl font-bold name-animal">Gorrión</p>
					<div class="modal-close cursor-pointer z-50">
						<svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
							viewBox="0 0 18 18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				<!--Body-->
            <div class="body-card px-6">
				<div class="flex gap-5 flex-col lg:flex-row">
               <div class="image-card">
                  <img class="m-auto image-animal" width="500" src="https://okdiario.com/img/2020/02/24/-como-saber-si-un-pajaro-es-macho-o-hembra_-655x368.jpg" alt="">
               </div>
               <div class="box-details">
                  <div class="description description-animal">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A officiis reprehenderit voluptas, nulla odio excepturi adipisci quod doloremque maxime nostrum cum quia sapiente ipsam. Voluptatem perspiciatis ipsa nihil cupiditate nemo!</p>
                  </div>
                  <div class="details mt-5">
                     <p><span class="font-bold">Localización: </span><span class="location-animal">Ebro</span></p>
                     <p><span class="font-bold">Ejemplares descubiertos: </span><span class="ejemplares-animal">876,198</span></p>
                  </div>
               </div>
				</div>
            <!-- <div class="map-location w-full mt-5">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48320.39666380446!2d-73.965441!3d40.805449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025!5e0!3m2!1ses!2sus!4v1639676876735!5m2!1ses!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div> -->
         </div>
				<!--Footer-->
				<div class="flex justify-end m-6">
					<button
						class="focus:outline-none modal-close px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Salir</button>
				</div>
			</div>
	    	</div>
    	</div>
  </div>
</template>
<script>
import { useMeta } from 'vue-meta'
export default {
   setup() {
      useMeta({ title: 'Wikipedia de pajaros' })
   },
   mounted() {
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
  window.onclick = function(event) {
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

// Petición HTTP
fetch("../src/router/data.json")
  .then(response => response.json())
  .then(data => {
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
   },
}
</script>
<style lang="scss">
.search-box {
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 2px;
   border-radius:10px;
   & form {
      position: relative;
      background: #FFF;
      border-radius: 0.7rem;
    }
    & input, button {
      height: 75px;
      border: 0;
      font-size: 1.8rem;
    }
    & input[type="search"] {
      outline: 0;
      width: 100%;
      padding: 0 1.6rem;
      border-radius: 10px;
      transition: all 0.3s;
      transition-property: width;
      position: relative;
    }
    & button {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 5rem;
      font-weight: bold;
      background: #FFF;
      border-radius: 0 .7rem .7rem 0;
      transition:all 0.2s;
    }
    & button:hover {
       background-color:#335963;
       border:1px solid #335963
    }
    & button i {
       color:#335963;
    }
    & button:hover i {
       color:#FFF;
    }
    & input:not(:placeholder-shown) {
      border-radius: .7rem 0 0 .7rem;
      width: calc(100% - 5rem);
      + button {
        display: block;
      }
    }
    & label {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
}
/* MENU HAMBURGUER CSS */
.menu-bars {
   & #menuToggle {
   display: block;
   position: relative;
   z-index: 1;

   -webkit-user-select: none;
   user-select: none;
   }

   & #menuToggle a {
   text-decoration: none;
   color: #FFF;

   transition: color 0.3s ease;
   }

   & #menuToggle a:hover {
   color: tomato;
   }

   & #menuToggle input {
   display: block;
   width: 40px;
   height: 32px;
   position: absolute;
   top: -7px;
   left: -5px;

   cursor: pointer;

   opacity: 0; /* hide this */
   z-index: 2; /* and place it over the hamburger */

   -webkit-touch-callout: none;
   }

   & #menuToggle span {
   display: block;
   width: 33px;
   height: 4px;
   margin-bottom: 5px;
   position: relative;

   background: #335963;
   border-radius: 3px;

   z-index: 1;

   transform-origin: 4px 0px;

   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
               opacity 0.55s ease;
   }

   & #menuToggle span:first-child {
   transform-origin: 0% 0%;
   }

   & #menuToggle span:nth-last-child(2) {
   transform-origin: 0% 100%;
   }

   & #menuToggle input:checked ~ span {
   opacity: 1;
   transform: rotate(45deg) translate(-2px, -1px);
   background: #FFF;
   }

   & #menuToggle input:checked ~ span:nth-last-child(3) {
   opacity: 0;
   transform: rotate(0deg) scale(0.2, 0.2);
   }

   & #menuToggle input:checked ~ span:nth-last-child(2) {
   transform: rotate(-45deg) translate(0, -1px);
   }

   & #menu {
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   position: fixed;
   left:0;
   width: 300px;
   height:100vw;
   margin: -70px 0 0 0;
   padding: 25px;
   padding-top: 100px;

   background: #335963;
   -webkit-font-smoothing: antialiased;
   transform: translate(-100%, 0);
   transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0);
   }

   #menu li {
   padding: 10px 0;
   font-size: 22px;
   }

   #menuToggle input:checked ~ ul {
   transform: none;
   }
}
/* MODAL WIKI CSS */

.animated {
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
}

.animated.faster {
   -webkit-animation-duration: 500ms;
   animation-duration: 500ms;
}

.fadeIn {
   -webkit-animation-name: fadeIn;
   animation-name: fadeIn;
}

.fadeOut {
   -webkit-animation-name: fadeOut;
   animation-name: fadeOut;
}

@keyframes fadeIn {
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
}

@keyframes fadeOut {
   from {
      opacity: 1;
   }

   to {
      opacity: 0;
   }
}
.cards {
   & .card-clickable {
      transition: all 0.2s;
      color:#335963;
      cursor:pointer;
   }
   & .card-clickable:hover {
      transform:scale(1.02);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   }
   & img.w-full {
      height: 300px;
      object-fit:cover;
   }
}

.modal-content {
   max-height: calc(95vh);
   overflow-y: auto;
   & .box-details {
      border-left:2px solid;
      padding-left:15px;
      width:70%;
   }
}

</style>
