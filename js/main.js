let socket = new WebSocket("wss://echo.websocket.org");

document.forms.publish.onsubmit = function() {
  let outgoingMessage = this.message.value;
  socket.send(outgoingMessage);
  this.message.value = "";
  return false;
};

socket.onmessage = function(event) {
  let message = event.data;
  let messageElem = document.createElement("div");
  messageElem.textContent = message;
  messageElem.classList.add("alert", "alert-success");
  document.getElementById("messages").append(messageElem);
};
