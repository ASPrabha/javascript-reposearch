var tbl = document.getElementById('repoTable');
// var table_data = tbl.getElementsByClassName('repoName');
var table_data = tbl.getElementsByTagName('td');
var len = table_data.length;
var headElements = tbl.getElementsByTagName('th');
var regEx = new RegExp('https:\/\/github.com\/*');



function searchRepo(){
	let repo = document.getElementById('repoSearch').value;
	let count = Number(document.getElementById('countItem').value);
	let result = [];
	document.getElementById('repo-feedback').innerHTML = '';
	document.getElementById('count-feedback').innerHTML = '';
	let flag = false;

	if(repo != "" && count !=0 && regEx.test(repo)){

		result.push(repo);
		for (var i = 0; i < len;i = i+7) {
			if(table_data[i].innerHTML == repo){
				result.push(table_data[i+count].innerHTML);
				flag = true;
				break;
			}
		}
		if(flag){

			var table = document.getElementById('ans-table');
			if(table.getElementsByTagName("thead")[0]){
				table.removeChild(table.getElementsByTagName("thead")[0]);
			}
			if(table.getElementsByTagName("tbody")[0]){
				table.removeChild(table.getElementsByTagName("tbody")[0]);
			}

			var thead = document.createElement("thead");
			var hrow = document.createElement("tr");

			var cell = document.createElement("th");
			var cellText = document.createTextNode(headElements[0].innerHTML);
			cell.appendChild(cellText);
			hrow.appendChild(cell)

			var cell = document.createElement("th");
			var cellText = document.createTextNode(headElements[count].innerHTML);
			cell.appendChild(cellText);
			hrow.appendChild(cell);

			thead.appendChild(hrow);
			table.appendChild(thead);

			var thead = document.createElement("tbody");
			var hrow = document.createElement("tr");

			var cell = document.createElement("td");
			var cellText = document.createTextNode(result[0]);
			cell.appendChild(cellText);
			hrow.appendChild(cell)

			var cell = document.createElement("td");
			var cellText = document.createTextNode(result[1]);
			cell.appendChild(cellText);
			hrow.appendChild(cell);

			thead.appendChild(hrow);
			table.appendChild(thead);
		}
		else{
			document.getElementById('repo-feedback').innerHTML = 'Git hub URL do not match available Repos';
		}
	}else if (repo === "" || !regEx.test(repo)){
		if(repo === ""){
			document.getElementById('repo-feedback').innerHTML = 'Please enter the Git hub URL';
		}
		else if(!regEx.test(repo)){
			document.getElementById('repo-feedback').innerHTML = 'Please enter a VALID Git hub URL(eg: https://github.com/....)';
		}

		if(count === 0){
			document.getElementById('count-feedback').innerHTML = 'Please select the count-item';
		}

		else{
			document.getElementById('count-feedback').innerHTML = '';
		}

	}else if(count === 0){
		document.getElementById('repo-feedback').innerHTML = '';
		document.getElementById('count-feedback').innerHTML = 'Please select the count-item';
	}

}