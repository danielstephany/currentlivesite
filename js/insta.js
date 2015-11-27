var gallery =  document.getElementById("instaGallery");
var nextUrl = "access token goes here";

var ajax = function(next) {
  previous = next;
  $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: next,
      success: function(data) {        
        for(var i = 0; i < data.data.length; i++) {
          for(var p = 0; p < data.data[i].tags.length; p++) { 
            if(data.data[i].tags[p].toLowerCase() === "yoga") {
              var toHtml = "<a href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url + "'></a>";
              var list = document.createElement("li");
              list.className = "content";
              list.innerHTML = toHtml;
              gallery.appendChild(list)
            }
          } //second for loop
        } //first for loop
        nextUrl = data.pagination.next_url;
      } //success function
    });
};

$("document").ready(ajax(nextUrl));

$("#next").click(function() {
  ajax(nextUrl);
});











