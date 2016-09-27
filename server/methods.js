/**
 * Created by Matz Wiik on 23.09.2016.
 */
Meteor.methods({
   addResolution(resolution) {
       if (!Meteor.userId()){
           throw new Meteor.error("Not Authorized");
       }
       Resolutions.insert({
           text: resolution,
           complete: false,
           createdAt: new Date(),
           user: Meteor.userId()
       });
   },

    toggleResolution(resolution) {
        Resolutions.update(resolution._id, {
            $set: {complete: !resolution.complete}
        })
    },

    deleteResolution(resolution) {
        Resolutions.remove(resolution._id);
    }
});