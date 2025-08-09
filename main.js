

const blessingRepo = document.getElementById('blessingrepo');
  const repoBox = document.getElementById('repobox');
  const closeBox = document.getElementById('close-box');

  if (blessingRepo && repoBox && closeBox) {
    blessingRepo.addEventListener('click', () => {
      repoBox.style.display = 'block';
    });

    closeBox.addEventListener('click', () => {
      repoBox.style.display = 'none';
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  














