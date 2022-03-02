import { ref, reactive, computed, watch, watchEffect } from 'vue';

export function  globalState() {


  //Gets current time in milliseconds
  const timeMs = computed(() => {
    let timeTemp = new Date();
    return timeTemp.getTime()
  });



  //Temp value to test various numbers of days
  const lastShownVal = computed(()=>{
      return  timeMs - (91 * 86400000)
  });




  const userData = {
    lastShown: lastShownVal.value,
    quarterlySurveyDone: false
  }

  // 7776000000ms = 90 days or 1 quarter
  if((timeMs - userData.lastShown) >= 7776000000){
    userData.quarterlySurveyDone = false
  }
  
  if(!userData.quarterlySurveyDone){
    if(Math.random() * 100 > .75){
      console.log((Math.random * 100))
    }



  }





  return {
    userData,
    timeMs,
    lastShownVal
  }
}