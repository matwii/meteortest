import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Resolutions = new Mongo.Collection("resolutions");
});
