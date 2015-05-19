'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    apidoc: {
      mypp: {
        src: grunt.file.readJSON('os_apidoc.json').path,
        dest: "doc/",
        options: {
          includeFilters: [ ".*\\.class\\.php$" ]
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'doc'
      },
      src: ['**']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-apidoc');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task.
  grunt.registerTask('generate', ['apidoc']);
  grunt.registerTask('deploy', ['gh-pages']);

};
