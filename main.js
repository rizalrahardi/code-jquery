// tag selector
$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });

// id selector
$(document).ready(function(){
    $("button").click(function(){
      $("#test").hide();
    });
  });

// id class
$(document).ready(function(){
    $("button").click(function(){
      $(".test").hide();
    });
  });

//   jQuery event
// click event
$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

// event mouse enter
$(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("You entered p1!");
    });
  });

//   event focus & blur
$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });

// jQuery effects
// hide/show
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

// hide
$(document).ready(function(){
    $("button").click(function(){
      $("p").hide(1000);
    });
  });

// toggle
$(document).ready(function(){
    $("button").click(function(){
      $("p").toggle();
    });
  });

// slide down
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });

// slide up
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideUp("slow");
    });
  });

//   jQuery HTML
//  GET
$(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
  });

//   SET
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
      $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
      $("#test3").val("Dolly Duck");
    });
  });