<template>
  <div id="app">
    <b-container>
      <Logo />
      <LoanCalculator />
      <CustomerData />
      <PersonalData />
      <PepFields />
      <Beneficiary />
      <NonPep />
      <ProceedForm />
      <Modals />

    </b-container>
  </div>
</template>

sr

<script>
import './assets/main.scss'
import Logo from './components/Logo.vue'
import LoanCalculator from './components/LoanCalculator.vue'
import CustomerData from './components/CustomerData.vue'
import PersonalData from './components/PersonalData.vue'
import ProceedForm from './components/ProceedForm.vue'
import PepFields from './components/PepFields.vue'
import Beneficiary from './components/Beneficiary.vue'
import NonPep from './components/NonPep.vue'
import Modals from './components/Modals.vue'

export default {
  name: 'App',
  components: {
    Logo,
    LoanCalculator,
    CustomerData,
    PersonalData,
    ProceedForm,
    Modals,
    PepFields,
    Beneficiary,
    NonPep
  },
  data() {
    return {
      loanData: {},
      contactData: {},
      personalInfo: {}
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
</style>