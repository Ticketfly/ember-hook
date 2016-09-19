/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-hook',
  
  included: function(app) {
    // See: https://github.com/null-null-null/ember-get-config
    while (app.app) {
      app = app.app;
    }
    this.eachAddonInvoke('included', [app]);
    this._super.included.apply(this, [app]);
  }
  
};
