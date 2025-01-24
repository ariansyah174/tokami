<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" :width="width" viewBox="0 -960 960 960" fill="#e8eaed">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
</template>

<script>
    export default {
        props : {
            width: {
                type: String,
                default: "23"
            }
        }
    }
</script>