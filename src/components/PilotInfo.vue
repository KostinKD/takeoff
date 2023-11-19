<template>
  <p>Insert your Simbrief ID:</p>
  <input v-model="PilotID">
  <button @click="getLastFP">Get last FP</button>

  <p>FMC</p>
  <Button icon="pi pi-check" aria-label="Submit" />
<!--  <FMC></FMC>-->
</template>


<script setup lang="ts">

import { ref } from "vue";
import axios from "axios";
import FMC from "@/components/FMC.vue";


const PilotID = ref(705716)
const FlightPlan = ref({})

async function getLastFP(){
  const res = await axios.get(`https://www.simbrief.com/api/xml.fetcher.php?userid=${PilotID.value}&json=1`)
  FlightPlan.value = res.data
  console.log('FP',FlightPlan.value);
}

</script>

<style scoped>

</style>