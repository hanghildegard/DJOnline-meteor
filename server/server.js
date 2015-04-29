/**
 * Created by hangdominh on 21/04/15.
 */
Meteor.publish("points", function() {
    return Points.find();
});