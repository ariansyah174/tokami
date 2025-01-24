<script setup>
    import IconMenu from '../icons/IconMenu.vue'
</script>

<template>
    <div class="container">
        <div class="flex items-center justify-between relative h-11">
            <div class="px-4">
                <a href="#home" class="font-bold text-lg text-primary block">
                    TOKAMI
                </a>
            </div>
            <div class="flex items-center px-4">
                <button id="hamburger" name="hamburger" type="button" class="lg:hidden">
                    <span><IconMenu width="30"/></span>
                </button>

                <nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ">
                    <ul class="block lg:flex">
                        <li class="group">
                            <a href="#home" class="text-base flex text-dark py-2 mx-8 group-hover:text-primary">Beranda</a>
                        </li>
                        <li class="group">
                            <a href="#about" class="text-base flex text-dark py-2 mx-8 group-hover:text-primary">Tentang Saya</a>
                        </li>
                        <li class="group">
                            <a href="#portfolio" class="text-base flex text-dark py-2 mx-8 group-hover:text-primary">Portofolio</a>
                        </li>
                        <li class="group">
                            <a href="#clients" class="text-base flex text-dark py-2 mx-8 group-hover:text-primary">Client</a>
                        </li>
                        <li class="group">
                            <a href="#blog" class="text-base flex text-dark py-2 mx-8 group-hover:text-primary">Blog</a>
                        </li>
                        <li class="group">
                            <a href="#contact" class="text-base flex text-dark py-2 mx-8 group-hover:text-primary">Kontak</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const hamburger = document.querySelector('#hamburger');
            const navMenu = document.querySelector('#nav-menu');

            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('hidden');
            })
        }
    }
</script>