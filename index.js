
var Alexa = require('alexa-sdk');


var help_message = "";
var help_reprompt = "";
var stop_message = "";





var handlers = {
    'LaunchRequest': function () {
        //When person launches this skill, it runs it
        this.emit('CheckStreamersIntent');
    },
    'CheckSteamersIntent': function () {

        //call twitch api and get streamer


    },
    //Each of the handlers with AMAZON are built in things that will automatically 
    'AMAZON.HelpIntent': function () {
        var speechOutput = help_message;
        var reprompt = help_reprompt
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', stop_message)
    }
};