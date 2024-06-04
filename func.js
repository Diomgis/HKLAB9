

let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;


      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; 

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };






    function submitKeyword(keyword) {
        fetch('/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: `textInput=${encodeURIComponent(keyword)}`
        })
        .then(response => response.text())
        .then(result => {
          console.log(result);
          
        })
        .catch(error => {
          console.error(error);
          
        });
      }


    function searchKeyword() {
      var keyword = document.getElementById("textInput").value.toLowerCase();
      var elements = document.getElementsByTagName("p");

      for (var i = 0; i < elements.length; i++) {
          var text = elements[i].textContent.toLowerCase();
          var match = text.indexOf(keyword);

          if (match !== -1) {
              var newText = elements[i].textContent.substr(0, match) + "<span style='background-color: #4b646e;'>" + elements[i].textContent.substr(match, keyword.length) + "</span>" + elements[i].textContent.substr(match + keyword.length);
              elements[i].innerHTML = newText;
          }
      }

      submitKeyword(keyword);
  }

  document.addEventListener('click', function(event) {
  var highlightedElements = document.querySelectorAll('span[style="background-color: #4b646e;"]');
  highlightedElements.forEach(function(element) {
      element.outerHTML = element.innerHTML;
  });
});






window.addEventListener('scroll', function () {
  var parallax = document.querySelectorAll('.parallax');
  for (var i = 0; i < parallax.length; i++) {
      var scrolled = window.pageYOffset;
      var parallaxOffset = parallax[i].offsetTop;
      var parallaxHeight = parallax[i].offsetHeight;
      var parallaxBg = parallax[i].querySelector('.parallax-background');

      parallaxBg.style.transform = 'translate3d(0,' + (scrolled - parallaxOffset) * 0.5 + 'px, 0)';
  }



  var parallax = document.querySelectorAll('.parallax2');
  for (var i = 0; i < parallax.length; i++) {
      var scrolled = window.pageYOffset;
      var parallaxOffset = parallax[i].offsetTop;
      var parallaxHeight = parallax[i].offsetHeight;
      var parallaxBg = parallax[i].querySelector('.parallax-background2');

      parallaxBg.style.transform = 'translate3d(0,' + (scrolled - parallaxOffset) * 0.5 + 'px, 0)';
  }

  var parallax = document.querySelectorAll('.parallax3');
  for (var i = 0; i < parallax.length; i++) {
      var scrolled = window.pageYOffset;
      var parallaxOffset = parallax[i].offsetTop;
      var parallaxHeight = parallax[i].offsetHeight;
      var parallaxBg = parallax[i].querySelector('.parallax-background3');

      parallaxBg.style.transform = 'translate3d(0,' + (scrolled - parallaxOffset) * 0.5 + 'px, 0)';
  }

  var parallax = document.querySelectorAll('.parallax4');
  for (var i = 0; i < parallax.length; i++) {
      var scrolled = window.pageYOffset;
      var parallaxOffset = parallax[i].offsetTop;
      var parallaxHeight = parallax[i].offsetHeight;
      var parallaxBg = parallax[i].querySelector('.parallax-background4');

      parallaxBg.style.transform = 'translate3d(0,' + (scrolled - parallaxOffset) * 0.5 + 'px, 0)';
  }

  var parallax = document.querySelectorAll('.parallaxf');
  for (var i = 0; i < parallax.length; i++) {
      var scrolled = window.pageYOffset;
      var parallaxOffset = parallax[i].offsetTop;
      var parallaxHeight = parallax[i].offsetHeight;
      var parallaxBg = parallax[i].querySelector('.parallax-backgroundf');

      parallaxBg.style.transform = 'translate3d(0,' + (scrolled - parallaxOffset) * 0.5 + 'px, 0)';
  }
  


  document.addEventListener('scroll', function() {
    var parallaxes = document.querySelectorAll('.parallaxR');
    for (var i = 0; i < parallaxes.length; i++) {
        var scrolled = window.pageYOffset;
        var parallaxOffset = parallaxes[i].offsetTop;
        var parallaxHeight = parallaxes[i].offsetHeight;
        var parallaxBg = parallaxes[i].querySelectorAll('.parallax-backgroundR');

        for (var j = 0; j < parallaxBg.length; j++) {
            var speed = 0.2 * (j + 1); 
            parallaxBg[j].style.transform = 'translate3d(0,' + (scrolled - parallaxOffset) * speed + 'px, 0)';
        }
    }

    

});





});

