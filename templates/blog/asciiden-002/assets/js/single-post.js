let a = document.querySelectorAll("h2");
let b = document.getElementById("list-example");
let d = [];

for (let i = 0; i < a.length; i++) {
  a[i].id = ('list-item-' + i);

  let c = document.createElement("a");
  c.classList.add('list-group-item');
  c.classList.add('list-group-item-action');
  c.innerHTML = a[i].innerHTML;
  c.href = "#" + a[i].id;

  d[i] = c;

  b.appendChild(d[i]);
}











function socialShare() {

  let title = document.querySelector('h1');

  document.querySelector(".shareFacebook").href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
  document.querySelector(".shareTwitter").href = "https://twitter.com/intent/tweet?text=Check%20out%20this%20fine%20post%20from%20that%20one%20famous%20blogger%20-%20@asciiden%3A%0A%0a" + window.location.host + window.location.pathname;
  document.querySelector(".shareLinkedin").href = "https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.host + window.location.pathname + "&title=" + title.innerHTML + "&summary=" + "Check%20out%20this%20fine%20post%20from%20that%20one%20famous%20blogger%20-%20asciiden&source=" + window.location.host + window.location.pathname;


  document.querySelector(".shareLink").addEventListener('click', function() {
    navigator.clipboard.writeText(window.location.href);
  });
}

socialShare();



if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}