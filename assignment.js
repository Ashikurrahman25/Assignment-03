
//Github Link - 


//First Problem - Convert kilometers in meters.
function kilometerToMeter(kilometerToConvert){
    
    //Check if the input is correct as for our function to work properly.     
    if(kilometerToConvert < 0) return "Negative value is not convertable. Please check and ener a positive value";

    var convertedValue;

    convertedValue = kilometerToConvert * 1000;
    return convertedValue;
}






//Second Problem - Calculate budget for buying electronics
function budgetCalculator(watchToBuy, phoneToBuy, laptopToBuy){
    
    //Check if the input is correct as for our function to work properly.
    if(watchToBuy < 0 || phoneToBuy < 0|| laptopToBuy <0) return "Buy amount can't be negative. Check your input.";

    var watchPrice = 50;
    var photonPrice = 100;
    var laptopPrice = 500;

    var budgetNeeded;
    budgetNeeded  = (watchToBuy * watchPrice) + (phoneToBuy*photonPrice) + (laptopToBuy * laptopPrice);
    return budgetNeeded;
}






//Third Problem - Calculate hotel cost for staying certain days
function hotelCost(stayDuration){

    //Check if the input is correct as for our function to work properly.
    if(stayDuration <= 0) return "Stay duration can't be 0 or lower than 0";

    var totalStayCost;

    //Caculation if stay duration is less or euqal to 10
    if(stayDuration <= 10){
        totalStayCost = stayDuration * 100;
        return totalStayCost;
    } 

    //Calculation if stay duration is less or equal to 20
    else if(stayDuration <= 20){

        var firstTenDaysStayCost = 10 * 100;
        var remainingDays = stayDuration - 10;
        var offerStayCost = remainingDays * 80;

        totalStayCost = firstTenDaysStayCost + offerStayCost;
        return totalStayCost;
    }
    
    //Calculation if stay duration is more than 20
    else {

        var tenDaysStayCost = 10 * 100;
        var twentyDaysStayCost  = 10 * 80;
        var remainingDays = stayDuration - 20;
        var remainingDaysCost = remainingDays * 50;

        totalStayCost = tenDaysStayCost + twentyDaysStayCost + remainingDaysCost;
        return totalStayCost;
    }
}






//Fourth Problem - Find the biggest friend name
function megaFriend(friendsName){

    var megaFriendIndex = 0;

    //Check if the input is correct as for our function to work properly.
    if(friendsName.length == 0) return "Your array is empty. Please put your friends name in the array";
    else if(typeof(friendsName[megaFriendIndex]) != "string") return "Array must contain names of your friends in string format"; 

    for (let i = 1; i < friendsName.length; i++) {
       
        if(friendsName[i].length > friendsName[megaFriendIndex].length){
            megaFriendIndex = i;
        }
    }

    return friendsName[megaFriendIndex];
}