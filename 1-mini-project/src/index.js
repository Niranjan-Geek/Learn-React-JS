import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let img = {
  backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-c8460d38f0f05c98a0bc016e289204da.jpg')"
};


let currentDate = new Date();
currentDate = currentDate.getHours();

let message = "";

let head_color = {};

if(currentDate >= 1 && currentDate < 12){
  message = "Good Morning";
  img = {
    backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-c8460d38f0f05c98a0bc016e289204da.jpg')"
  };
  head_color.color = "yellow";
}else if(currentDate >= 12 && currentDate < 16){
  message = "Good Afternoon";
  img = {
    backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/70/640/930/red-rose-in-macro-shot-wallpaper-90e4ebfe6054c7448aa7ca60911f926b.jpg')"
  };
  head_color.color = "red";
}else if(currentDate >= 16 && currentDate < 20){
  message = "Good Evening";
  img = {
    backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/846/616/937/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-d8e6eda8d0302c38e0fc217e7832048a.jpg')"
  };
  head_color.color = "orange";
}else{
  message = "Good Night";
  img = {
    backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-39a028ad21facdab26a7d87fb061260d.jpg')"
  };
  head_color.color = "white";
}

ReactDOM.render(
  <>
    <div className="main back-img" style={img}>
      <div className="box">
        <h1>Hello! Niranjan <span style={head_color}>{message}</span></h1>
      </div>
    </div>
  </>, document.getElementById("root")
);