	
  
var repoVals = document.getElementById('repoSearch');
var i = 0;
var option = document.createElement("option");
var optionText = document.createTextNode("Select Repository");
option.setAttribute("value", "");
option.appendChild(optionText);
repoVals.appendChild(option);
for(var repo in repoDetails){
  var option = document.createElement("option");
  var optionText = document.createTextNode(repoDetails[repo].url);
  option.setAttribute("value", repoDetails[repo].url);
  option.appendChild(optionText);
  repoVals.appendChild(option);
}

var countVals = document.getElementById('countItem');
var j = 0;
for(var key in repoDetails[0]){
  if(j === 0){
    var option = document.createElement("option");
    var optionText = document.createTextNode("Select any count-item");
  }
  else{
    var option = document.createElement("option");
    var optionText = document.createTextNode(key);
  }
  option.setAttribute("value", j++);
  option.appendChild(optionText);
  countVals.appendChild(option);
}

  var tbl = document.getElementById('repoTable');
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < repoDetails.length; i++) {
      var row = document.createElement("tr");

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].url);
      cell.appendChild(cellText);
      row.appendChild(cell)

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].issue_count);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].branches);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].contributors);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].star);
      cell.appendChild(cellText);	
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].commit);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(repoDetails[i].watchers);
      cell.appendChild(cellText);
      row.appendChild(cell);
 
    tblBody.appendChild(row);
  }
 
  tbl.appendChild(tblBody);



