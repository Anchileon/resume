function switchLanguage() {

    const switchElement = document.getElementById('languageSwitch');
    

    if (switchElement.checked) {
      window.location.href = 'espanol.html'; 
    } else {
      
      window.location.href = 'index.html'; 
    }
  }
  