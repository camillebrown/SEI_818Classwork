console.log("shape clicker js file is connected");

const shapes = [
    "triangle",
    "circle",
    "square",
    "triangle-down",
    "octagon",
    "heart",
  ];

let count = 0
const change = (event) => {
    if (count < shapes.length-1) {
        count ++;
      } else {
        count = 0;
      }
      event.target.classList.remove(event.target.classList);
      event.target.classList.add(shapes[count]);
};



document.addEventListener("DOMContentLoaded", () => {
    const triangles = document.querySelectorAll(".triangle");
    for (let i = 0; i < triangles.length; i++) {
      console.log(triangles[i]);
      triangles[i].addEventListener("click", change);
    }
});
