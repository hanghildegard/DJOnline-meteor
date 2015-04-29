/**
 * Created by hangdominh on 22/04/15.
 */
// Declares an events hash of all events scoped to
// a particular template. Here we're handling the click
// event on the clear button.
Template.drawingSurface.events({
    'click input': function (event) {
        Meteor.call('clear', function() {
            canvas.clear();
            Points.remove({});
        });
    }
});