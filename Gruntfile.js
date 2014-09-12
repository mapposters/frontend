module.exports = function(grunt) {

  grunt.initConfig({

    // Project settings
    frontend: {
      // configurable paths
      app:  'app',
      dist: 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= frontend.dist %>/*',
            '!<%= frontend.dist %>/.git*'
          ]
        }]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= frontend.app %>/scripts/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= frontend.dist %>/public/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    jshint: {
      files: ['Gruntfile.js', 'frontend/scripts/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '<%= frontend.app %>',
          src: ['*.html',
                'views/*.html'],
          dest: '<%= frontend.dist %>'
        }]
      }
    },
    sass:{
      dist: {
        files: [{
          src: '<%= frontend.app %>/styles/main.scss',
          dest: '<%= frontend.dist %>/public/css/mapposter.css',
        }]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= frontend.app %>',
          dest: '<%= frontend.dist %>/static/',
          src: [
            '../bower_components/**/*',
            'static/img/{,*/}*.{webp}',
            'static/fonts/{,*/}*',
          ]
        }]
      }
    },
    watch: {
      scripts: {
        files: '<%= frontend.app %>/scripts/**/*.js',
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
          livereload: true,
        },
      },
      styles: {
        files: '<%= frontend.app %>/styles/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
      html: {
        files: '<%= frontend.app %>/**/*.html',
        tasks: ['htmlmin'],
        options: {
          livereload: true,
        },
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('build', ['clean','jshint', 'concat', 'uglify', 'htmlmin', 'sass', 'copy']);
  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify','htmlmin', 'sass', 'copy', 'watch']);

};