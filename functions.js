

$(function()
{
  'use strict';

	$('input[name="daterange"]').daterangepicker();
	
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data

	tbClients = JSON.parse(tbClients); //Converts string to object

	if(tbClients == null) //If there is no data, initialize an empty array
		tbClients = [];

	function Add(){
		var client = JSON.stringify({
			Type	: $("#dlType").val(),
			Host    : $("#txtHost").val(),
			Contact : $("#phoneContact").val(),
			Title  : $("#txtTitle").val(),
			TandD : $("#txtTandD").val(),
			Start : $("#txtStart").val(),
			End : $("#txtEnd").val(),
			Location : $("#txtLocation").val(),
			Guest : $("#txtGuest").val()
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was saved.");
		return true;
	}

	function Edit(){
		tbClients[selected_index] = JSON.stringify({
				Type  : $("#dlType").val(),
				Host  : $("#txtHost").val(),
				Contact : $("#phoneContact").val(),
				Title : $("#txtTitle").val(),
				TandD : $("#txtTandD").val(),
				Start : $("#txtStart").val(),
				End   : $("#txtEnd").val(),
				Location : $("#txtLocation").val(),
				Guest : $("#txtGuest").val()

			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Client deleted.");
		location.reload();
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<thead>"+
			"	<tr>"+
			"	<th></th>"+
			"	<th>Type</th>"+
			"	<th>Host</th>"+
			"	<th>Contact Number</th>"+
			"	<th>Title</th>"+
			"	<th>Date Range</th>"+
			"	<th>Event Start Time</th>"+
			"	<th>Event End Time</th>"+
			"	<th>Location</th>"+
			"	<th>Guest</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);
		for(var i in tbClients){
			var cli = JSON.parse(tbClients[i]);
		  	$("#tblList tbody").append("<tr>"+
									 	 "	<td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/>&nbsp;&nbsp;<img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" + 
										 "	<td>"+cli.Type+"</td>"  + 
										 "	<td>"+cli.Host+"</td>"  + 
									     "	<td>"+cli.Contact+"</td>"  + 
										 "	<td>"+cli.Title+"</td>" + 
										 "	<td>"+cli.TandD+"</td>" + 
										 "	<td>"+cli.Start+"</td>" + 
										 "	<td>"+cli.End+"</td>" + 
										 "	<td>"+cli.Location+"</td>" + 
										 "	<td>"+cli.Guest+"</td>" + 
		  								 "</tr>");
		}
	}

	$("#frmCadastre").bind("submit",function(){		
		if(operation == "A")
			return Add();
		else
			return Edit();
	});

	List();

	$(".btnEdit").bind("click", function(){

		operation = "E";
		selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
		
		var cli = JSON.parse(tbClients[selected_index]);
		$("#dlType").val(cli.Type);
		$("#txtHost").val(cli.Host);
		$('#phoneContact').val(cli.Contact);
		$("#txtTitle").val(cli.Title);
		$("#txtTandD").val(cli.TandD);
		$("#txtStart").val(cli.Start);
		$("#txtEnd").val(cli.End);
		$("#txtLocation").val(cli.Location);
		$("#txtGuest").val(cli.Guest);
		
		$("#txtTitle").focus();
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		List();
	});
});