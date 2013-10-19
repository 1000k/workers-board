module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Note: gem sass 3.2.11 & 3.2.12 is broken so you should use SASS 3.2.10 with `sudo gem install sass -v 3.2.10`
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'app/css'
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* Workers board screen CSS */'
        },
        files: {
          'app/css/screen.min.css': ['app/css/screen.css']
        }
      },
      minify: {
        expand: true,
        cwd: 'app/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'app/css/',
        ext: '.min.css',
      }
    },
    watch: {
      css: {
        files: ['src/sass/*.scss'],
        tasks: ['compass', 'cssmin']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['watch']);
}