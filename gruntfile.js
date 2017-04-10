module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [{
			expand: true,
			cwd: '_site/assets/source/',
			src: ['_less/*.less'],
			dest: '_site/assets/',
			ext: '.css'
		}]
      }
    },
    watch: {
      styles: {
        files: ['_less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};