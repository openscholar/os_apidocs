'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      }
    },
    apidoc: {
      mypp: {
        src: grunt.file.readJSON('os_apidoc.json').path,
        dest: "doc/",
        options: {
          includeFilters: [ ".*\\.class\\.php$" ],
          excludeFilters: [ "node_modules/" ]
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-apidoc');

  // Default task.
  grunt.registerTask('generate', ['apidoc']);
  grunt.registerTask('serve', ['generate', 'watch']);

};
