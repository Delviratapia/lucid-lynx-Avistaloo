<template>
<header class="bg-center bg-center bg-cover relative">
	<div class="hero-content bg-opacity-50 flex items-center justify-center">
		<div class="mx-2 text-center container-hero">
         <div class="group-items flex">
            <div class="content">
				   <h1 class="title text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">Bienvenido
					   <span class="text-white">{{getUserName()}}</span>
               </h1>
               <h2 class="title text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                  Descubre y sube <span class="text-white">tus avistamientos</span> en avistaloo.com
               </h2>
               <div class="inline-flex">
                  <a href="mi-cuenta" class="px-4 py-2 my-5  text-center lg:mr-3 bg-white border border-primary-color text-primary-color hover:scale-110 rounded-md">Mi cuenta</a>
                  <a href="#avistamientos" class="px-4 py-2 my-5  text-center lg:mr-3 bg-white border border-primary-color text-primary-color hover:scale-110 rounded-md">Avistamientos</a>
               </div>
           </div>
           <div class="lottie">
              <lottie-player class="inner-lottie" src="https://assets4.lottiefiles.com/packages/lf20_F2Mv1p.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
           </div>
         </div>
      </div>
   </div>
</header>
</template>
<script>
import { mapState } from "vuex";
export default ({
   components: {
   },
   data() {
   },
   methods: {
      getUserName() {
         const user = JSON.parse(localStorage.getItem("userLogged")).displayName;
         return user;
      },
      ...mapState(["user"]),
   }
})
</script>

<style scoped>
header {
   background:url('../assets/images/background-header.png');
   opacity:1;

}
.hero-content {
   height:500px;
   background-size:contain;
}

@media(max-width:992px) {
   .content {
      padding-top:0px
   }
   .content h1 {
      font-size:32px;
      margin-bottom:20px;
   }
   .content h2 {
      font-size:20px;
   }
   .content .inline-flex {
      gap:1rem;
      align-items:center;
   }
   .lottie .inner-lottie {
      width:150px !important;
      height:150px !important
   }
.hero-content .flex {
   flex-direction:column;
}
}

.container-hero {
   margin-top:100px;
}

.group-items {
   align-items:center;
}

.group-items a {
   transition:all 0.2s;
   font-weight:600;
}
.title span {
   text-shadow: 3px 0px 7px rgba(0, 0, 0, 0.8),
	  -3px 0px 7px rgba(0, 0, 0, 0.8),
	  0px 4px 7px rgba(0, 0, 0, 0.8);
}

h2.title {
   color:white;
   opacity:1;
}
</style>
