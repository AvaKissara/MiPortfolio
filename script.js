/*  ======================= SCROLLING SECTIONS ======================= */
$('a[href*=#]:not([href=#])').click(function() 
{
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


/*  ======================= H1 EFFECT ======================= */
var spanText = function spanText(text) 
{
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
}

var headline = document.querySelector("h1");

spanText(headline);

let animations = document.querySelectorAll('.animation');

animations.forEach(animation => 
{
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
        letter.style.animationDelay = (i * 0.1) + 's';
    })
})




/*  ======================= PANELS ======================= */
var panels = document.querySelectorAll('.panel');
console.log(panels);

function toggleOpen() 
{
  this.classList.toggle('open');
  console.log(this);
}

function toggleActive(e) 
{
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


