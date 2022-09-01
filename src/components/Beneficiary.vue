<template>
    <div>
        <b-container class="text-center">
            <div class="checkboxes">
                <label>
                    <input v-model="beneficiary" type="checkbox">
                    <span class="checkbox-custom">
                        <b-icon v-show="beneficiary" class="icon" icon="check"></b-icon>
                    </span>
                    <span>I’m the ultimate beneficiary <b-icon class="modal-trigger" v-b-modal.modal-2 icon="info-circle"></b-icon></span>
                </label>
            </div>
        </b-container>
        <Transition name="slide-up">
        <b-container v-if="beneficiary">
            <b-row class="personal-data__fields">
                <b-col sm="12" md="6">
                    <label>
                        <input v-model="firstName" type="text" placeholder="First name">
                    </label>
                </b-col>
                <b-col sm="12" md="6">
                    <label>
                        <input v-model="lastName" type="text" placeholder="Last name">
                    </label>
                </b-col>
            </b-row>    

            <b-row class="personal-data__fields">
                <b-col sm="12" md="6">
                    <label>
                        <input v-model="personalId" type="text" placeholder="Personal ID code">
                    </label>
                </b-col>
                <b-col sm="12" md="6">
                    <label>
                        <b-form-select  v-model="residency.selected" :options="residency.options"></b-form-select>
                    </label>
                </b-col>
            </b-row>

            <b-row class="personal-data__fields">
                <b-col sm="12" md="6">
                    <label>
                        <input v-model="birthPlace" type="text" placeholder="Birth place">
                    </label>
                </b-col>
                <b-col sm="12" md="6">
                    <label>
                        <input v-model="birthDate" type="text" placeholder="Birth date">
                    </label>
                </b-col>
            </b-row>   

        </b-container>
        </Transition>
    </div>

</template>

<script>
export default {
    name: 'Beneficiary',
    data() {
        return {
            firstName: '',
            lastName: '',
            personalId: '',
            birthPlace: '',
            birthDate: '',
            beneficiary: false,
            residency: {
                selected: 'Residency',
                options: [
                    { value: 'Residency', text: 'Residency' },
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