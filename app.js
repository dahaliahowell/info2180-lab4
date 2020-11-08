window.onload = function() {

    var searchBtn = document.querySelector('button');
    var httpRequest;
  
    searchBtn.addEventListener('click', function(element) {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
  
      var url = "http://localhost:8888/info2180-lab4/superheroes.php";
      httpRequest.onreadystatechange = sendAlert;
      httpRequest.open('GET', url);
      httpRequest.send();
    });
  
    function sendAlert() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          alert(response)
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  
  };