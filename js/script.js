
const iframe = document.createElement("iframe");
iframe.src = "https://maps.studentlife.umich.edu/";
iframe.width = "100%";
iframe.height = "600";
iframe.style.border = "0";
iframe.loading = "lazy";

document.getElementById("map-container").appendChild(iframe);
