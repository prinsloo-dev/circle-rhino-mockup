function addRow() {
    var table = document.getElementById("table2").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = '<input type="text" class="txtinput" style="width:100%" name="customer" value=""/>';
    cell2.innerHTML = '<input type="text" class="txtinput" style="width:100%" name="customer" value=""/>';
    cell3.innerHTML = ' <a href="#" onclick="deleteRow(this)"><button type="button" class="btn btn-secondary float-start" style="color: rgb(0, 0, 0); width: 30%;"><img src="../style/icons/trash.svg" /></button></a>';
  }

  function deleteRow(button) {
    var row = button.closest('tr');
    row.parentNode.removeChild(row);
  }


    
