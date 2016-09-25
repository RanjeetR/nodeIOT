

$(function(){

    $( "#btn1" ).on( "click", function () {
       var btn1 = $("#btn1").is(":checked");

        if(btn1) {
            var data = {};
            data.title = "btn1 start";
            data.message = "Start relay one";

            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                dataType:'jaonp',
                contentType: 'application/json',
                url: '/',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        } else {
            console.log("stop");
            var data = {};
            data.title = "btn1 stop";
            data.message = "stop relay one";

            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                dataType:'jaonp',
                contentType: 'application/json',
                url: '/',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        }

    } );
//for starting second lamp
    $( "#btn2" ).on( "click", function () {
        var btn1 = $("#btn2").is(":checked");

        if(btn1) {
            var data = {};
            data.title = "btn2 start";
            data.message = "Start relay two";

            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                dataType:'jaonp',
                contentType: 'application/json',
                url: '/',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        } else {
            console.log("stop");
            var data = {};
            data.title = "btn2 stop";
            data.message = "stop relay two";

            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                dataType:'jaonp',
                contentType: 'application/json',
                url: '/',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        }

    } );

    $( "#btn3" ).on( "click", function () {
        var btn1 = $("#btn3").is(":checked");

        if(btn1) {
            var data = {};
            data.title = "btn3 start";
            data.message = "Start relay three";

            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                dataType:'jaonp',
                contentType: 'application/json',
                url: '/',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        } else {
            console.log("stop");
            var data = {};
            data.title = "btn3 stop";
            data.message = "stop relay three";

            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                dataType:'jaonp',
                contentType: 'application/json',
                url: '/',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        }

    } );

    if (annyang) {


        var lightOnOff = function(tag) {
            console.log("tagsss",tag);
            if(tag[0] === '1') {
                console.log("clicked",tag[0])
                $( "#btn1" ).trigger( "click" );
            } else   if(tag[0] === '2') {
                console.log("clicked",tag[0])
                $( "#btn2" ).trigger( "click" );
            } else   if(tag[0] === '3') {
                console.log("clicked",tag[0])
                $( "#btn3" ).trigger( "click" );
            } else   if(tag[0] === '4') {
                console.log("clicked",tag[0])
                $( "#btn4" ).trigger( "click" );
            } else {

            }
        };




        var commands = {

            'arya *search':      lightOnOff

        };


        annyang.debug();


        annyang.addCommands(commands);


        annyang.setLanguage('en');


        annyang.start();
    } else {
        //not supported
    }


})