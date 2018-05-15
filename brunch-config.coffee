module.exports = config:
  files:
    stylesheets:
      joinTo: 'app.css'
      order:
        before: [
          'app/styles/fonts.scss',
          'app/styles/bootstrap.scss',
          'app/styles/main.scss'
        ]
        after: [
          'app/styles/responsive.scss'
        ]
    javascripts:
      joinTo: 'app.js'
      order:
        before: [
          'vendor/jquery.js',
          'vendor/underscore.js',
          'vendor/backbone.js',
          'vendor/highcharts.js',
        ]