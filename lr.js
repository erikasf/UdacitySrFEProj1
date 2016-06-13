


function validateEmail(email){
  'use strict';
	var re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(email)){
		document.getElementById('email').style.background = "#ccffcc";
		document.getElementById('emailError').style.display = "none";
		return true;
	} else{
		document.getelementById('email').style.background = "#e35152";
		return false;
			}
		
	};

function validatePassword(password){
	var password = document.getElementById('password').value;
	if(password != " "){
		document.getElementById('passwordError').style.display = "block";
		error++;
	} else if (password.length != 5){
		document.getElementById('passwordLengthError').style.display = "block";
		}

	}
	 var relocate = function(){
		var pass = document.getElementById('password').value;
 	if((pass != " ") || (pass >= 5)){
			//change to the events page
		}
	};
	var selected_index = -1; //Index of the selected list item

	var regClients= localStorage.getItem("regClients");//Retrieve the stored data
regClients = JSON.parse(regClients); //Converts string to object

	if(regClients == null) //If there is no data, initialize an empty array
		regClients = [];
	function Add(){
		var client = JSON.stringify({
			email: $("#email").val(),
			pass    : $("#password").val(),
			// Contact : $("#phoneContact").val(),
			// Title  : $("#txtTitle").val(),
			// TandD : $("#txtTandD").val(),
			// Start : $("#txtStart").val(),
			// End : $("#txtEnd").val(),
			// Location : $("#txtLocation").val(),
			// Guest : $("#txtGuest").val()
		});

		regClients.push(client);
		localStorage.setItem("regClients", JSON.stringify(regClients));
		alert("email and password were saved.");
		return true;
	}