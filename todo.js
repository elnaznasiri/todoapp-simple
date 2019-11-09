
function AddItem() {
    var text = document.getElementById("idea").value;
    var previousText = document.getElementById("list").innerHTML;
    var newText = "<li>" + text + "</li>";
    var result = previousText + newText;
    if (text != "") {
        document.getElementById("list").innerHTML = result
        document.getElementById("idea").value = ""
    }
}

function DeleteItem() {
         document.getElementById("list").innerHTML = '';
     }

   