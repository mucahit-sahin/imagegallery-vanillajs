const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("mouseover", panelHover));
panels.forEach((panel) => panel.addEventListener("mouseleave", panelHover));

function panelHover() {
  this.classList.toggle("active");
}
