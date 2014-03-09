/*jshint strict:false*/
/*global CasperError, console, phantom, require*/
var casper = require('casper').create();

var breakpoints = [
    300,
    400,
    600,
    800,
    1000,
    1200,
    1600
];

casper.start('http://www.smashingmagazine.com/');

casper.each(breakpoints, function(self, breakpoint, index) {
    this.then(function() {
        this.viewport(breakpoint, 1000);
    });

    this.then(function() {
        this.capture('tmp/screenshots/' + breakpoint + '.jpg');
    });
});

casper.run();