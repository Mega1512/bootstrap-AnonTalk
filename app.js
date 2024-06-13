document.addEventListener('DOMContentLoaded', (event) => {
    const downloadBtn = document.getElementById('download-btn');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const getStartedBtns = document.querySelectorAll('.get-started-btn');
  
    downloadBtn.addEventListener('click', () => {
      alert('Thank you for choosing to download AnonTalk!');
    });
  
    learnMoreBtn.addEventListener('click', () => {
      document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    });
  
    getStartedBtns.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Thank you for getting started with AnonTalk!');
      });
    });
  });
  