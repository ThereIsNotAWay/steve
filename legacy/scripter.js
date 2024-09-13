let votes = 0;

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
    rootMargin: "-55px",
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el)); 

/*
function funny ()
{
    var responses = ["it worked", "ok stop it now", "i think it worked", "you should stop this now!"]
    var random = Math.floor(Math.random() * responses.length);

    document.getElementById("button1").innerHTML = responses[random];
} */

function targetPage (location)
{
    if (location == "vote")
    {
        window.location.href = "voting_clicker.html";
    }
    else if (location == "statistics") {
        window.location.href = "statistics.html";
    }
}

function indexChange (value)
{
    slideShow(slideShowIndex += value);
}



let slideShowIndex = 1;
slideShow(slideShowIndex);

function slideShow (currentIndex)
{
    let i = 0;
    let images = document.getElementsByClassName('slideshowImage');

    if (currentIndex > images.length) {
        slideShowIndex = 1;
    }
    else if (currentIndex < 1) {
        slideShowIndex = images.length;
    }

    //document.getElementById('button1').innerHTML = images.length;
    for (i = 0; i < images.length; i++)
    {
        images[i].style.display = "none";
    }
    images[slideShowIndex-1].style.display = "block";
}


function updateVotes (value) {
    if (document.getElementById('down_vote').style.display == "none")
    {
        document.getElementById('down-vote').style.display = "block";
    }
    votes += (value);
    document.getElementById('vote-counter').innerHTML = "Votes: " + votes;
}




