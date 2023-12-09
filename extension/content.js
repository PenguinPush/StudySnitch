let overlayDiv;

const imageSources = [
    "https://media.discordapp.net/attachments/1175233374265299057/1183157313654247484/IMG_4066.png?ex=6587501d&is=6574db1d&hm=da0ff425a1e2422cfde3d374b3a50ff6c553a27091f4784852d1cee0b0c7bd77&=&format=webp&quality=lossless&width=1194&height=921",
    "https://media.discordapp.net/attachments/1175233374265299057/1183159092458557522/IMG_4070.png?ex=658751c5&is=6574dcc5&hm=6539b4c9862bb7806378de52c6ae81c7594d6112261dc542995b56cc9fd614d1&=&format=webp&quality=lossless&width=1215&height=921",
    "https://media.discordapp.net/attachments/1175233374265299057/1183161058299482142/IMG_4072.jpg?ex=6587539a&is=6574de9a&hm=cbd28472c07315b2d6f66242c6c414210772fb2517fc438b678c5502da2cb388&=&format=webp&width=1380&height=921",
    "https://media.discordapp.net/attachments/1175233374265299057/1183164198470037625/IMG_4076.png?ex=65875687&is=6574e187&hm=f27fc913f7309250243e562f8438f9748078d66027d8b7fece51f60e2b7985db&=&format=webp&quality=lossless&width=1476&height=921",
    "https://katu.com/resources/media2/16x9/full/1015/center/80/69b9b8ad-e24c-485b-b3c9-3ca8f4ecb300-large16x9_nuclearprepare.PNG",
    "https://media.discordapp.net/attachments/1175233374265299057/1183173737743405117/IMG_4078.webp?ex=65875f69&is=6574ea69&hm=61b250576e1aa9e3b05181a1789f94da0d9b017b6bd0a79787b9c1f3d4ff97b0&=&format=webp&width=828&height=645",
    "https://www.ontariouniversitiesinfo.ca/assets/files/images/2.jpg",
    "https://media.discordapp.net/attachments/1175233374265299057/1183175338193330327/IMG_4083.png?ex=658760e6&is=6574ebe6&hm=f8c590caf2cd0c1eb4bb1af19d32de6bbba6db8849039680524a55baadc7a3f6&=&format=webp&quality=lossless&width=1170&height=921",
    "https://media.discordapp.net/attachments/1175233374265299057/1183176857412178041/IMG_4089.png?ex=65876251&is=6574ed51&hm=f9d3add45d8b265d4b2870cf1ea53a6de2aafcb7b5c7aa1006d5610f69a888af&=&format=webp&quality=lossless&width=1251&height=921"
  ];

  const allowedSites = [
    "https://www.instagram.com",
    "https://discord.com",
    "https://www.youtube.com/watch?v=CtpdMkKvB6U",
    "https://www.youtube.com/watch?v=Na34j-ZKBu0",
    "https://www.coolmathgames.com",
    "https://www.tiktok.com",
    "https://www.twitter.com"
  ];

const currentSite = window.location.href;
if (allowedSites.some(site => currentSite.startsWith(site))) {

    const randomImageIndex = Math.floor(Math.random() * imageSources.length);

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

    document.body.style.overflow = "hidden";

    const imageElement = document.createElement("img");
    imageElement.src = imageSources[randomImageIndex];
    imageElement.style.width = "80%";
    imageElement.style.height = "60%";
    imageElement.style.opacity = "0";
    imageElement.style.transition = "opacity 1s";

    overlayDiv.appendChild(imageElement);

    document.body.appendChild(overlayDiv);

    setTimeout(() => {
    imageElement.style.opacity = "0.7";
    }, 100);

}