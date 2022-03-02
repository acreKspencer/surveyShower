<template>
 
  <h1>Current Time: {{timeMs}}</h1>


</template>

<script>
import { globalState } from './globalState.js'
import { functionBin } from './functionBin.js';
import {ref} from 'vue';

export default {
  setup() {
  const { timeMs, userData } = globalState()

  const { testFunc, lastShownValueCalc, currentTime, calculateShow } = functionBin();

  

  //Current Time in milliseconds
  //
  let msTimeMain = currentTime();
  console.log(`The current time in milliseconds is ${msTimeMain}ms`);
  

  //Calculates the ms value of x days ago for testing 
  //
  let daysAgoInMs = lastShownValueCalc(91);
  let daysAgo = Math.ceil(((msTimeMain-daysAgoInMs) / 1000) / 86400);
  console.log(`last time the survey was shown was ${daysAgoInMs}ms or ${daysAgo} days`);


  // User data would act as global state and update
  //
  userData.lastShown = daysAgo
  console.log(userData);

  userData.quarterlySurveyDone= calculateShow();


   
  // surveySwitch = true will run survey | surevySwitch = false will pass it over
  
  const surveySwitch = ref(userData.quarterlySurveyDone);

  console.log(`Survey will show? : ${surveySwitch.value}`);
  


    const toggleShow = () =>{
      console.log(userData.willShow.value)
      userData.willShow.value= !userData.willShow.value;
    }


    return {
     userData, toggleShow, timeMs
    }
  }
}
</script>

<style>
* {
  font-size: 40px;
}

button {
  margin: 5px;
}
</style>