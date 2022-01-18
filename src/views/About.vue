<template>
       <main class="container fix-container-fixed-navbar mx-auto text-center flex flex-col items-center">
        <h1 class="text-3xl font-extrabold ">¿Quiénes somos?</h1> <br><br>
        <div class="w-5/6 ">
            <p>Avistaloo es una herramienta para los avistadores de aves, desde los más avanzados hasta los que acaban de empezar. Avistaloo ofrece servicios para poder compartir, ayudar, aprender...</p> <br>
        </div>
        <br><br>

        <br><br>
        <h2 class="text-xl font-bold" >Nuestro equipo</h2><br>
        <div class="my-5">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-5 lg:grid-rows-2">
                <div class="lg:col-start-1 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl ">
                    <img class="circle object-cover " src="../assets/images/team/domi.jpg" alt="">
                    <h3 class="font-bold text-2xl">Dominique Elvira</h3>
                    <nav>
                        <a class="text-primary" target="_blank" href="https://www.linkedin.com/in/delviratapia/"><i class="fab fa-linkedin-in"></i></a>
                    </nav>
                </div>
                <div class="lg:col-start-3 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl  ">
                    <img id="a" class="circle object-cover object-top" src="../assets/images/team/carlos.jpg" alt="">
                    <h3 class="font-bold text-2xl">Carlos David Hernández</h3>
                    <nav>
                        <a class="text-primary" target="_blank" href="https://www.linkedin.com/in/carloshdezdasilva/"><i class="fab fa-linkedin-in"></i></a>
                    </nav>
                </div>
                <div class="lg:col-start-5 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl  ">
                    <img class="circle object-cover" src="../assets/images/team/manu.jpeg" alt="">
                    <h3 class="font-bold text-2xl">Manuel Navarro</h3>
                    <nav>
                        <a class="text-primary" target="_blank" href="https://www.linkedin.com/in/manuel-navarro-higueras/"><i class="fab fa-linkedin-in"></i></a>
                    </nav>
                </div>
                <div class="lg:col-start-2 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl  ">
                    <img class="circle object-cover" src="../assets/images/team/sergy.jpg" alt="">
                    <h3 class="font-bold text-2xl">Sergio Ruiz</h3>
                    <nav>
                        <a class="text-primary" target="_blank" href="https://www.linkedin.com/in/sergyrollerjs/?originalSubdomain=es"><i class="fab fa-linkedin-in"></i></a>
                    </nav>
                </div>
                <div class="lg:col-start-4 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl  ">
                    <img class="circle object-cover" src="../assets/images/team/mari.jpg" alt="">
                    <h3 class="font-bold text-2xl">Marignacia Flores</h3>
                    <nav>
                        <a class="text-primary" target="_blank" href="https://www.linkedin.com/in/marignacia-flores-munoz/"><i class="fab fa-linkedin-in"></i></a>
                    </nav>
                </div>
            </div>
        </div>
        <br><br>
        <p>Avistaloo surgió como un proyecto para el Curso de Programación y Diseño Web Front-End de la <a href="https://www.eoi.es/es">Escuela de Organización Industrial</a> gracias a:</p> <br>
    </main>
    <div class="logos flex flex-wrap justify-center items-end mb-5">
        <img class="w-96 h-16" src="../assets/images/logo_eoi.jpg" alt="">
        <img class="w-80 h-20" src="../assets/images/logo_union_europea.jpg" alt="">
        <img class="w-52 h-28" src="../assets/images/logo_garantia_juvenil.jpg" alt="">
        <img class="w-96 h-32" src="../assets/images/logo_fundacion_once.jpg" alt="">
    </div>
</template>

<script>
import { useMeta } from 'vue-meta'
export default {
  name: "About",
  setup () {
    useMeta({ title: 'Sobre Nosotros' })
  }
};
</script>
<style lang="scss" scoped>
.circle{
    width: 160px;
    height: 160px;
    border-radius: 50%;
}
#a{
    object-position: 0 -5px;
}
</style>
