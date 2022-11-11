var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 50,
  height: 50,
});

function makeCode() {
  var elText = "Your Message Here";
  if (!elText) {
    alert("Input a text");
    elText.focus();
    return;
  }
  qrcode.makeCode(elText);
}

makeCode();
