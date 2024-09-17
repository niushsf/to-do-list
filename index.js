var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  createButtons(myNodelist[i]);
}

// Function to create "Delete" and "Finished" buttons
function createButtons(li) {
  var closeBtn = document.createElement("BUTTON");
  closeBtn.className = "close";
  closeBtn.innerHTML = "Delete";
  li.appendChild(closeBtn);

  var finishedBtn = document.createElement("BUTTON");
  finishedBtn.className = "finished-btn";
  finishedBtn.innerHTML = "Finished";
  li.appendChild(finishedBtn);

  closeBtn.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };

  finishedBtn.onclick = function() {
    var div = this.parentElement;
    div.classList.toggle('checked');
  };
}

// Create a new list item when clicking on the "+" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    createButtons(li); // Add buttons to the new list item
  }
  document.getElementById("myInput").value = "";
}