/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'InterviewApp.Application',

    name: 'InterviewApp',

    requires: [
        // This will automatically load all classes in the InterviewApp namespace
        // so that application classes do not need to require each other.
        'InterviewApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'InterviewApp.view.main.Main'
});
