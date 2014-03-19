module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            // js: {
            //     files: ['js/**/*.js'],
            //     tasks: ['concat']
            // },
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: ['style/**/*.css'],
                tasks: ['cssmin']
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
        }
        // concat: {
        //     dist: {
        //         src: ['js/**/*.js'],
        //         dest: 'assets/main.js'
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
};