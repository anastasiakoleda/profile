var currencies = ["EUR", "GBP", "USD"]
var rates = {}

function getRates(callback) {
    $.ajax({
        url: 'http://data.fixer.io/api/latest?access_key=62dc1ae246f706fc7cc02843a3b1ee63',
        dataType: 'jsonp',
        success: function(json) {
            rates.GBP = json.rates.GBP
            rates.USD = json.rates.USD
            callback()
        }
    })
}

function showApp() {
    $("#loading").hide()
    $("#app").removeClass("d-none")
}

function changeFrom () {
    $("#to").html('<option value="">To</option>')
    $("#result").hide()
    $("#converted").text("")

    var selected = $("#from").val()

    if (selected) {
        var newArray = currencies.slice() 
        var index = newArray.indexOf(selected) 
        newArray.splice(index, 1) 

       
        for (var i = 0; i < newArray.length; i++) {
            var _currency =newArray[i]
            var html = '<option value="'+_currency+'">'+_currency+'</option>'
            $("#to").append(html)
        }
    }
}

function ConvertAmount(from, to, amount) {
  if (from === to) return amount
  else if (from === "EUR") return amount * rates[to]
  else if (to === "EUR") return amount / rates[from]
  else return amount / rates[from] * rates[to]
}

function FloorTwoDigits(input) {
  return Math.floor(input * 100) / 100
}

function StartConversion() {
    var from = $("#from").val()
    var to = $("#to").val()
    var amount = $("#amount").val()

    if (!from || !to) return

    var converted = FloorTwoDigits(ConvertAmount(from, to, amount))
    $("#converted").text(converted)
    $("#result").removeClass("d-none").show()
}

$("#from").on("change", changeFrom)
$("#to").on("change", StartConversion)
$("#amount").on("input", StartConversion)

$(document).ready(getRates(showApp))
