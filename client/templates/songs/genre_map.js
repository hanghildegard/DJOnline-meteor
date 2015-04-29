/**
 * Created by hangdominh on 22/04/15.
 */

    canvas = new Canvas();



    // Creates a reactive context around us getting all points
    // out of our points collection. Fetch will turn the cursor
    // into an array. We then pass off this array to the canvas'
    // draw method to actually draw all the points.
    // (Not performant!)

    Deps.autorun( function() {
        var data = Points.find().fetch();
        $('h2').hide();
        if (canvas) {
            console.log("has canvas");
            canvas.draw(data);
        } else {
            console.log("no canvas");
        }
    });
