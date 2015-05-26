'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    apidoc: {
      mypp: {
        // Make sure this path in os_apidocs.json is defined for
        // your environment.
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
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'doc',
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-apidoc');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('generate', ['apidoc']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('default', ['generate', 'connect']);

};
