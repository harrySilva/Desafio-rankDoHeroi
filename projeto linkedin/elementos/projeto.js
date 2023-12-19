function showConfirmationScreen() {
    document.querySelector('.proposal-screen').style.display = 'none';
    document.querySelector('.confirmation-screen').style.display = 'block';
  }
  
  function showCongratulationsScreen() {
    document.querySelector('.confirmation-screen').style.display = 'none';
    document.querySelector('.congratulations-screen').style.display = 'block';
  }
  
  function goBack() {
    document.querySelector('.confirmation-screen').style.display = 'none';
    document.querySelector('.proposal-screen').style.display = 'block';
  }
  