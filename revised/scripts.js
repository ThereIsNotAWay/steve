const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting)
      {
          entry.target.classList.add('show');
      }
      else 
      {
          entry.target.classList.remove('show');
      }
  });
}, {
  // rootMargin: "-55px",
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
const hiddenElementsBottom = document.querySelectorAll('.hidden-popup');
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el)); 
hiddenElementsBottom.forEach((el) => observer.observe(el));


let votes = Math.floor(Math.random() * 1000000 + 1);
let slideshowIndex = 0;
setTimeout(updateVotes, 1000, 0);
randomVote(Math.floor(Math.random() * 1000 + 1000), 1);
slideshow(0);

function updateVotes (value) {
  votes += value;
  document.getElementById('vote-counter').innerHTML = "Votes: " + votes;
}

function randomVote (iterations, current) {
  let random = Math.floor((Math.random() * 100) + 1);
  let number = (random < 50) ? Math.floor(Math.random() * -1000) : Math.floor(Math.random() * 1000);
  setTimeout(updateVotes, 1500*current, number)
  if (current < iterations) {
    current++;
    randomVote(iterations, current);
  }
}

function targetPage (location) {
  if (location == "statistics") {
    window.location.href = "../legacy/statistics.html";
  }
}

function slideshow (val) {
  slideshowImages = document.getElementsByClassName('slideshow-container');
  slideshowIndex += val;
  let i  = 0;
  for (i = 0; i < slideshowImages.length; i++) {
    slideshowImages[i].style.display = "none";
  }
  if (slideshowIndex < 0) {
    slideshowIndex = slideshowImages.length - 1;
  }
  else if (slideshowIndex > slideshowImages.length-1) {
    slideshowIndex = 0;
  }
  slideshowImages[slideshowIndex].style.display = "block";
}

function showNavLinks (status) {
  const navBox = document.getElementById('nav-screen');
  navBox.style.display = status;
}
