'use strict';

module.exports = function (grunt) {
  var browserifyFiles = { 'client/public/dist/js/bundle.js': ['client/src/js/app.js'] };

  grunt.initConfig({
    // Browserify JS
    browserify: {
      dev: {
        files: browserifyFiles,
        options: { debug: true }
      },
      release: {
        files: browserifyFiles,
        options: { debug: false }
      },
    },
    cssmin: {
      combine: {
        files: {
          'client/public/dist/css/bundle.min.css': ['client/src/css/**/*.css']
        }
      }
    },
    // Watch for changes
    watch: {
      files: ['client/src/js/**/*.js', 'client/src/css/**/*.css'],
      tasks: ['dev', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify:dev']);
  grunt.registerTask('dev', ['browserify:dev']);
  grunt.registerTask('release', ['browserify:release']);
};