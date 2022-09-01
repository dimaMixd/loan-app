<template>
    <div class="personal-data">
        <h2>Personal data</h2>
        <b-row class="personal-data__fields">
            <b-col md="6" sm="12">
                <label>
                    <span class="label-text">Country</span>
                    <input type="text" :disabled="disabled" :value="personalData.country">
                </label>
            </b-col>
            <b-col md="6" sm="12">
                <label>
                    <b-form-select :disabled="disabled" v-model="personalData.county.selected" :options="personalData.county.options"></b-form-select>
                </label>
            </b-col>
        </b-row>

        <b-row class="personal-data__fields">
            <b-col md="6" sm="12">
                <label>
                    <input v-model="personalData.city" :disabled="disabled" type="text" placeholder="City / Parish">
                </label>
            </b-col>
            <b-col md="6" sm="12">
                <label>
                    <input v-model="personalData.village" :disabled="disabled" type="text" placeholder="Village / Township">
                </label>
            </b-col>
        </b-row>

        <b-row class="personal-data__fields">
            <b-col class="col-md-6 col-sm-12">
                <label>
                    <input v-model="personalData.street" :disabled="disabled" type="text" placeholder="Street">
                </label>
            </b-col>
            <b-col class="col-md-6 col-sm-12">
                <b-row>
                    <b-col class="col-md-4">
                        <label>
                            <input v-model="personalData.house" :disabled="disabled" type="text" placeholder="House">
                        </label>
                    </b-col>
                    <b-col class="col-md-4">
                        <label>
                            <input v-model="personalData.apartment" :disabled="disabled" type="text" placeholder="Apartment">
                        </label>
                    </b-col>
                    <b-col class="col-md-4">
                        <label>
                            <input v-model="personalData.postalCode" :disabled="disabled" type="text" placeholder="Postal Code">
                        </label>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <div class="manual-radio-button">
            <div class="manual-radio-button__wrapper">
                <RadioButtonSwitch @radio-click="radioHandler" />
                <span>Add address manually</span>
            </div>
        </div>
    </div>

</template>

<script>
import RadioButtonSwitch from './RadioButtonSwitch'

export default {
    name: 'PersonalData',
    components: {
        RadioButtonSwitch
    },
    data() {
        return {
            disabled: true,
            personalData: {
                country: 'Estonia',
                city: '',
                village: '',
                street: '',
                house: '',
                apartment: '',
                postalCode: '',
                county: {
                    selected: 'Harjumaa',
                    options: [
                        { value: 'Harjumaa', text: 'Harjumaa' },
                        { value: 'Ida-Virumaa', text: 'Ida-Virumaa' },
                        { value: 'Raplamaa', text: 'Raplamaa' },
                        { value: 'Saaremaa', text: 'Saaremaa' }
                    ]
                }
            },
        }
    },
    methods: {
        radioHandler() {
            this.disabled = !this.disabled;
        }
    }
}
</script>