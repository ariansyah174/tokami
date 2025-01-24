<script setup>
    import Navbar from '../components/layouts/Navbar.vue';
    import Home from '../components/layouts/Home.vue';
    import About from '../components/layouts/About.vue';
    import Portfolio from '../components/layouts/Portfolio.vue';
    import Clients from '../components/layouts/Clients.vue';
    import Blog from '../components/layouts/Blog.vue';
    import Contact from '../components/layouts/Contact.vue';
import Footer from '../components/layouts/Footer.vue';
</script>

<template>

    <!-- Header Section Start -->
    <header class="bg-transparent h-[60px] top-0 left-0 w-full flex items-center z-10">
        <Navbar/>
    </header>
    <!-- Header Section End -->

    <!-- Hero Section Start -->
    <section id="home" class="pt-10">
        <Home/>
    </section>
    <!-- Hero Section End -->

    <!-- About Section Start -->
    <section id="about" class="pt-32 pb-32">
        <About/>
    </section>
    <!-- About Section End -->

    <!-- Portfolio Section Start -->
    <section id="portfolio" class="pt-32 pb-32 bg-slate-100">
        <Portfolio/>
    </section>
    <!-- Portfolio Section End -->
     
    <!-- Clients Section Start -->
    <section id="clients" class="pt-32 pb-32 bg-slate-700">
        <Clients/>
    </section>
    <!-- Clients Section End -->

    <!-- Blog Section Start -->
    <section id="blog" class="pt-32 pb-32 bg-slate-100">
        <Blog/>
    </section>
    <!-- Blog Section End -->

    <!-- Contact Section Start -->
    <section id="contact" class="pt-32 pb-32">
        <Contact/>
    </section>
    <!-- Contact Section End -->

    <!-- Footer Section Start -->
    <footer id="footer" class="pt-24 pb-12 bg-dark">
        <Footer/>
    </footer>
    <!-- Footer Section End -->

</template>

<script>
    export default {
        mounted() {
            window.onscroll = function () {
                const header = document.querySelector('header');
                const fixedNav = header.offsetTop;

                if (window.pageYOffset > fixedNav) {
                    header.classList.add('navbar-fixed');
                } else {
                    header.classList.remove('navbar-fixed');
                }
            } 
        }
    }
</script>
