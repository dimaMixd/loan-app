<template>
    <b-container class="text-center">
        <div>
            <b-button @click="buttonClicked">Continue</b-button>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'ProceedForm',
    data(){
        return {
            pep: false,
            beneficiary: false
        }
    },
    methods: {
        buttonClicked() {
            this.$emit('proceed-button-clicked');
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    background: var(--primary-purple);
    width: 100%;
    border: none;
    max-width: 400px;
    margin: 1rem 0;
}
</style>