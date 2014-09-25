module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      standard:{
        options: {
          linenos: true,
          compress: false,
          paths: ['css'],
          import: ['vars', 'nib'],
          use: [
             require('nib')
           ]
        },
        files : {
          'public/assets/css/cmsputty.standard.css' : 'private/css/standard.main.styl' ,
          'public/assets/css/cmsputty.brand.css': 'private/css/001-brand/index.styl',
          'public/assets/css/cmsputty.layout.css' :'private/css/002-layout/index.styl',
          'public/assets/css/cmsputty.components.css' : 'private/css/003-components/index.styl',
        }
      },
      standardProd:{
        options: {
          linenos: false,
          compress: true,
          paths: ['css'],
          import: ['vars', 'nib'],
          use: [
             require('nib')
           ]
        },
        files : {
          'public/assets/css/cmsputty.standard.css' : 'private/css/standard.main.styl' ,
          'public/assets/css/cmsputty.brand.css': 'private/css/001-brand/index.styl',
          'public/assets/css/cmsputty.layout.css' :'private/css/002-layout/index.styl',
          'public/assets/css/cmsputty.components.css' : 'private/css/003-components/index.styl'
        }
      },
      flex:{
        options: {
          linenos: true,
          compress: false,
          paths: ['css'],
          import: ['vars'],
           use: [
             require('nib')
           ]
        },
        files : {
          'public/assets/css/cmsputty.flex.css' : 'private/css/cmsputty.flex.styl' 
        }
      },
      flexProd:{
        options: {
          linenos: false,
          compress: true,
          paths: ['css'],
          import: ['vars', 'nib'],
           use: [
             require('nib')
           ]
        },
        files : {
          'public/assets/css/cmsputty.flex.css' : 'private/css/cmsputty.flex.styl' ,
        }
      }
    },
    watch: {
      css: {
        files: ['private/css/*.styl', 'private/css/**/*.styl', 'private/css/**/**/*.styl', 'private/css/**/**/**/*.styl'],
        tasks: ['stylus:standard', 'stylus:flex']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  // Default task(s).
  grunt.registerTask('default', [ 'stylus:standard', 'watch']);
grunt.registerTask('prod', [ 'stylus:flexProd', 'stylus:standardProd'])
};