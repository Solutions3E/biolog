/**
 * Created by dd on 12/15/14.
 */

Meteor.publish("patientDiagnoses", function (patientId) {
    return getPatientDiagnoses(patientId);
});

//Meteor.publish("mostUsedConditions", function (count) {
//    return Entities.find({etypes: "health-condition" }, {sort: [["used","desc"]]}, {limit: 20});
//});

Meteor.publish("allFacts", function () {
//    if (! this.userId) return;
//    return Entities.find({ creator: this.userId, etype: "health-condition" });
    return Facts.find();
});

//Meteor.publish("currentPatient"), function() {
//    return Entities.find({etypes: "patient" }, {sort: [["used","desc"]]}, {limit: 20});
//});
