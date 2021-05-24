"use strict";
const path = require("path");
const axios = require("axios");
const qs = require("qs");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const {
  app,
  Menu,
  BrowserWindow,
  ipcMain,
  dialog,
  session,
  shell,
} = require("electron");
var Subbroswer, mainWindow;

const popupwindowlogin = async () => {

  mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
    {
      urls: ["https://chiaexplorer.com/*"],
    },
    (details, callback) => {
      const newRequestHeaders = Object.assign(
        {},
        details.requestHeaders || {},
        {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0",
        }
      );
      callback({ requestHeaders: newRequestHeaders });
    }
  );

  mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
    {
      urls: ["https://chiaexplorer.com/*"],
    },
    (details, callback) => {
      const newRequestHeaders = Object.assign(
        {},
        details.requestHeaders || {},
        {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0",
        }
      );
      callback({ requestHeaders: newRequestHeaders });
    }
  );

  mainWindow.loadURL(
    "https://www.chiaexplorer.com/blockchain/address/xch1uzln977dczxv2vsf80uuwunlytwvvsfdcfxce2n5cc4r8qjczsssr9mj58",
    {
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
    }
  );
  
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
};


async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: app.getName(),
    width: 500,
    height: 440,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      "web-security": true,
      plugins: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });


  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});


ipcMain.on("chiadata",async (event, arg) => {

  let data = JSON.parse(arg);
  if(data.rank > 0){
    let temp = qs.stringify({
      'message': JSON.stringify(data)
      });

    let config = {
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: { 
      'authorization': 'Bearer kat3zKdyjMb7GTbqOIvvTYi84H5fjOMs8Gq5cgHjoeU', 
      'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : temp
      };
      
    await  axios(config)
  }else{ 
    console.log(data.rank);
  }

});

ipcMain.on("chia_pook",async (event, arg) => {

  let data = JSON.parse(arg);
  if(data.rank > 0){
    let temp = qs.stringify({
      'message': "มีคนถูกหวย."
      });

    let config = {
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: { 
      'authorization': 'Bearer LabKOebkmzYDc54EyA58tQ9ETLfvx3h0epI1AUPTEkz', 
      'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : temp
      };
      
    await  axios(config)
  }else{ 
    console.log(data.rank);
  }

});


ipcMain.on("chia_zang",async (event, arg) => {

  let data = JSON.parse(arg);
  if(data.rank > 0){
    let temp = qs.stringify({
      'message': "มีคนถูกหวย"
      });

    let config = {
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: { 
      'authorization': 'Bearer LabKOebkmzYDc54EyA58tQ9ETLfvx3h0epI1AUPTEkz', 
      'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : temp
      };
      
    await  axios(config)
  }else{ 
    console.log(data.rank);
  }
});

