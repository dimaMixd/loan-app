<template>
    <div>
        <b-container class="text-center">
            <div class="checkboxes">
                <label>
                    <input v-model="pep" type="checkbox">
                    <span class="checkbox-custom">
                        <b-icon v-show="pep" class="icon" icon="check"></b-icon>
                    </span>
                    <span>The beneficial owner is not a PEP <b-icon class="modal-trigger" v-b-modal.modal-3 icon="info-circle"></b-icon></span>
                </label>
            </div>
        </b-container>
        <Transition name="slide-up">
        <b-container v-if="!pep">
            <b-row class="personal-data__fields">
                <b-col sm="12" md="6">
                    <label class="select-wrap">
                        <b-form-select  v-model="relationship.selected" :options="relationship.options"></b-form-select>
                        <span class="icon">
                            <b-icon icon="chevron-down"></b-icon>
                        </span>
                    </label>
                </b-col>
                <b-col sm="12" md="6">
                    <label class="select-wrap">
                        <b-form-select  v-model="region.selected" :options="region.options"></b-form-select>
                        <span class="icon">
                            <b-icon icon="chevron-down"></b-icon>
                        </span>
                    </label>
                </b-col>
            </b-row>    
            <b-row class="personal-data__fields">
                <b-col sm="12" md="6">
                    <label class="select-wrap">
                        <b-form-select  v-model="position.selected" :options="position.options"></b-form-select>
                        <span class="icon">
                            <b-icon icon="chevron-down"></b-icon>
                        </span>
                    </label>
                </b-col>
                <b-col sm="12" md="6">
                    <label class="select-wrap">
                        <b-form-select  v-model="duration.selected" :options="duration.options"></b-form-select>
                        <span class="icon">
                            <b-icon icon="chevron-down"></b-icon>
                        </span>
                    </label>
                </b-col>
            </b-row>    
        </b-container>
        </Transition>
    </div>

</template>

<script>
export default {
    name: 'PepFields',
    data() {
        return {
            pep: true,
            relationship: {
                selected: 'Lorem ipsum 1',
                options: [
                    { value: 'Lorem ipsum 1', text: 'Lorem ipsum 1' },
                    { value: 'Lorem ipsum 2', text: 'Lorem ipsum 2' },
                    { value: 'Lorem ipsum 3', text: 'Lorem ipsum 3' },
                ]
            },
            region: {
                selected: 'Lorem ipsum 1',
                options: [
                    { value: 'Lorem ipsum 1', text: 'Lorem ipsum 1' },
                    { value: 'Lorem ipsum 2', text: 'Lorem ipsum 2' },
                    { value: 'Lorem ipsum 3', text: 'Lorem ipsum 3' },
                ]
            },
            position: {
                selected: 'Lorem ipsum 1',
                options: [
                    { value: 'Lorem ipsum 1', text: 'Lorem ipsum 1' },
                    { value: 'Lorem ipsum 2', text: 'Lorem ipsum 2' },
                    { value: 'Lorem ipsum 3', text: 'Lorem ipsum 3' },
                ]
            },
            duration: {
                selected: 'Lorem ipsum 1',
                options: [
                    { value: 'Lorem ipsum 1', text: 'Lorem ipsum 1' },
                    { value: 'Lorem ipsum 2', text: 'Lorem ipsum 2' },
                    { value: 'Lorem ipsum 3', text: 'Lorem ipsum 3' },
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-trigger {
    margin-left: 1rem;
    color: var(--secondary-purple);

    @media(max-width: 991px) {
        margin-left: 0;
    }
}
</style>