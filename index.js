/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-hook',
  
  included: function() {
    // See: https://github.com/null-null-null/ember-get-config
    this._super.included.apply(this, arguments);
    this.eachAddonInvoke('included', arguments);
  }
};
