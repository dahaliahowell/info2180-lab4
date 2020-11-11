window.onload = function() {

    var searchBtn = document.getElementById("btn");
    var httpRequest;
  
    searchBtn.addEventListener('click', function(element) {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
      var name = document.querySelector('#name').value;
  
      var url = "http://localhost:8888/info2180-lab4/superheroes.php?query=" + name;
      httpRequest.onreadystatechange = sendAlert;
      httpRequest.open('POST', url);
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpRequest.send('name=' + encodeURIComponent(name));
    });
  
    function sendAlert() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          //alert(response)
          document.getElementById("result").innerHTML = response;
        } else {
          alert('There was a problem with the request.');
        }
      }
    }

    function displayContent() {

    }
  
};