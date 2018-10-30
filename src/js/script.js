//function to send email of project query
function sendMail(){
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  if(name === "" || email === "" || message === "")
  alert("Input field cannot be empty!");
  
  else{

  var user = {
  "person_name": name,
  "person_message": message,
  "person_email":email
  };

  $.ajax({
        url: 'http://vevsabooks.com:7001/books-auth/technology_email',
        type:'POST',
        data: user ,
        dataType : "json",
        success: function (response) {
            $( "header#desktop #discuss" ).removeClass( "clicked" );
            window.location = "";
            
        },
        error: function () {
           alert("Checkout Your Internet Connection!");
        }
    });
}
}

$( "header#desktop #discuss > p" ).click(function() {
  $( "header#desktop #discuss" ).addClass( "clicked" );
});

$( "button#discuss" ).click(function() {
  $( "header#desktop #discuss" ).addClass( "clicked" );
  $( "header#mobile #discuss" ).addClass( "clicked" ).click();
});

$( "header#desktop #discuss span.close" ).click(function() {
  $( "header#desktop #discuss" ).removeClass( "clicked" );
});

$( "header#mobile #discuss > p" ).click(function() {
  $( "header#mobile #discuss" ).addClass( "clicked" );
});

$( "header#mobile #discuss span.close" ).click(function() {
  $( "header#mobile #discuss" ).removeClass( "clicked" );
});

$( "header#mobile .nav-trigger" ).click(function() {
  $( "header#mobile .main_navigation" ).toggleClass( "open" );
  $( this ).toggleClass( "cross" );
});

// if (screen.width < 619) {
//   $("#particles-js").removeAttr('id');
// }

$("header#mobile #discuss").click(function() {
  if ($("header#mobile #discuss").hasClass("clicked")) {
    $( "header#mobile .nav-trigger .icon" ).css("display","none");
  }
  else {
    $( "header#mobile .nav-trigger .icon" ).css("display","block");
  }
});


var loader = document.getElementById("loaderwrapper");

window.addEventListener('load', function(){
    loader.style.display = 'none';
})



$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 1000) {
    $( ".logo" ).html( "<img src='src/img/logoblue.png'>" );
  }
  else {
    $( ".logo" ).html( "<img src='src/img/logo.png'>" );
  }
}); 
$( ".logo" ).html( "<img src='src/img/logo.png'>" );

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "top",
      "random": true,
      "straight": true,
      "speed": 1,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



$('#parallax').parallax({
	invertX: true,
	invertY: true,
	scalarX: 10,
	 frictionY: .1
});

// READ MORE
var readmore = {
  
  baseAttribute: 'readmore',
  settings: {
    grouping: 'elem',
    countby: 'p',
    label: 'read more',
    limit: 1,
    hiddenClass: 'readmore-hidden',
    method: 'slide', //supports fade and class methods.
    suffix: '...'
  },
  
	ready: function() {
    var _self = this;
    $('[data-' + this.baseAttribute + ']').each(function(){
    	  _self.setup_readmore(this)
    });
  },
  
  setup_readmore: function(object) {
    var $readmore = $(object);
    var options = $(object).data(this.baseAttribute + '-options');
    var settings = this.setup_settings(object, options);
    var limit = settings.limit;
    var current = 0;
    var hidden = document.createElement('div');
    hidden.className = 'readmore-hidden';
    var showHidden = document.createElement('span');
    showHidden.className = 'readmore-show';
    showHidden.innerHTML = settings.label;
    var suffix = document.createElement('span');
    suffix.className = 'readmore-suffix';
    suffix.innerHTML = settings.suffix;
    
    switch(settings.grouping) {
      case 'elem':
        $readmore.children().each(function() {
          if (current > limit) {
            $(this).appendTo(hidden);
          }
          
          if ($(this).is(settings.countby) || settings.countby === 'all') {
          	current++;  
          }
        });
        break;
      case 'word':
        var children = $readmore.children();
        if (children.length > 0) {
          // a problem for another day
        }
        else {
          var content = $readmore.text();
     			var words = content.split(' ');
          if (words.length > settings.limit) {
            var before = words.slice(0, parseInt(settings.limit) + 1).join(" "),
              	after = words.slice(parseInt(settings.limit) + 1, words.length).join(" ");  
          	$readmore.text(before);
            $(hidden).append(after);
          }
        }
    		break;
    }

    switch (settings.method) {
      case 'fade':
      case 'slide':
         $(hidden).hide();
        break;
    }
    $(showHidden).click(function() {
      switch (settings.method) {
        case 'class':
          $readmore.toggleClass('readmore-state-hide');
          break;
        case 'fade':
          $(hidden).fadeToggle();
          $(suffix).fadeToggle();
          break;
        case 'slide':
          $(hidden).slideToggle();
          $(suffix).fadeToggle();
          break;
      }
    });
    
    if (settings.grouping == 'word') {
      $readmore.append(suffix);
    }
    
    $readmore.append(hidden);
    $readmore.append(showHidden);
  
  },
  
  setup_settings: function(object, overrides) {
    var newSettings = this.settings,
        _self = this;
    if (typeof overrides === 'object'){
    	$.extend(newSettings, overrides);  
    }
    $.each(this.settings, function(index, value) {
      var setting = _self.getSetting(index, object);
      newSettings[setting] = (setting) ? setting : value;
    });
    return newSettings;
  },
  
  getSetting: function(settingName, baseElem) {
    return $(baseElem).data(this.baseAttribute + '-' + settingName);
  }
  
  
  
}

readmore.ready();