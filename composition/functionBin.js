export function functionBin(){

    var testFunc = async function(){
        console.log('hello!')
    }


    function lastShownValueCalc(daysPassed){
        let timeTemp = new Date();
        let msTime = timeTemp.getTime();
        return  (msTime - (daysPassed * 86400000));
    };

    function currentTime(){
        let timeTemp2 = new Date();
        let msTime2 = timeTemp2.getTime();
        return msTime2;
    }

    function calculateShow(){
        let oneInFour = Math.floor((Math.random() * (4) ) + 1)
        if( oneInFour=== 4 ){ return true } 
        return false
    }
    return{
        testFunc,
        lastShownValueCalc,
        currentTime,
        calculateShow
    }
}


//module.exports.PrintNearestStore = async function PrintNearestStore(session, lat, lon) {
