<template>
    <main
        class="container fix-container-fixed-navbar mx-auto text-center flex flex-col items-center"
    >
        <div class="container-description">
            <h1 class="title mb-5">¿Quiénes somos?</h1>
            <p>Avistaloo es una herramienta para los avistadores de aves, desde los más avanzados hasta los que acaban de empezar. Avistaloo ofrece servicios para poder compartir, ayudar, aprender...</p>
        </div>
        <br />
        <br />
        <div class="container-team">
            <h2 class="title">Nuestro equipo</h2>
            <div class="my-5">
                <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-5 lg:grid-rows-2">
                    <div
                        class="lg:col-start-1 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl"
                    >
                        <img
                            class="circle object-cover"
                            src="../assets/images/team/domi.jpg"
                            alt="Fotografía de Dominique"
                        />
                        <h3 class="font-bold text-2xl">Dominique Elvira</h3>
                        <a
                            href="https://www.linkedin.com/in/delviratapia"
                            target="_blank"
                            class="text-primary"
                            alt="Botón que lleva a LinkedIn de Dominique"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="mailto:delviratapia@gmail.com"
                            class="font-bold text-primary"
                            alt="Botón que lleva al email de Dominique"
                        >
                            <i class="fa-solid fa-envelope"></i> delviratapia@gmail.com
                        </a>
                    </div>
                    <div
                        class="lg:col-start-3 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl"
                    >
                        <img
                            id="a"
                            class="circle object-cover object-top"
                            src="../assets/images/team/carlos.jpg"
                            alt="Fotografía de Carlos"
                        />
                        <h3 class="font-bold text-2xl">Carlos David Hernández</h3>
                        <a
                            href="https://www.linkedin.com/in/carloshdezdasilva/"
                            target="_blank"
                            class="text-primary"
                            alt="Botón que lleva al LinkedIn de Carlos"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="mailto:carloshdezdasilva@gmail.com"
                            class="font-bold text-primary"
                            alt="Botón que lleva al email de Carlos"
                        >
                            <i class="fa-solid fa-envelope"></i> carloshdezdasilva@gmail.com
                        </a>
                    </div>
                    <div
                        class="lg:col-start-5 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl"
                    >
                        <img
                            class="circle object-cover"
                            src="../assets/images/team/manu.jpeg"
                            alt="Fotografía de Manuel"
                        />
                        <h3 class="font-bold text-2xl">Manuel Navarro</h3>
                        <a
                            href="https://www.linkedin.com/in/manuel-navarro-higueras/"
                            target="_blank"
                            class="text-primary"
                            alt="Botón que lleva al LinkedIn de Manuel"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="mailto:manuelnhc@gmail.com"
                            class="font-bold text-primary"
                            alt="Botón que lleva al email de Manuel"
                        >
                            <i class="fa-solid fa-envelope"></i> manuelnhc@gmail.com
                        </a>
                    </div>
                    <div
                        class="lg:col-start-2 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl"
                    >
                        <img
                            class="circle object-cover"
                            src="../assets/images/team/sergy.jpg"
                            alt="Fotografía de Sergio"
                        />
                        <h3 class="font-bold text-2xl">Sergio Ruiz</h3>
                        <a
                            href="https://www.linkedin.com/in/sergyrollerjs/"
                            target="_blank"
                            class="text-primary"
                            alt="Botón que lleva al LinkedIn de Sergio"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="mailto:sergio.ruiz.teleco@gmail.com"
                            class="font-bold text-primary"
                            alt="Botón que lleva al email de Sergio"
                        >
                            <i class="fa-solid fa-envelope"></i> sergio.ruiz.teleco@gmail.com
                        </a>
                    </div>
                    <div
                        class="lg:col-start-4 lg:col-span-2 h-96 border border-primary/50 rounded-lg flex flex-col items-center justify-around p-10 hover:shadow-4xl"
                    >
                        <img
                            class="circle object-cover"
                            src="../assets/images/team/mari.jpg"
                            alt="Fotografía de Marignacia"
                        />
                        <h3 class="font-bold text-2xl">Marignacia Flores</h3>
                        <a
                            href="https://www.linkedin.com/in/marignacia-flores-munoz/"
                            target="_blank"
                            class="text-primary"
                            alt="Botón que lleva al LinkedIn de Marignacia"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="mailto:marignacia.flores@gmail.com"
                            class="font-bold text-primary"
                            alt="Botón que lleva al email de Marignacia"
                        >
                            <i class="fa-solid fa-envelope"></i> marignacia.flores@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <p>
            Avistaloo surgió como un proyecto para el Curso de Programación y Diseño Web Front-End de la
            <a
                href="https://www.eoi.es/es"
                alt="Enlace que dirige a la página web de la Escuela de Organización Industrial"
            >Escuela de Organización Industrial</a> gracias a:
        </p>
        <br />
    </main>
    <div class="logos flex flex-wrap justify-center items-end mb-5">
        <img
            @click="confettiPrueba()"
            class="w-96 h-16"
            src="../assets/images/logo_eoi.jpg"
            alt="Gobierno de España, Ministerio de Industria, Comercio y Turismo, Escuela de Organización Industrial"
        />
        <img
            class="w-80 h-20"
            src="../assets/images/logo_union_europea.jpg"
            alt="Unión Europea, Fondo Social Europeo, Iniciativa de Empleo Juvenil"
        />
        <img
            class="w-52 h-28"
            src="../assets/images/logo_garantia_juvenil.jpg"
            alt="Sistema Nacional de Garantía Juvenil, Servicio Público de Empleo Estatal"
        />
        <img class="w-96 h-32" src="../assets/images/logo_fundacion_once.jpg" alt="Fundación ONCE" />
    </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import JSConfetti from 'js-confetti'
export default {
    name: "About",
    setup() {
        useMeta({ title: 'Sobre Nosotros' })
    },
    methods: {
        confettiPrueba() {
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti({
                confettiRadius: 6,
                confettiNumber: 100,
                emojis: ['🐱', '🐨', '🐐', '🦆',],
            })
        }
    }
};
</script>
<style lang="scss" scoped>
.circle {
    width: 160px;
    height: 160px;
    border-radius: 50%;
}
#a {
    object-position: 0 -5px;
}
.card-team {
    cursor: pointer;
}

h1.title {
    color: #335963;
    display: inline-block;
    font-size: 24px;
    font-weight: 600;
    border-bottom: 2px solid #33596338;
    text-transform: uppercase;
}

h2.title {
    display: inline-block;
    color: #335963;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid #33596338;
    text-transform: uppercase;
}

h2.title i {
    padding-right: 20px;
}
@media (max-width: 768px) {
    h1.title {
        text-align: center;
    }
    h2.title {
        text-align: center;
    }
    h2.title i {
        display: none;
    }
}
</style>
