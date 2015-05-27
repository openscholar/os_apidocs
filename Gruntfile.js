'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'doc',
    dist: 'dist',
    // Make sure this path in local.json is defined for
    // your environment.
    os_path: grunt.file.readJSON('local.json').path,
    assets: 'assets'
  };

  // Project configuration.
  grunt.initConfig({

    // Project settings
    config: config,

    // Task configuration.
    apidoc: {
      mypp: {
        src: "<%= config.os_path %>",
        dest: "<%= config.app %>",
        options: {
          includeFilters: [ ".*\\.class\\.php$" ]
        }
      }
    },
    'gh-pages': {
      options: {
        base: '<%= config.app %>'
      },
      src: ['**']
    },
    connect: {
      options: {
        port: 9000,
        base: 'doc',
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.app %>'
          ]
        }
      }
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= config.app %>/{,*/}*.js'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.os_path %>/**/{,*/}*.{php,inc}'
        ],
        tasks: ['generate']
      }
    },
    // Copies files to places other tasks can use
    copy: {
      files: {
        cwd: '<%= config.assets %>',
        src: '**/*',
        dest: '<%= config.app %>',
        expand: true
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-apidoc');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('generate', ['apidoc']);
  
  grunt.registerTask('deploy', ['copy', 'gh-pages']);

  grunt.registerTask('serve', function () {
    grunt.task.run([
      'generate',
      'connect:livereload',
      'watch'
    ]);
  });
};
