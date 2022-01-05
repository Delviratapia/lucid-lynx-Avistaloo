<template>
<div class="flex justify-around flex-col p-10 pt-0 sm:gap-10 lg:flex-row">
   <!-- comment 1 -->

    <div class='flex max-w-xl mt-10 bg-white shadow-md shadow-xl rounded-lg overflow-hidden mx-auto'>
      <div class='flex items-center w-full'>
        <div class='w-full'>
          <div class="flex flex-row mt-2 px-2 py-3 mx-3">
            <div class="w-auto h-auto rounded-full border-2 border-pink-500">
              <img class='w-12 h-12 object-cover rounded-full shadow cursor-pointer' alt='User avatar'
                src='../assets/images/usuario1.jpg'>
            </div>
            <div class="flex flex-col mb-2 ml-4 mt-1">
              <div class='text-gray-600 text-sm font-semibold'>Sara García</div>
              <div class='flex w-full mt-1'>
                <div class='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                  Valencia
                </div>
                <div class='text-gray-400 font-thin text-xs'>
                  • 10 minutes ago
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-gray-100"></div>
          <div class='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img class="rounded"
              src="../assets/images/nidoarbol.jpg"></div>
          <div class='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>Ayuda para identificar este pájaro</div>
          <div class='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>Encontré este nido en el árbol de mi casa,
            ¿Alguien sabe que tipo de ave es?</div>
          <div class="flex justify-start mb-4 border-t border-gray-100">
            <div class="flex w-full mt-1 pt-2 pl-5">
              <span
                class="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </span>
              <div class="text-sm">Inicia sesión para <br> guardar tus favoritos</div>
            </div>
            <div class="flex justify-end w-full mt-1 pt-2 pr-5">
              <span
                class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </span>
              <span
                class="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </div>
          </div>
          <div class="flex w-full border-t border-gray-100">
            <div class="mt-3 mx-5 flex flex-row items-center">
              <svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="🎳-Social-Media" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Square_Timeline" transform="translate(-312.000000, -746.000000)">
                    <g id="Post-1" transform="translate(280.000000, 227.000000)">
                      <g id="Post-Action" transform="translate(0.000000, 495.000000)">
                        <g transform="translate(30.000000, 21.000000)" id="Comment">
                          <g>
                            <g id="ic_comment-Component/icon/ic_comment">
                              <g id="Comments">
                                <polygon id="Path" points="0 0 24 0 24 25 0 25"></polygon>
                                <g id="iconspace_Chat-3_25px" transform="translate(2.000000, 3.000000)" fill="#92929D">
                                  <path
                                    d="M10.5139395,15.2840977 L6.06545155,18.6848361 C5.05870104,19.4544672 3.61004168,18.735539 3.60795568,17.4701239 L3.60413773,15.1540669 C1.53288019,14.6559967 0,12.7858138 0,10.5640427 L0,4.72005508 C0,2.11409332 2.10603901,0 4.70588235,0 L15.2941176,0 C17.893961,0 20,2.11409332 20,4.72005508 L20,10.5640427 C20,13.1700044 17.893961,15.2840977 15.2941176,15.2840977 L10.5139395,15.2840977 Z M5.60638935,16.5183044 L9.56815664,13.4896497 C9.74255213,13.3563295 9.955971,13.2840977 10.1754888,13.2840977 L15.2941176,13.2840977 C16.7876789,13.2840977 18,12.0671403 18,10.5640427 L18,4.72005508 C18,3.21695746 16.7876789,2 15.2941176,2 L4.70588235,2 C3.21232108,2 2,3.21695746 2,4.72005508 L2,10.5640427 C2,12.0388485 3.1690612,13.2429664 4.6301335,13.28306 C5.17089106,13.297899 5.60180952,13.7400748 5.60270128,14.2810352 L5.60638935,16.5183044 Z"
                                    id="Path"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="ml-1 text-black font-thin text-ms"> 5</div>
              <div class="ml-1 text-black font-thin text-ms">Comentarios</div>




            </div>

            <div class="mt-3 mx-5 w-full flex justify-end">

              <div class='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500 transition ease-out duration-300 hover:bg-red-300  text-center rounded-full text-gray-100 cursor-pointer"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
                <div class="ml-1 text-black font-thin text-ms"> 120 </div>
                <div class="ml-1 text-black font-thin text-ms"> Likes</div>
              </div>
            </div>
          </div>
          <div
            class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <img class='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer' alt='User avatar'
              src='../assets/images/usuario4.jpg'>
            <span class="absolute inset-y-0 right-0 flex items-center pr-6">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                <svg class="w-6 h-6 transition  ease-out duration-300 hover:text-blue-500 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </button>
            </span>
            <input type="search"
              class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off">

          </div>
        </div>

      </div>

    </div>



    <!-- comment 2 -->


    <div class='flex max-w-xl mt-10 bg-white shadow-md  shadow-xl rounded-lg overflow-hidden mx-auto'>
      <div class='flex items-center w-full'>
        <div class='w-full'>
          <div class="flex flex-row mt-2 px-2 py-3 mx-3">
            <div class="w-auto h-auto rounded-full border-2 border-pink-500">
              <img class='w-12 h-12 object-cover rounded-full shadow cursor-pointer' alt='User avatar'
                src='../assets/images/usuario3.jpg'>
            </div>
            <div class="flex flex-col mb-2 ml-4 mt-1">
              <div class='text-gray-600 text-sm font-semibold'>Laura Torremolinos</div>
              <div class='flex w-full mt-1'>
                <div class='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                  Vallecas
                </div>
                <div class='text-gray-400 font-thin text-xs'>
                  • Hace un 1 día
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-gray-100"></div>
          <div class='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img class="rounded"
              src="../assets/images/bird-2.jpg"></div>
          <div class='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>Hola a todos</div>
          <div class='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>Iba de excursión y vimos a este pájaro, ¿Les
            suena?</div>
          <div class="flex justify-start mb-4 border-t border-gray-100">
            <div class="flex w-full mt-1 pt-2 pl-5">
              <span
                class="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </span>
              <div class="text-sm">Inicia sesión para <br> guardar tus favoritos</div>
            </div>
            <div class="flex justify-end w-full mt-1 pt-2 pr-5">
              <span
                class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </span>
              <span
                class="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </div>
          </div>
          <div class="flex w-full border-t border-gray-100">
            <div class="mt-3 mx-5 flex flex-row items-center">
              <svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="🎳-Social-Media" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Square_Timeline" transform="translate(-312.000000, -746.000000)">
                    <g id="Post-1" transform="translate(280.000000, 227.000000)">
                      <g id="Post-Action" transform="translate(0.000000, 495.000000)">
                        <g transform="translate(30.000000, 21.000000)" id="Comment">
                          <g>
                            <g id="ic_comment-Component/icon/ic_comment">
                              <g id="Comments">
                                <polygon id="Path" points="0 0 24 0 24 25 0 25"></polygon>
                                <g id="iconspace_Chat-3_25px" transform="translate(2.000000, 3.000000)" fill="#92929D">
                                  <path
                                    d="M10.5139395,15.2840977 L6.06545155,18.6848361 C5.05870104,19.4544672 3.61004168,18.735539 3.60795568,17.4701239 L3.60413773,15.1540669 C1.53288019,14.6559967 0,12.7858138 0,10.5640427 L0,4.72005508 C0,2.11409332 2.10603901,0 4.70588235,0 L15.2941176,0 C17.893961,0 20,2.11409332 20,4.72005508 L20,10.5640427 C20,13.1700044 17.893961,15.2840977 15.2941176,15.2840977 L10.5139395,15.2840977 Z M5.60638935,16.5183044 L9.56815664,13.4896497 C9.74255213,13.3563295 9.955971,13.2840977 10.1754888,13.2840977 L15.2941176,13.2840977 C16.7876789,13.2840977 18,12.0671403 18,10.5640427 L18,4.72005508 C18,3.21695746 16.7876789,2 15.2941176,2 L4.70588235,2 C3.21232108,2 2,3.21695746 2,4.72005508 L2,10.5640427 C2,12.0388485 3.1690612,13.2429664 4.6301335,13.28306 C5.17089106,13.297899 5.60180952,13.7400748 5.60270128,14.2810352 L5.60638935,16.5183044 Z"
                                    id="Path"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="ml-1 text-black font-thin text-ms"> 5</div>
              <div class="ml-1 text-black font-thin text-ms">Comentarios</div>

            </div>

            <div class="mt-3 mx-5 w-full flex justify-end">

              <div class='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500 transition ease-out duration-300 hover:bg-red-300  text-center rounded-full text-gray-100 cursor-pointer"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
                <div class="ml-1 text-black font-thin text-ms"> 50 </div>
                <div class="ml-1 text-black font-thin text-ms"> Likes</div>
              </div>
            </div>
          </div>
          <div
            class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <img class='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer' alt='User avatar'
              src='../assets/images/usuario4.jpg'>
            <span class="absolute inset-y-0 right-0 flex items-center pr-6">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                <svg class="w-6 h-6 transition  ease-out duration-300 hover:text-blue-500 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </button>
            </span>
            <input type="search"
              class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off">

          </div>
        </div>

      </div>

    </div>


    <!-- comment 3 -->



    <div class='flex max-w-xl mt-10 bg-white shadow-md  shadow-xl rounded-lg overflow-hidden mx-auto'>
      <div class='flex items-center w-full'>
        <div class='w-full'>
          <div class="flex flex-row mt-2 px-2 py-3 mx-3">
            <div class="w-auto h-auto rounded-full border-2 border-pink-500">
              <img class='w-12 h-12 object-cover rounded-full shadow cursor-pointer' alt='User avatar'
                src='../assets/images/usuario2.jpg'>
            </div>
            <div class="flex flex-col mb-2 ml-4 mt-1">
              <div class='text-gray-600 text-sm font-semibold'>Christian Winschenhaussen</div>
              <div class='flex w-full mt-1'>
                <div class='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                  Tenerife
                </div>
                <div class='text-gray-400 font-thin text-xs'>
                  • Hace 30 minutos
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-gray-100"></div>
          <div class='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img class="rounded"
              src="../assets/images/bird-3.jpg"></div>
          <div class='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>No saben que encontrar</div>
          <div class='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>Hola amigos de avistaloo, fui buscando plata y
            encontre oro, miren que ejemplar mas bonito</div>
          <div class="flex justify-start mb-4 border-t border-gray-100">
            <div class="flex w-full mt-1 pt-2 pl-5">
              <span
                class="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </span>
              <div class="text-sm">Inicia sesión para <br> guardar tus favoritos</div>
            </div>
            <div class="flex justify-end w-full mt-1 pt-2 pr-5">
              <span
                class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </span>
              <span
                class="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </div>
          </div>
          <div class="flex w-full border-t border-gray-100">
            <div class="mt-3 mx-5 flex flex-row items-center">
              <svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="🎳-Social-Media" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Square_Timeline" transform="translate(-312.000000, -746.000000)">
                    <g id="Post-1" transform="translate(280.000000, 227.000000)">
                      <g id="Post-Action" transform="translate(0.000000, 495.000000)">
                        <g transform="translate(30.000000, 21.000000)" id="Comment">
                          <g>
                            <g id="ic_comment-Component/icon/ic_comment">
                              <g id="Comments">
                                <polygon id="Path" points="0 0 24 0 24 25 0 25"></polygon>
                                <g id="iconspace_Chat-3_25px" transform="translate(2.000000, 3.000000)" fill="#92929D">
                                  <path
                                    d="M10.5139395,15.2840977 L6.06545155,18.6848361 C5.05870104,19.4544672 3.61004168,18.735539 3.60795568,17.4701239 L3.60413773,15.1540669 C1.53288019,14.6559967 0,12.7858138 0,10.5640427 L0,4.72005508 C0,2.11409332 2.10603901,0 4.70588235,0 L15.2941176,0 C17.893961,0 20,2.11409332 20,4.72005508 L20,10.5640427 C20,13.1700044 17.893961,15.2840977 15.2941176,15.2840977 L10.5139395,15.2840977 Z M5.60638935,16.5183044 L9.56815664,13.4896497 C9.74255213,13.3563295 9.955971,13.2840977 10.1754888,13.2840977 L15.2941176,13.2840977 C16.7876789,13.2840977 18,12.0671403 18,10.5640427 L18,4.72005508 C18,3.21695746 16.7876789,2 15.2941176,2 L4.70588235,2 C3.21232108,2 2,3.21695746 2,4.72005508 L2,10.5640427 C2,12.0388485 3.1690612,13.2429664 4.6301335,13.28306 C5.17089106,13.297899 5.60180952,13.7400748 5.60270128,14.2810352 L5.60638935,16.5183044 Z"
                                    id="Path"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="ml-1 text-black font-thin text-ms"> 20</div>
              <div class="ml-1 text-black font-thin text-ms">Comentarios</div>




            </div>

            <div class="mt-3 mx-5 w-full flex justify-end">

              <div class='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500 transition ease-out duration-300 hover:bg-red-300  text-center rounded-full text-gray-100 cursor-pointer"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
                <div class="ml-1 text-black font-thin text-ms"> 90 </div>
                <div class="ml-1 text-black font-thin text-ms"> Likes</div>
              </div>
            </div>
          </div>
          <div
            class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <img class='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer' alt='User avatar'
              src='../assets/images/usuario4.jpg'>
            <span class="absolute inset-y-0 right-0 flex items-center pr-6">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                <svg class="w-6 h-6 transition  ease-out duration-300 hover:text-blue-500 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </button>
            </span>
            <input type="search"
              class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off">

          </div>
        </div>

      </div>

    </div>
    </div>
</template>
