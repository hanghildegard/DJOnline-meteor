/**
 * Created by hangdominh on 22/04/15.
 */
Canvas = function() {
    var self = this;
    var svg;

    // Creates the SVG canvas.
    var createSvg = function() {
        svg = d3.select('#canvas').append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
        console.log("creating svg");
    };
    createSvg();

    // Clears the SVG canvas.
    self.clear = function() {
        d3.select('svg').remove();
        createSvg();
    };

    // Naively draws an array of simple point objects.
    self.draw = function(data) {
        if (data.length < 1) {
            self.clear();
            return;
        }
        if (svg) {
            // This is what actually does the drawing. We're not
            // going to cover d3 in any great detail here.
            svg.selectAll('circle').data(data, function(d) { return d._id; })
                .enter().append('circle')
                .attr('r', 10)
                .attr('cx', function (d) { return d.x; })
                .attr('cy', function (d) { return d.y; });
        }
    };
}

// Just some DRY for inserting a point into the points
// collection based on the cursor position.
var markPoint = function() {
    var offset = $('#canvas').offset();
    points.insert({
        x: (event.pageX - offset.left),
        y: (event.pageY - offset.top)});
}

// Another events hash. This one handles capturing the
// drawing-related events. Just for reference, Session can
// also establish a reactive context, but we're not using that
// here.
Template.canvas.events({
    'click': function (event) {
        markPoint();
    },
    'mousedown': function (event) {
        Session.set('draw', true);
    },
    'mouseup': function (event) {
        Session.set('draw', false);
    },
    'mousemove': function (event) {
        if (Session.get('draw')) {
            markPoint();
        }
    }
});