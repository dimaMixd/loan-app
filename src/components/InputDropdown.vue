<template>
    <b-dropdown :id="dropDownRef" size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
        <template #button-content>
            <b-icon icon="chevron-down"></b-icon>
        </template>
        <b-dropdown-item :id="'el-'+element.value"  :key="element.id" v-for="element in elements" @click="dropdownItemClick(element)">
            <div v-if="amountDropdown" >
                <div v-if="element.id === 2" class="min-value">
                    <span>{{element.value}}€</span>
                    <span>Min. allowed</span>
                </div>
                <div v-else-if="element.id === 100" class="max-value">
                    <span>{{element.value}}€</span>
                    <span>Max. allowed</span>
                </div>
                <div v-else>
                    {{element.value}}€
                </div>
            </div>
            <div v-else>
                {{element.value}}
            </div>
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
    name: 'InputDropdown',
    props: {
        elements: Array,
        amountDropdown: Boolean,
        dropDownRef: String,
        currentValue: Number
    },
    methods: {
        dropdownItemClick(el) {
            this.$emit('dropdown-item-click', el.value)
        }
    }
}
</script>