let imagesObjects = [
    {name: "circle", color: "red"},
    {name: "star", color: "yellow"},
    {name: "pentagon", color: "coffee color"},
    {name: "rectangle", color: "blue"},
    {name: "triangle", color: "green"}
];

function findObject() {
    let userInput = document.getElementById("property").value.toLowerCase();

    for (let i = 0; i < imagesObjects.length; i++) {
        let obj = imagesObjects[i];
        let img = document.images[i];
        img.style.border = "0px solid white"; // Reset border

        if (userInput === obj.color || userInput === obj.name) {
            img.style.border = "3px solid red";
        }
    }
}
