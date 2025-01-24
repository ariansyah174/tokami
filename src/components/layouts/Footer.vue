<script setup lang="ts">
import IconFacebook from '../icons/IconFacebook.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import IconTiktok from '../icons/IconTiktok.vue';
import IconYoutube from '../icons/IconYoutube.vue';
import LinkSosmed from '../LinkSosmed.vue';

</script>

<template>
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                <h2 class="font-bold text-4xl text-white mb-5">ALMI</h2>
                <h3 class="font-bold text-2xl mb-2">Hubungi Kami</h3>
                <p>ariansyah.maulana@mail.com</p>
                <p>Kp. Cipancur Mekarsari, Darangdan</p>
                <p>Purwakarta</p>
            </div>

            <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                <h3 class="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
                <ul class="text-slate-300">
                    <li>
                        <a href="" class="inline-block text-base hover:text-primary mb-3">Programming</a>
                    </li>
                    <li>
                        <a href="" class="inline-block text-base hover:text-primary mb-3">Teknologi</a>
                    </li>
                    <li>
                        <a href="" class="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a>
                    </li>
                </ul>
            </div>

            <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                <h3 class="font-semibold text-xl text-white mb-5">Tautan</h3>
                <ul class="text-slate-300">
                    <li>
                        <a href="#home" class="inline-block text-base hover:text-primary mb-3">Beranda</a>
                    </li>
                    <li>
                        <a href="#about" class="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="inline-block text-base hover:text-primary mb-3">Portofolio</a>
                    </li>
                    <li>
                        <a href="#clients" class="inline-block text-base hover:text-primary mb-3">Client</a>
                    </li>
                    <li>
                        <a href="#blog" class="inline-block text-base hover:text-primary mb-3">Blog</a>
                    </li>
                    <li>
                        <a href="#contact" class="inline-block text-base hover:text-primary mb-3">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="w-full pt-10 border-t border-slate-500">
            <div class="flex items-center justify-center mb-4">
                <!-- Youtube -->
                <LinkSosmed href="https://google.com">
                    <IconYoutube />
                </LinkSosmed>

                <!-- Instagram -->
                <LinkSosmed href="https://instagram.com">
                    <IconInstagram />
                </LinkSosmed>

                <!-- Tiktok -->
                <LinkSosmed href="https://tiktok.com">
                    <IconTiktok />
                </LinkSosmed>

                <!-- Facebook -->
                <LinkSosmed href="https://facebook.com">
                    <IconFacebook />
                </LinkSosmed>

            </div>
            <p class="font-medium text-xs text-slate-500 text-center">Dibuat oleh <a href="#" class="font-bold text-primary">Ariansyah Maulana</a>, menggunkan Tailwind CSS.</p>
        </div>
        
    </div>
</template>