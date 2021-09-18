var income;
var monthlySpending;
var currency = "USD";
var totalBudget = 0;


var spendingType = {H = [Housing, 0], F = [Food/Drink, 0], T = [Transportation,0], Ed = [Education, 0], //dictionary of all spending types
	Sh = [Shopping, 0], B = [Bills/Utilities,0], En = [Entertainment,0], O =[Other,0], Sa = [Savings, 0] };  


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
function PutCurrency(){
	var paragraph = document.getElementById("currencyTag");
	var text = document.createTextNode(currency);
	paragraph.innerHTML = currency;
	console.log("here");

}
