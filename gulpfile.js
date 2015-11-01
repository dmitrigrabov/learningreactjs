var gulp      = require( 'gulp' ),
  source      = require( 'vinyl-source-stream' ), // Used to stream bundle for further handling
  buffer      = require( 'vinyl-buffer' ),
  browserify  = require( 'browserify' ),
  babelify    = require( 'babelify' ), 
  uglify      = require( 'gulp-uglify' ),
  sourcemaps  = require( 'gulp-sourcemaps' ),
  util        = require( 'gulp-util' ),
  watch       = require( 'gulp-watch' ),
  src         = '/src/js',
  dist        = './public/js',
  browserifyConfig;

browserifyConfig = {
  entries : __dirname + src + '/main.js',
  extensions : [ '.js', '.jsx' ],
  transform : [ babelify ], // We want to convert JSX to normal javascript
  debug : true, // Gives us sourcemapping
  cache : {},
  packageCache : {}
}
 
gulp.task('browserify', function() {
  browserify( browserifyConfig ).bundle() // Create the initial bundle when starting the task
  .pipe( source('main.js') )

  .pipe( buffer() )
  .pipe( sourcemaps.init({ loadMaps: true }))
  // Add transformation tasks to the pipeline here.
  //.pipe( uglify() )
  .on( 'error', util.log )
  .pipe( sourcemaps.write( './' ) )
  .pipe( gulp.dest( dist ) );
});

gulp.task('watch', function() {
  return (
    gulp.watch( [ __dirname + src + '/**/*.js', __dirname + src + '/**/*.jsx' ], ['browserify'])
  );
});

// Just running the two tasks
gulp.task('default', ['browserify', 'watch']);
