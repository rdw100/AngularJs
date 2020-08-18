(function(){
    var app = angular.module('loanCalculator',[]);
    
    app.controller('CalculatorController',['$scope',function($scope){
        $scope.year_options = [5,10,15,30];        
        $scope.current_amount = 10000;
        $scope.current_rate = 3.92;
        $scope.current_years = 30;
        $scope.current_payment = 1000;
   
        $scope.sendForm = function () {
            $scope.msg = "Form Validated";
        };

        $scope.openLoan = function(event, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.className += " active";
        }

        $scope.init = function() {
            document.getElementById("defaultOpen").click();
        }

        $scope.round = function (number)
        {
            return new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD',
              }).format(number);
        }

        $scope.calculate = function()
        {
            if (
                 (!isNaN($scope.current_amount) && $scope.current_amount > 0) &&
                 (!isNaN($scope.current_rate) && $scope.current_rate > 0) &&
                 (!isNaN($scope.current_years) && $scope.current_years > 0) &&
                 (!isNaN($scope.current_payment) && $scope.current_payment > 0)
            )
            { 
                var term = $scope.current_years * 12;
                var rate = ($scope.current_rate / 12) / 100;
                var factor = rate + ( rate / (Math.pow(rate + 1, term) - 1));
                var monthPay = $scope.current_amount * factor;
                var monthLoan = (monthPay) * term;
                var monthInterest = (monthLoan) - $scope.current_amount;
                var affordLoan = ($scope.current_payment * (1 - Math.pow((1 + rate), -term))) / (rate);
                var affordPay = $scope.current_payment * term;                
                var affordInterest = affordPay - affordLoan;

                $scope.totalMonthPay = $scope.round(monthPay);
                $scope.totalMonthLoan = $scope.round(monthLoan);
                $scope.totalMonthInterest = $scope.round(monthInterest);             
                $scope.totalAffordLoan = $scope.round(affordLoan);
                $scope.totalAffordPay = $scope.round(affordPay);
                $scope.totalAffordInterest = $scope.round(affordInterest);
            }
        }

        $scope.calculate();
    }]);
})();
