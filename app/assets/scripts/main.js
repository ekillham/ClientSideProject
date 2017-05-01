$(document).ready(function(){
	getTasks();
	$('body').on('click', '.btn-delete', deleteAsset);
});
//$('#add_asset').on('submit', addAsset);
//$('body').on('click', '.btn-delete', deleteAsset);

function getTasks() {
	$.get('http://localhost:3001/app/assets', function(data) {
	let output = '<ul>';
	$.each(data, function(key, asset){
	output += '<tr>'
	output += '<td width="15%">'
	output += asset.name
	output += '</td>'
	output += '<td width="27">'
	output += asset.os
	output += '</td>'
	output += '<td width="12%">'
	output += asset.cpu
	output += '</td>'
	output += '<td width="12%">'
	output += asset.ram
	output += '</td>'
	output += '<td width="12%">'
	output += asset.type
	output += '</td>'
	output += '<td width="18%">'
	output += asset.rack+" "+'<button type="button" class="btn-delete" data-name-id="'+asset._id+'">Delete</button>'
	output += '</td>'
	output += '</tr>'
	});
	$('#assets').html(output);
	});
}

function addAsset(e) {
	var Name = $('#name').val();
	var OS = $('#os').val();
	var CPU = $('#cpu').val();
	var RAM = $('#ram').val();
	var Type = $('#type').val();
	var RACK = $('#rack').val();

	$.ajax({
	url: 'http://localhost:3001/app/assets',
	data: JSON.stringify({
	"name": name,
	"os": os,
	"cpu": cpu,
	"ram": ram,
	"type": type,
	"rack": rack
}),
	type: 'POST',
	contentType: 'application/json',
	success: function(data) {
		windows.location.href='../../view.html';

	},
	error: function(xhr, status, err) {
	console.log(err);
}
});
e.preventDefault();
}

function deleteAsset(){
	var name_id = $(this).data('name-id');
	$.ajax({
		url: 'http://localhost:3001/app/assets/'+name_id,
		type: 'DELETE',
		contentType: 'application/json',
		success: function(data){
			window.location.href='view.html';
		},
		error: function(xhr, status, err){
				console.log(err);
		}
	});
}
