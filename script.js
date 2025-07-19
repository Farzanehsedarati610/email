function sendEmail() {
  const input = document.getElementById("msgInput").value;
  const log = document.getElementById("inboxLog");

  const message = {
    from: "you@sony-dadc.com",
    to: "hr-team@symbolic-routing.net",
    text: input,
    time: new Date().toLocaleString()
  };

  let saved = JSON.parse(localStorage.getItem("symbolicInbox") || "[]");
  saved.push(message);
  localStorage.setItem("symbolicInbox", JSON.stringify(saved));

  log.textContent += `\n✅ Sent to ${message.to}:\n${message.text} [${message.time}]\n`;
}

