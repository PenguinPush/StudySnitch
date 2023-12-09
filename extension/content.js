let isBlocked = false;
let overlayDiv;

const imageSources = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * imageSources.length);3.

overlayDiv = document.createElement("div");
overlayDiv.style.position = "fixed";
overlayDiv.style.top = "0";
overlayDiv.style.left = "0";
overlayDiv.style.width = "100%";
overlayDiv.style.height = "100%";
overlayDiv.style.background = "rgba(0, 0, 0, 0.7)";
overlayDiv.style.color = "white";
overlayDiv.style.display = "flex";
overlayDiv.style.alignItems = "center";
overlayDiv.style.justifyContent = "center";
overlayDiv.style.zIndex = "9999";
document.body.appendChild(overlayDiv);

console.log("site blocked")

chrome.runtime.sendMessage({ action: "blockSite" });
