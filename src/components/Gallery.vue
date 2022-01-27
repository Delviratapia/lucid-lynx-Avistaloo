<template>
    <section id="gallery" class="container-gallery">
    <div class="flex flex-wrap -mx-4">
      <div class="image-gallery md:w-1/3 px-4 mb-8"><img class="rounded shadow-md cursor-pointer img-gallery opacity-1 lg:opacity-60 transition duration-500" src="../assets/images/bird-kingfisher.jpg"
          alt=""></div>
      <div class="image-gallery md:w-1/3 px-4 mb-8"><img class="rounded shadow-md cursor-pointer img-gallery first-line:opacity-1 lg:opacity-60 transition duration-500" src="../assets/images/gorrion.jpg" alt="">
      </div>
      <div class="image-gallery md:w-1/3 px-4 mb-8"><img class="rounded shadow-md cursor-pointer img-gallery opacity-1 lg:opacity-60 transition duration-500" src="../assets/images/jay.jpg" alt="">
      </div>
      <div class="image-gallery md:w-1/3 px-4 mb-8"><img class="rounded shadow-md cursor-pointer img-gallery opacity-1 lg:opacity-60 transition duration-500" src="../assets/images/lorikeet.jpg" alt="">
      </div>
      <div class="image-gallery md:w-1/3 px-4 mb-8"><img class="rounded shadow-md cursor-pointer img-gallery opacity-1 lg:opacity-60 transition duration-500" src="../assets/images/swan.jpg" alt="">
      </div>
      <div class="image-gallery md:w-1/3 px-4 mb-8"><img class="rounded shadow-md cursor-pointer img-gallery opacity-1 lg:opacity-60 transition duration-500" src="../assets/images/spring-bird.jpg"
          alt=""></div>
    </div>
  </section>
</template>
<style scoped>
.img-gallery:hover{
   opacity: 1;
}

.container-gallery {
  padding:40px 0px;
}
.image-gallery {
  transition:all 0.2s;
}
.image-gallery:hover {
  transform:scale(1.05);
}
</style>
