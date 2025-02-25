import "./styles.css";

//document.addEventListener("DOMContentLoaded", () => {
const formArea = document.getElementById("formArea");

// Handle drag events
document.querySelectorAll(".form-element").forEach((element) => {
  element.addEventListener("dragstart", handleDragStart);
});

formArea.addEventListener("dragover", handleDragOver);
formArea.addEventListener("drop", handleDrop);

// Start dragging
function handleDragStart(event) {
  const type = event.target.getAttribute("data-type");
  event.dataTransfer.setData("text/plain", type);
  console.log("Dragging over form area"); // Debugging log
}

// Allow dropping
function handleDragOver(event) {
  event.preventDefault();
  console.log("Dropping over form area"); // Debugging log
}

// Drop element into form area
function handleDrop(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData("text/plain");
  const newElement = createElement(type);
  if (newElement) formArea.appendChild(newElement);
}

// Create elements dynamically based on type
function createElement(type) {
  let element;
  switch (type) {
    case "text":
      element = document.createElement("input");
      element.type = "text";
      element.placeholder = "Enter text";
      element.className = "form-item";
      break;
    case "checkbox":
      element = document.createElement("div");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-item";
      element.appendChild(checkbox);
      element.appendChild(document.createTextNode("Checkbox"));
      break;
    case "button":
      element = document.createElement("button");
      element.textContent = "Submit";
      element.className = "form-item";
      break;
    default:
      return null;
  }
  element.draggable = true;
  element.className = "form-item";
  return element;
}

// Set up event listeners for form elements and form area
function initializeDragAndDrop() {
  document.querySelectorAll(".form-element").forEach((element) => {
    element.addEventListener("dragstart", handleDragStart);
  });

  formArea.addEventListener("dragover", handleDragOver);
  formArea.addEventListener("drop", handleDrop);
}

// Call the initialization function immediately
initializeDragAndDrop();
//});
