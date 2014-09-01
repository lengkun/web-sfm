'use strict';

var sfmstore = require('../store/sfmstore.js'),
    STORES = require('../settings.js').STORES;

module.exports = Ember.Route.extend({

    model: function(){
        return sfmstore
            .promiseAdapter()
            .then(function(adapter){
                return adapter.promiseData(STORES.SINGLETONS, STORES.BUNDLER);
            });
    },

    actions: {
        error: function(){
            this.transitionTo('workspace');
        }
    }

});