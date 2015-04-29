/**
 * Created by hangdominh on 22/04/15.
 */
// Just a reference for our canvas.
canvas;

// Creates a reactive context around us subscribing to our
// points collection. See the discussion about reactivity
// below.
/*
Deps.autorun( function () {
    Meteor.subscribe('pointsSubscription');
});
*/

// Runs when Meteor is all set to start. It creates our
// canvas out of the Canvas object we declared above and..
