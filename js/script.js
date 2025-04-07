
// Create and configure an iframe to display the U-M Student Life map
const iframe = document.createElement("iframe");
iframe.src = "https://maps.studentlife.umich.edu/";
iframe.width = "100%";
iframe.height = "600";
iframe.style.border = "0";
iframe.loading = "lazy";

// Add the iframe to the element with ID 'map-container'
document.getElementById("map-container").appendChild(iframe);
