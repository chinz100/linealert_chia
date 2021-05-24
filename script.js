const { ipcRenderer , shell  } = require("electron");
const notification = document.getElementById("notification");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart-button");

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

ipcRenderer.on("update_available", () => {
  ipcRenderer.removeAllListeners("update_available");
  message.innerText = "มีการอัพเดทใหม่ กำลังดาวโหลด...";
  notification.classList.remove("hidden");
});
ipcRenderer.on("update_downloaded", () => {
  ipcRenderer.removeAllListeners("update_downloaded");
  message.innerText =
    "มีการอัพเดทเวอร์ชั่นใหม่. ต้องการ Restart โปรแกรมเพื่อใช้งานเวอร์ชั่นล่าสุด หรือไม่";
  restartButton.classList.remove("hidden");
  notification.classList.remove("hidden");
});


var myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36");
myHeaders.append("origin", "https://www.chiaexplorer.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("referer", "https://www.chiaexplorer.com/");
myHeaders.append("accept-language", "en-US");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
setInterval(() => {
    fetch("https://api2.chiaexplorer.com/farmerRank/xch1uzln977dczxv2vsf80uuwunlytwvvsfdcfxce2n5cc4r8qjczsssr9mj58", requestOptions)
  .then(response => response.text())
  .then(result => {
      ipcRenderer.send("chiadata" , result);
      document.getElementById("res_xch").innerHTML = (new Date() + " : " + result);

})
  .catch(error => {
    document.getElementById("res_xch").innerHTML = (new Date() + " : " + error);
  });
}, 100000);

setInterval(() => {
  fetch("https://api2.chiaexplorer.com/farmerRank/xch1xnz9h62yr5slsmsfv9twkvfxpkcys8hyxuzdhrxghy3x7g3hd6usds302p", requestOptions)
.then(response => response.text())
.then(result => {
    ipcRenderer.send("chia_pook" , result);
    document.getElementById("res_pook").innerHTML = (new Date() + " : " + result);

})
.catch(error => {
  document.getElementById("res_pook").innerHTML = (new Date() + " : " + error);
});
}, 130000);

setInterval(() => {
  fetch("https://api2.chiaexplorer.com/farmerRank/xch192wyegvrv3t78wrna728krhqxuklr25qarktlyht09gm3cnffnhslhdksa", requestOptions)
.then(response => response.text())
.then(result => {
    ipcRenderer.send("chia_zang" , result);
    document.getElementById("res_zang").innerHTML = (new Date() + " : " + result);

})
.catch(error => {
  document.getElementById("res_zang").innerHTML = (new Date() + " : " + error);
});
}, 120000);
