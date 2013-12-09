/*global document:true, bespoke:true */

(function(document, bespoke) {
    "use strict";

    var deck = bespoke.horizontal.from("article", {
        convenient: true,
        logbook: true
    });

    var fakePluginButton = document.getElementById("fake-plugin-button");

    bespoke.plugins.logbook.override("my-custom-plugin-event", function() {
        console.warn("Warning! You clicked the scary button!", arguments);
    });

    fakePluginButton.onclick = function() {
        deck.fire("my-custom-plugin-event", {
            something: "with extra data"
        });
    };

}(document, bespoke));
