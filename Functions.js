var income;
var monthlySpending;
var currency = "USD";
function makeWord(){
	var word = document.getElementById("word");
	word.style.display = "block";
}
function getIncome(){
	var incomeInput = document.getElementById("userIncome").value;
	income = incomeInput
	console.log(incomeInput);
}
function getCurrencyType(){
	//currency = $('#moneyDropdown').val($(this).html());
	//console.log($('#moneyDropdown').val($(this).text()));

	console.log(currency);
}
