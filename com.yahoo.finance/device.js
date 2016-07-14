// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingEngine
//
// Copyright 2016 Rick Yan <my259@stanford.edu>
//
// See COPYING for details

const Tp = require('thingpedia');

module.exports = new Tp.DeviceClass({
    Name: 'YahooFinanceDevice',

    _init: function(engine, state) {
        this.parent(engine, state);

        this.uniqueId = 'com.yahoo.finance';
        this.name = "YahooFinance";
        this.description = "Yahoo Finance for stock information.";
    }
});

