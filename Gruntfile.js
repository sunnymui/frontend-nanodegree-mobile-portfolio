/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    uglify: {
      dist: {
        files: {
          'index.html': ['index.html'],
          'js/perfmatters.js': ['js/perfmatters.js'],
          'css/style.css':['css/style.css'],
          'css/print.css':['css/print.css']
        }
      }
    },
    uncss: {
      dist: {
        files: {
          'views/css/bootstrap-grid.css': ['views/pizza.html']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-uncss');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify']);

};
