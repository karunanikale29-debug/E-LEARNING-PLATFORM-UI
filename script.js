let progress = localStorage.getItem("progress") || 0;

function updateProgress() {
  progress = 100;
  localStorage.setItem("progress", progress);
  alert("Course Completed");
}

window.onload = function () {
  let fill = document.getElementById("progress-fill");
  let text = document.getElementById("progress-text");

  if (fill && text) {
    fill.style.width = progress + "%";
    text.innerText = progress + "% Completed";
  }
};
