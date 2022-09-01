<template>
    <div class="radio-button-custom" @click="radioClick" :class="{ 'checked' : checked }">
        <span class="pill"></span>        
    </div>
</template>

<script>
export default {
    name: 'RadioButtonSwitch',
    data() {
        return {
            checked: false  
        }
    },
    methods: {
        radioClick() {
            this.checked = !this.checked;
            this.$emit('radio-click');
        }
    }
}
</script>

<style lang="scss" scoped>
.radio-button-custom {
    width: 48px;
    height: 28px;
    border-radius: 30px;
    background: #9C9C9C;
    position: relative;
    cursor: pointer;
    transition: all .4s;

    .pill {
        position: absolute;
        right: calc(100% - 26px);
        margin-left: 0;
        top: 2px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: var(--white);
        transition: all .4s;
    }

    &.checked {
        .pill {
            right: 2px;
        }
        background-color: var(--success);
    }
}
</style>