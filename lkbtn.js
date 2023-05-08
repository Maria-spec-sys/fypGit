const likeBtn = document.getElementById("like-btn");
likeBtn.addEventListener("click", function() {
  const thumbIcon = likeBtn.querySelector("i");
  if (thumbIcon.classList.contains("fas")) {
    thumbIcon.classList.remove("fas");
    thumbIcon.classList.add("far");
    thumbIcon.style.color = "gray";
  } else {
    thumbIcon.classList.remove("far");
    thumbIcon.classList.add("fas");
    thumbIcon.style.color = "black";
  }
});