/*
 * grunt-uglifyjs-multiply
 * https://github.com/huang-x-h/uglifyjs-multiply
 *
 * Copyright (c) 2014 huang.xinghui
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

// Converts \r\n to \n
function normalizeLf( string ) {
  return string.replace(/\r\n/g, '\n');
}

module.exports = function(grunt) {
  var uglify = require('grunt-contrib-uglify/tasks/lib/uglify').init(grunt);

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('uglifyjs_multiply', 'uglify mulitply files', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      banner: '',
      footer: '',
      compress: {
        warnings: false
      },
      mangle: {},
      beautify: false,
      report: 'min'
    });

    var banner = normalizeLf(options.banner);
    var footer = normalizeLf(options.footer);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      src.forEach(function(filepath) {
        var result,
            destfilepath = f.dest + path.sep + path.dirname(filepath) + path.sep + path.basename(filepath, '.js') + '_min.js';
        try {
          result = uglify.minify([filepath], f.dest, options);
        } catch (e) {
          console.log(e);
          var err = new Error('Uglification failed.');
          if (e.message) {
            err.message += '\n' + e.message + '. \n';
            if (e.line) {
              err.message += 'Line ' + e.line + ' in ' + src + '\n';
            }
          }
          err.origError = e;
          grunt.log.warn('Uglifying source ' + chalk.cyan(src) + ' failed.');
          grunt.fail.warn(err);
        }

        // Concat minified source + footer
        var output = banner + result.min + footer;
        grunt.file.write(destfilepath, output);
        grunt.log.writeln('File "' + destfilepath + '" created.');
      });
    });
  });

};
