// show page when loaded 
window.onload = function() {
    $(".loading").css({display: "none"});
    $(".consent").css({display: "block"});
    $(".buttonHolder").css({display: "block"});
    
  };
  
  $("input").on("input", function () {
      let $this = $(this);
      if ($this.val().length >= parseInt($this.attr("maxlength"), 10)) {
          let nextEmpty = $this.nextAll("input[value=''], input:not([value])")[0];
          if (nextEmpty) {
              nextEmpty.focus();
          }
      }
  });


// $("input.go").click(function(){
//     $.getScript("main.js");
//   });
