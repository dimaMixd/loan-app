<template>
    <div class="customer-data d-flex align-items-center">
        <Transition mode="out-in" name="slide-up">
        <div class="customer-data__editing" v-if="editing" key="1">
            <b-row>
                <b-col>
                    Change your contact Info
                    <div v-if="errors.length" class="errors">
                        <ul>
                            <li v-for="error in errors">
                                {{errorMessages[error]}}
                            </li>
                        </ul>
                    </div>
                </b-col>
                <b-col>
                    <div class="customer-data__field customer-data__field__name">
                        <label class="d-flex align-items-center">
                            <span class="input__icon">
                                <b-icon icon="info"></b-icon>
                            </span>
                            <span class="input__field">
                                <input placeholder="Full name" v-model="customerData.fullName" type="text">
                            </span>
                        </label>
                    </div>
                </b-col>
                <b-col>
                    <div class="customer-data__field customer-data__field__id">
                        <label class="d-flex align-items-center">
                            <span class="input__icon">
                                <b-icon icon="person"></b-icon>
                            </span>
                            <span class="input__field">
                                <input placeholder="ID number" v-model="customerData.personalCode" type="number">
                            </span>
                        </label>
                    </div>
                </b-col>
                <b-col>
                    <div class="customer-data__field customer-data__field__mobile">
                        <label class="d-flex align-items-center">
                            <span class="input__icon">
                                <b-icon icon="telephone"></b-icon>
                            </span>
                            <span class="input__field">
                                <span class="mobile-placeholder">+372</span>
                                <input placeholder="52 32 897" v-model="customerData.phoneNumber" type="tel">
                            </span>
                        </label>
                    </div>
                </b-col>
                <b-col>
                    <div class="customer-data__field customer-data__field__email">
                        <label class="d-flex align-items-center">
                            <span class="input__icon">
                                <b-icon icon="envelope"></b-icon>
                            </span>
                            <span class="input__field">
                                <input placeholder="you@gmail.com" v-model="customerData.email" type="email">
                            </span>
                        </label>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div class="customer-data__edited" v-else key="2">
            <div class="customer-data__edited__name">
                {{customerData.fullName}}
            </div>
            <div class="customer-data__edited__info">
                <div class="wrapper">
                    <b-row class="justify-content-center">
                        <b-col md="auto" sm="12">
                            <div class="info__cell">
                                <b-icon icon="person"></b-icon>
                                <span class="info__cell__data">3949494949</span>
                            </div>
                        </b-col>
                        <b-col md="auto" sm="12">
                            <div class="info__cell">
                                <b-icon icon="telephone"></b-icon>
                                <span class="info__cell__data">{{customerData.phoneNumber}}</span>
                            </div>
                        </b-col>
                        <b-col md="auto" sm="12">
                            <div class="info__cell">
                                <b-icon icon="envelope"></b-icon>
                                <span class="info__cell__data">{{customerData.email}}</span>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
        </Transition>
        <div class="customer-data__submit-button">
            <ButtonArrow color="purple" v-if="editing" @button-click="checkFields" />
            <ButtonArrow icon="pen" color="purple" v-else @button-click="editing = !editing" />
        </div>
    </div>
</template>

<script>
import ButtonArrow from './ButtonArrow'
import { emailValidation, phoneNumberValidation, personalCodeValidation } from '../utils/validation'

export default {
    name: 'CustomerData',
    components: {
        ButtonArrow
    },
    props: {

    },
    data() {
        return {
            editing: true,
            errors: [],
            customerData: {
                fullName: '',
                personalCode: '',
                phoneNumber: '',
                email: ''
            },
            errorMessages: {
                'email-error': 'Incorrect email',
                'phone-error': 'Incorrect phone number',
                'id-error': 'Incorrect ID number',
                'name-error': 'Name cant be blank'
            }
        }
    },
    methods: {
        checkFields() {
            this.errors = [];
            let { fullName,email,personalCode,phoneNumber } = this.customerData;

            //Name validation
            if( !(fullName.length > 0) ) {
                this.errors.push('name-error');
            }

            //ID validatoin
            if( !personalCodeValidation(personalCode) ) {
                this.errors.push('id-error');
            }

            //Phone validatoin
            if( !phoneNumberValidation(phoneNumber) ) {
                this.errors.push('phone-error');
            }
            
            //Email validation
            if( !emailValidation(email) ) {
                this.errors.push('email-error');
            }



            if( this.errors.length === 0 ) {
                this.editing = !this.editing;
            }

        }
    }
}
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-up-enter {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
