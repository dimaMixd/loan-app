<template>
    <div class="loan-calc">
        <Transition mode="out-in" name="slide-up">
            <div v-if="editMode" key="1">
                <div class="loan-calc__fields">
                    <b-row>
                        <b-col sm="12" md="12" lg="4">
                            <div class="loan-calc__field loan-calc__field__amount">
                                <label class="d-flex">
                                    <span class="input__label">
                                        <span>Amount</span>
                                        <small v-if="messages.outOfrange">200 - 10 000 €</small>
                                        <small v-if="errors.outOfrange" class="error">Out of range</small>
                                    </span>
                                    <span class="input__field" :class="{ hasError: errors.outOfrange }">
                                        <div class="euro-sign">
                                            <span :style="{ 'transform' : `translateX(${euroOffset}px)` }">€</span>
                                        </div>
                                        <input @keyup="validateAmount" @blur="roundUpNumber" type="number" v-model="loanData.amount">
                                        <div class="dropdown">
                                            <InputDropdown @scroll-to="dropDownOpen" :currentValue="loanData.amount" dropDownRef="amount-dropdown" :amountDropdown="true" @dropdown-item-click="setAmount" :elements="amountDropDownList" />
                                        </div>
                                    </span>
                                </label>
                            </div>
                        </b-col>
                        <b-col sm="12" md="12" lg="4">
                            <div class="loan-calc__field loan-calc__field__duration d-flex">
                                <label class="input__label">
                                    <span>Duration</span>
                                    <!-- <input min="1" type="number" v-model="loanData.duration"> -->
                                </label>
                                <div class="duration-field" @click="openMonthDropdown">
                                    <span>{{loanData.duration}} months</span>
                                    <div class="dropdown">
                                        <InputDropdown @dropdown-item-click="setMonthValue"  :elements="monthsList" />
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col sm="12" md="12" lg="4">
                            <div class="loan-calc__total">
                                <div class="total-container">
                                    <span class="total-container__monthly-label">Monthly Payment</span>
                                    <span class="total-container__monthly-sum">{{monthlyPayment}}€</span>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="loan-calc__submit-button">
                        <ButtonArrow @button-click="checkFields" />
                    </div>
                </div>
            </div>
            <div v-else key="2">
                <div class="loan-calc__summary">
                    <span class="back-button" @click="editMode = true">
                        <b-icon icon="chevron-left"></b-icon>
                    </span>
                    <h3>Your loan application</h3>
                    <h4>{{loanData.amount}}€ / {{loanData.duration}} months</h4>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script>
import ButtonArrow from './ButtonArrow'
import InputDropdown from './InputDropdown'
import roundUp from '../utils/round-up'

export default {
    name: 'LoanCalculator',
    components: {
        ButtonArrow,
        InputDropdown
    },
    data() {
        return {
            editMode: true,
            loanData: {
                amount: 2500,
                duration: 12
            },
            errors: {
                counter: 0,
                outOfrange: false
            },
            messages: {
                outOfrange: false
            }
        }
    },
    methods: {
        roundUpNumber() {
            
            this.loanData.amount = roundUp(this.loanData.amount);
        },
        validateAmount() {
            let amount = this.loanData.amount;

            if( amount > 10000 ) {
                this.loanData.amount = 10000;
            }
            else if( amount < 0 ) {
                this.loanData.amount = 400;
            }
            
            if( amount === '') {
                this.messages.outOfrange = true
            } else {
                this.messages.outOfrange = false
            }
        },
        checkFields() {
            let amount = this.loanData.amount;

            //set error counter to 0 and increase in case of error
            this.errors.counter = 0;

            //clear all helper messages
            for(let prop in this.messages ) {
                this.messages[prop] = false;
            }

            if( amount === '' || amount < 200 || amount > 10000 ) {
                this.errors.counter++;
                this.errors.outOfrange = true;
            } else {
                this.errors.outOfrange = false;
                this.editMode = false;
            }
        },
        openMonthDropdown(e) {
            let el = document.querySelectorAll('.duration-field button')[0];

            el.click();
        },
        setAmount(val) {
            this.loanData.amount = val;
        },
        setMonthValue(val) {
            this.loanData.duration = val;
        },
        dropDownOpen() {
            let dropdown = document.querySelectorAll(`#amount-dropdown ul`)[0];
            // let offsetY = document.getElementById(`el-${this.currentValue}`).offsetTop;

            // console.log(this.currentValue);
            dropdown.scrollTop = 100;
            dropdown.scrollTop = 100;
            dropdown.scrollTop = 100;
            dropdown.scrollTop = 100;
            dropdown.scrollTop = 100;
            dropdown.scrollTop = 100;
        }
    },
    created() {
        
    },
    computed: {
        monthlyPayment() {
            const { amount, duration } = this.loanData;

            if( amount < 200 ) {
                return '- '
            }
            //Computed monthly payment value
            //Considering the interest is 20%
            return (amount/duration * 1.2).toFixed(2);
        },
        monthsList() {
            let arr = [];

            for(let i = 1; i < 37; i++) {
                let obj = {
                    id: Math.random(),
                    value: i
                }
                arr.push(obj);
            }

            return arr
        },
        amountDropDownList() {
            let latestAmount = this.loanData.amount;
            let list = [];

            
            for( let i = 0; i < 101; i++) {

                if( i*100 >= 200 ) {
                    let obj = {
                        id: i,
                        value: i*100
                    }

                    list.push(obj);
                }

            }

            return list
        },
        fullData() {
            //Construct data object for passing to parent
            let amount = this.amount;
            let duration = this.duration;
            let total = this.total;
            return {
                amount,
                duration,
                total
            }
        },
        euroOffset() {
            let amountLenth = this.loanData.amount.toString().length;

            return amountLenth * 4;
        }
    }
}
</script>