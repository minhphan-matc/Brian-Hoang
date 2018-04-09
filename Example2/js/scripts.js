var titleTip = "Character Limit: ";
var titleMax = "Max limit reached!";
var showToolTip = false;

//utility functions
function get(element) {
  return document.getElementById(element);
}

function showPosition(event) {
  var screenX = get("screenX"),
    screenY = get("screenY"),
    pageX = get("pageX"),
    pageY = get("pageY"),
    clientX = get("clientX"),
    clientY = get("clientY"),
    tooltip = get("tooltip");

  screenX.textContent = event.screenX;
  screenY.textContent = event.screenY;
  pageX.textContent = event.pageX;
  pageY.textContent = event.pageY;
  clientX.textContent = event.clientX;
  clientY.textContent = event.clientY;

  if (showToolTip) {
    tooltip.style.left = event.clientX + 10 + "px";
    tooltip.style.top = event.clientY + -20 + "px";
  }
}

function showModal(event) {
  var modal = get("modal-dialog");
  var backdrop = get("modal-backdrop");

  modal.classList.add("visible");
  backdrop.classList.add("visible");
}
function closeModal(event){
  var title = get("edit-title-text");
  var text = get("edit-context-text");
  var modal = get("modal-dialog");
  var backdrop = get("modal-backdrop");
  title.value = "";
  text.value = "";
  modal.classList.remove("visible");
  backdrop.classList.remove("visible");
}

window.addEventListener("mousemove", showPosition);

window.addEventListener("load", function() {
  var tooltipChk = get("show-tooltip");
  var newButton = get("new-button");
  var cancelButton = get("cancel-button");
  newButton.addEventListener("click", showModal);
  cancelButton.addEventListener("click", closeModal);
  
  tooltipChk.addEventListener("change", function() {
    var tooltip = get("tooltip");
    if (this.checked) {
      showToolTip = true;
      tooltip.classList.add("visible");
    } else {
      showToolTip = false;
      tooltip.classList.remove("visible");
    }
  })
})
