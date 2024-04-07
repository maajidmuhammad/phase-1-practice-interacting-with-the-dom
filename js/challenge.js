document.addEventListener("DOMContentLoaded", function() {
    // Get necessary elements
    const counter = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
  
    let timer; // Variable to store setInterval reference
    let count = 0;
    let isPaused = false;
  
    // Function to update counter
    function updateCounter() {
      counter.textContent = count;
    }
  
    // Function to start the timer
    function startTimer() {
      timer = setInterval(function() {
        if (!isPaused) {
          count++;
          updateCounter();
        }
      }, 1000); // Update every second
    }
  
    // Start the timer initially
    startTimer();
  
    // Event listeners for plus, minus, heart, and pause buttons
    plusBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    minusBtn.addEventListener('click', function() {
      count--;
      updateCounter();
    });
  
    heartBtn.addEventListener('click', function() {
      const like = document.createElement('li');
      like.textContent = `${count} has been liked.`;
      likesList.appendChild(like);
    });
  
    pauseBtn.addEventListener('click', function() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(timer);
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heartBtn.disabled = true;
        pauseBtn.textContent = 'resume';
      } else {
        startTimer();
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heartBtn.disabled = false;
        pauseBtn.textContent = 'pause';
      }
    });
  
    // Event listener for submitting comments
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      const comment = commentInput.value;
      const commentItem = document.createElement('div');
      commentItem.textContent = comment;
      document.getElementById('list').appendChild(commentItem);
      commentInput.value = ''; // Clear input field after submission
    });
  });
  