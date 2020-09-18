const realFileBtn = document.getElementById("real-file");
const customeFileBtn = document.getElementById("custome-file");
const customeText = document.getElementById("custome-text");



customeFileBtn.addEventListener("click", function () {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
  if (realFileBtn.value) {
    customeText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    customeText.innerHTML = "No File Chosen, yet";
  }
});




const realFileBtnB = document.getElementById("real-fileB");
const customeFileBtnB = document.getElementById("custome-fileB");
const customeTextB = document.getElementById("custome-textB");

customeFileBtnB.addEventListener("click", function () {
  realFileBtnB.click();
});

realFileBtnB.addEventListener("change", function () {
  if (realFileBtnB.value) {
    customeTextB.innerHTML = realFileBtnB.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    customeTextB.innerHTML = "No File Chosen, yet";
  }
});
