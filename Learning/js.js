// when doc is ready, do this function
$(document).ready(function () {
  $("html").append(
    "<body>\
          <div id='container'>\
                  <div id='inner'>\
                      <h1>Basic jQuery</h1>\
                      <p id='1'>Paragraph 1</p>\
                      <p id='2'>Paragraph 2</p>\
                      <p id='3'>Paragraph 3</p>\
                  </div>\
              </div>\
              <br><br>\
      </body>"
  );
  $("#2").css({ color: "red" });
  $("#3").css({ cursor: "pointer", width: "100px" });
  $("#3").click(function () {
    $("h1").fadeOut("slow");
  });
  $("body").append("");
  //-------------------------------clicking on class(all buttons wit this class)

  $("button.alert").on("click", function () {
    console.log('Button, with class "alert" was clicked ');
  });
  //-------------------------------few actions after click
  var yes = function () {
    console.log("yes");
  };
  var no = function () {
    console.log("no");
  };
  var color = function () {
    $("#onOff").css({ color: "purple" });
  };
  var color1 = function () {
    $("#onOff").css({ color: "black" });
  };
  $("#onOff")
    .on("click", yes)
    .on("click", no)
    .on("mouseover", color)
    .on("mouseleave", color1);
  $("#onOff").off("click", no); // turn off the teared events listener

  //----------------------------- run only once
  $("#firstClick").one("click", yourFirstClickHere);
  function yourFirstClickHere() {
    console.log("First Click here!");
    $(this).click(function () {
      console.log("Not a first click!");
    });
  }
});
//-------------------------- slowly hide and show again

function slowlyHide() {
  $("#effectImg").hide(1000).show("fast");
}
function slide() {
  $("#effectImg").slideUp(800).toggle("slow");
}
