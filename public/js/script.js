function shownavbar(){

  var x = document.getElementById('navbar');

    if (x.style.display == "block") {
      x.style.display = "none";
    }
    else  {
      x.style.display = "block";
    }
  }

function loadpics(){
  var x = document.getElementsByClassName('playlistimage');
  for (var i = 0; i < x.length; i++) {
    var y = x[i].id;
    x[i].style.backgroundImage = "url(images/Playlists/"+y+".jpg)";
  }
  var header = document.getElementById('homepage');
  header.style.backgroundImage = "url(images/table.jpg)";
}
