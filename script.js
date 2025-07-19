function sendMessage() {
  const input = document.getElementById("compose").value;
  const message = {
    from: "you@sony-dadc.com",
    to: "hr-team@symbolic-routing.net",
    text: input,
    time: new Date().toLocaleString()
  };

  // Save to Outbox
  let sent = JSON.parse(localStorage.getItem("sentEmails") || "[]");
  sent.push(message);
  localStorage.setItem("sentEmails", JSON.stringify(sent));

  updateSentUI();
  document.getElementById("compose").value = "";
}

// Inbox loading logic (simulated via localStorage)
function loadInbox() {
  let inbox = JSON.parse(localStorage.getItem("inboxEmails") || "[]");
  const inboxList = document.getElementById("inboxList");
  inboxList.innerHTML = "";
  inbox.forEach(msg => {
    let item = document.createElement("li");
    item.innerText = `From: ${msg.from} | ${msg.text} [${msg.time}]`;
    inboxList.appendChild(item);
  });
}

// Sent messages UI
function updateSentUI() {
  let sent = JSON.parse(localStorage.getItem("sentEmails") || "[]");
  const sentList = document.getElementById("sentList");
  sentList.innerHTML = "";
  sent.forEach(msg => {
    let item = document.createElement("li");
    item.innerText = `To: ${msg.to} | ${msg.text} [${msg.time}]`;
    sentList.appendChild(item);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadInbox();
  updateSentUI();
});

