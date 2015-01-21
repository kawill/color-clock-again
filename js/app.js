window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?
    })

    var h1s = [].slice.call(document.querySelectorAll('h1'));

    setInterval(function() {
        var d = new Date();
        // var parts = [d.getHours(), d.getMinutes(), d.getSeconds()]
        // h1s.forEach(function(el) {
        //     el.innerHTML = parts.join(":")
        // })
        // },
        // 1 * 1000)

        function showTime() {
            var hrs, mins, secs, time, color;
            hrs = d.getHours();
            mins = d.getMinutes();
            secs = d.getSeconds();

            if (hrs < 10) {
                hrs = '0' + hrs
            };
            if (mins < 10) {
                mins = '0' + mins
            };
            if (secs < 10) {
                secs = '0' + secs
            };

            time = hrs + ":" + mins + ":" + secs;
            color = red + green + blue;

            var red, green, blue
            red = Math.round((hrs / 23) * 255);
            green = Math.round((mins / 59) * 255);
            blue = Math.round((secs / 59) * 255);


            document.body.style.backgroundColor = "rgb(" + red + ',' + green + ',' + blue + ")";
            document.getElementById("timeColor").innerHTML = time;

        }

        showTime();

    }, 1 * 1000)

}
