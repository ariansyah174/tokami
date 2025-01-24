<script setup>
    import LinkSosmed from '../LinkSosmed.vue'
    import IconYoutube from '../icons/IconYoutube.vue'
    import IconInstagram from '../icons/IconInstagram.vue'
    import IconTiktok from '../icons/IconTiktok.vue'
    import IconFacebook from '../icons/IconFacebook.vue'
</script>

<template>
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2">
                <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                <h2 class="font-bold text-dark text-3xl mb-5 max-w-xl">Yuk, Belajar web programming</h2>
                <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolorum nemo nisi numquam vitae, rem hic, voluptates accusamus repellendus mollitia, alias
                </p>
            </div>

            <div class="w-full px-4 mb-10 lg:w-1/2">
                <h4 class="font-semibold text-dark text-2xl mb-4">Mari berteman</h4>
                <p class="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorum nemo nisi numquam vitae, rem hic, voluptates accusamus repellendus
                    mollitia
                </p>

                <div class="flex items-center">
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
            </div>

        </div>
    </div>
</template>
