'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('generator october-theme:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
    ]);
  });
});
