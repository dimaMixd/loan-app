<template>
    <b-container class="text-center logo-container">
        <img :src="image" alt="">
    </b-container>    
</template>

<script>
    import image from "../assets/logo.svg"
    
    export default {
        name: 'Logo',
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<style lang="scss" scoped>
.logo-container {
    margin-top: 2rem;
}
</style>