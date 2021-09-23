// navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});
// typing
let line = document.getElementById("slogan");
let txts = [
  " Kaos?",
  " Kemeja?",
  " Celana Pendek?",
  " Celana Panjang?",
  " Sepatu?",
];
let speed = 100;
async function typewriter(txt) {
  for (let i = 0; i < txt.length; i++) {
    line.innerHTML += txt[i];
    await delay(speed);
  }
}
async function reverseTypewriter(txt) {
  for (let i = txt.length; i > 0; i--) {
    line.innerHTML = line.innerHTML.slice(0, -1);
    await delay(speed);
  }
}
async function writeLoop() {
  for (let i = 0; i < txts.length; i++) {
    await typewriter(txts[i]);
    await delay(1000);
    await reverseTypewriter(txts[i]);
    await delay(10);
  }
  writeLoop();
}
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
writeLoop();

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -6.951654705590663, lng: 106.81169046448932 },
  });
  const tourStops = [
    [{ lat: -6.281326431391206, lng: 106.84495258914144 }, "Boynton Pass"],
    [{ lat: -6.284992073877069, lng: 106.81169046448932 }, "Airport Mesa"],
    [
      { lat: -6.436615370790317, lng: 107.04123993129323 },
      "Chapel of the Holy Cross",
    ],
    [{ lat: -6.951654705590663, lng: 107.62979782542475 }, "Red Rock Crossing"],
    [{ lat: -6.6464975955159495, lng: 106.84580774157455 }, "Bell Rock"],
  ];

  const infoWindow = new google.maps.InfoWindow();

  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
