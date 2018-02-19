	
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

