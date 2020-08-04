var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', defaultTask);

function defaultTask(done) {
    
    done();
}

gulp.task('minify-css', function(done) {
    return gulp.src('./css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('../dist/css/'))
    done();
});

gulp.task('move-js', function(done) {
    return gulp.src('./js/*.js')
    .pipe(gulp.dest('../dist/js/'))
    done();
});

gulp.task('minify-html', function() {
    return gulp.src('./css/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('../dist/'));
    });

