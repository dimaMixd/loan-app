<template>
    <button @click="buttonClick()" :class="(color) ? color : 'white'">
        <b-icon :icon="(icon) ? icon : 'chevron-right'"></b-icon>
    </button>
</template>

<script>
export default {
    name: 'ButtonArrow',
    props: {
        color: String,
        icon: String
    },
    methods: {
        buttonClick() {
            this.$emit('button-click')
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    border-radius: 50%;
    height: 34px;
    width: 34px;
    border: none;
    outline: 0;
    transition: all .25s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;


    &.white {
        background-color: var(--white);

        &:hover {
            box-shadow: 0px 1px 25px 4px #5948AD;
        }
    }

    &.purple {
        background-color: var(--primary-purple);

        .b-icon.bi {
            color: var(--white);
        }

        &:hover {
            background-color: var(--white);

            .b-icon.bi {
                color: var(--primary-purple);
            }
        }
    }
}
</style>