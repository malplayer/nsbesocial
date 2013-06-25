

var getFBInfo = function()
{
    //11200257/?fields=name,picture.type(normal)
    var url = '/search/?q=nsbe&type=post';

    var content = $("#socialContent");
    var htmlstr="<ul>";
    FB.api(url, function(response) {
        var data = response.data;
        var len = data.length;
        for(var i = 0;i<len;i++)
        {
            htmlstr+="<li>"
            htmlstr+="<dt>Name:</dt>";
            htmlstr+="<dd>"+data[i].from.name+"</dd>";
            htmlstr+="<dt>Picture:</dt>";
            htmlstr+="<dd><img src='"+data[i].picture+"'/></dd>";
            htmlstr+="<dt>Message:</dt>";
            htmlstr+="<dd>"+data[i].message+"</dd>";
            htmlstr+="</li>";
        }
        htmlstr+="</ul>";
        content.html(htmlstr);

    });

}


$( document ).on( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
});

$(document).on('pageinit', "#home", function (event) {
   getFBInfo();
});


