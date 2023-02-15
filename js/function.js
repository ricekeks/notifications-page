var a = document.getElementById("MarkAllRead");
const elements = document.getElementsByClassName("unread");

a.addEventListener("click", function() {
	console.debug("Clicked");

	for (let i = 0; i < elements.length; i++) {
  	elements[i].classList.toggle("unread");
	}

  return false;
});
