'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        coffee: {
            compile: {
                files: [{expand: true, flatten: true, src: ['src/**/*.coffee'], dest: 'lib', ext: '.js'}]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('default', ['coffee']);
};