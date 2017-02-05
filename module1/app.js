
(function () {
'use strict';
angular.module('LunchCheck', [])
 .controller('LunchCheckController',LunchCheckController);
 LunchCheckController.$inject=['$scope'];
 function LunchCheckController($scope) {
   $scope.itemlist ="";
   $scope.msg = "";
   $scope.displaymsg = function () {
     var string = splitString($scope.itemlist);
     $scope.msg = string;
   };

  function splitString(stringToSplit) {
  var arrayOfStrings = stringToSplit.split(',');
  if((arrayOfStrings.length<=3)&&(arrayOfStrings.length>1)){
    var msg1="Enjoy!";
    return msg1;
  }
  else if (arrayOfStrings.length>3) {
    var msg2="Too much!";
    return msg2;
  }
  else if(arrayOfStrings.length==1){
    var msg3="Please enter data first";
    return msg3;
  }

}

}
})();
