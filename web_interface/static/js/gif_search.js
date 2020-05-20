//Contains the basic script for the UI of a search bar
var entryField = document.getElementById("input_field");
var outputDisplay = document.getElementById("results");
var search_url = 'http://127.0.0.1:5000/query';
var search_term = "";

$(document).ready(function () {
    $("#input_field").keydown(function(e) {
			if(e.keyCode == 13){
				SearchGIFs();
        entryField.value = ''
			}
    });
});

function SearchGIFs()
{
  var query = entryField.value;
  var send_data = JSON.stringify({id: 1, search: query})
  console.log(send_data);

  $.ajax(
    {
      type: 'POST',
      url: search_url,
      data: send_data,
      dataType: 'json',
      success : UpdateDisplay
    });
}

function UpdateDisplay(results)
{
  search_term = results;
  outputDisplay.innerText = "Suggestions: " + results.result1;
}