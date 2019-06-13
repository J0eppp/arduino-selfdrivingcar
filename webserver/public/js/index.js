window.onload = function() {
  var picture = document.getElementsByTagName('img')[0];
  setInterval(function() {
    picture.src = "http://localhost:8080/images/picture.jpg?" + new Date().getTime();
  }, 500);
}
