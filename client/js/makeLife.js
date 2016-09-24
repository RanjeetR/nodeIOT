

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

})