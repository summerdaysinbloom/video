module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            js: {
                files: ['lib/**/*.js'],
                tasks: ['concat']
            },
            uglify: {
                files: ['lib/**/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: ['style/**/*.css'],
                tasks: ['cssmin']
            }
        },
        uglify: {
            dev: {
                files: {
                    'assets/output.min.js': ['lib/**/*.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'style/style.min.css': [
                        'style/style.css'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style/style.css' : 'sass/style.scss'
                }
            }
        },
        concat: {
            dist: {
                src: ['lib/**/*.js'],
                dest: 'main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
};