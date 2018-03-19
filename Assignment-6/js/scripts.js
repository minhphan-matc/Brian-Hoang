var messages = [];

function Message(type, user, text){
  this.type = type;
  this.user = user;
  this.text = text;
}

function addMessage(event){
  var user, type, className;
  var messageInput = document.getElementById("message-input");
  var messagesContainerEl = document.getElementById("message-container");

  switch (event.target.id) {
    case "send-button":
      user = "Brian";
      type = "out";
      className = "out-message";
      break;
    case "reply-button":
      user = "Joe";
      type = "in";
      className = "in-message";
      break;
    default:
      user = "unknown";
      type = "error";
      className = "error-message";
  }
  if(messageInput.value != ""){
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var messageText = document.createTextNode(message.text);
    var messageEl = document.createElement("div");
    messageEl.appendChild(messageText);
    messageEl.className = className;

    messagesContainerEl.appendChild(messageEl);

    messageInput.value = "";
  }
  console.log(type);
}

var init = function(){
  //wire event handlers
  document.getElementById("send-button").onclick = addMessage;
  document.getElementById("reply-button").onclick = addMessage;
}

init();
