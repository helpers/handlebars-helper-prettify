/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'index.js',
        'lib/*.js',
        'test/*.js'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {
          describe: true,
          it: true
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        helpers: ['./index.js']
      },
      pages: {
        options: {
          it: 'Should prettify the generated HTML using default settings.',
          prettify: {
            padcomments: true
          }
        },
        src: 'test/fixtures/*.hbs',
        dest: 'test/actual/'
      },
      hash_options: {
        options: {
          it: 'Should prettify the generated HTML using hash options.',
        },
        src: 'test/fixtures/hash-*.hbs',
        dest: 'test/actual/hash/'
      },
      opts_indent4: {
        options: {
          it: 'Should indent the generated HTML by 4 spaces',
          prettify: {indent: 4}
        },
        src: 'test/fixtures/opts-indent.hbs',
        dest: 'test/actual/opts/indent4.html'
      },
      opts_indent6: {
        options: {
          it: 'Should indent the generated HTML by 6 spaces',
          prettify: {indent: 6}
        },
        src: 'test/fixtures/opts-indent.hbs',
        dest: 'test/actual/opts/indent6.html'
      },
      opts_object: {
        options: {
          data: 'test/opts.json',
          it: 'Should pass an options object to the helper as a parameter.',
        },
        src: 'test/fixtures/opts-object.hbs',
        dest: 'test/actual/opts-object.html'
      }
    },

    // Run mocha tests.
    mochaTest: {
      tests: {
        options: {
          reporter: 'progress',
        },
        src: ['test/*_test.js']
      }
    },


    // Before generating any new files,
    // remove files from previous build.
    clean: {
      example: ['test/actual/**']
    }

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('grunt-sync-pkg');
  grunt.loadNpmTasks('assemble');

  // When the "test" task is run, use Assemble to build templates
  // with the "prettify" helper, then run tests with mocha.
  grunt.registerTask('test', ['assemble', 'mochaTest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble', 'sync', 'readme']);

};