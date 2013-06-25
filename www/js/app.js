var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





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
  // getFBInfo();
});


