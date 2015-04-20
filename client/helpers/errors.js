/**
 * Created by hangdominh on 21/04/15.
 */
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};