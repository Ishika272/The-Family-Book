var reasons = [
    "My Sister",
    "Myself",
    "My Dad",
    "My Mom",
  ];
  
  var images = [
    "Pic1.jpeg",
    "Pic2.jpeg",
    "Pic3.jpg",
    "Pic4.jpg"
  ];

  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
}
   