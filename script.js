const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", panelHover));

function panelHover() {
  this.classList.toggle("active");
  panels.forEach((panel) => {
    if (panel.classList[2] == "active" && this != panel) {
      panel.classList.toggle("active");
    }
  });
}
