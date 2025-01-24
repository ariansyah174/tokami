<template>
    <a :href="href" target="_blank"
        class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props : {
            href: ''
        }
    }
</script>
