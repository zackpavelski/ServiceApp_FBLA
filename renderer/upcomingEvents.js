//all upcoming Events
'use strict'

const path = require('path')
const fs = require('fs').promises
const electron = require('electron')
const { app, ipcMain } = require('electron')

const Window = require('./Window')
const DataStore = require('./DataStore')
loopGetCell = function(){
  getCell(2,1);
    //row, column
    //var addText = "<li>" + "Location: " getCell(i,1) + "<br>" + "Date: " + getCell(i,2)+ "</li>";

    //document.getElementById('tableDiv').innerHTML += addText;
    //$('#results').prepend(addText);
    //Col1 = location
    //Column 2 is Date
    //Col 3 is time
    //Col4 = max_people


  
}

getCell = function(row, column){
    var api = 'https://spreadsheets.google.com/feeds/cells/';
	var spreadsheet = '120birSSsCH3cb69VM5wPcQht-QCWFtMpE82uJoZvMZY'
    var worksheet =   'defualt';
    var row =         row.toString();
    var col =         column.toString();
    var url = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row+'C'+col+'?alt=json';
    $.getJSON(url)
		.done(function(data){
        	console.log(data)
        	if(data.entry){
				$('#results').prepend(data.entry.title['$t']+': '+data.entry.content['$t']+' <br />');
            }else{
                $('#results').prepend('Failed to fetch data <br />');
            }
        })
    	.fail(function(){
        	$('#results').prepend('Failed to fetch data <br />');
    	});
}



/*
getCell = function(row, column){
    var api = 'https://spreadsheets.google.com/feeds/cells/';
	  var spreadsheet = '120birSSsCH3cb69VM5wPcQht-QCWFtMpE82uJoZvMZY';
    var worksheet =   'default';
    var checkVar = true;
    var x = row.toString();
    var y = column.toString();

    var url = api+spreadsheet+'/'+worksheet+'/public/basic/R'+x+'C'+y+'?alt=json';
    $.getJSON(url)
		.done(function(data){
        	console.log(data)
        	if(data.entry){
            return data.entry.content['$t'];
				$('#results').prepend(data.entry.title['$t']+': '+data.entry.content['$t']+' <br />');
            }else{
                //$('#results').prepend('Failed to fetch data <br />');
            }
        })
    	.fail(function(){
        	//$('#results').prepend('Failed to fetch data <br />');
    	});

}*/
