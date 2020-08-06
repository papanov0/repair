var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');



gulp.task('minify-css', function(done) {
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))
    done();
});

gulp.task('move-js', function(done) {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    done();
});

gulp.task('minify-html', function() {
    return gulp.src('./src/*.html')

    .pipe(gulp.dest('dist/'));
    });

gulp.task('fonts', function() {
    return gulp.src('./src/fonts/**/*')

    .pipe(gulp.dest('dist/fonts'));
    });

gulp.task('tinypng', function (done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'StC5QVL7nQCRTBn7XQkz6n7nWTB5J04w'
        }))
        .pipe(gulp.dest('dist/img/'));
        done();
});

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'fonts', 'minify-html', 'tinypng', function(done){

    done();
}));

function defaultTask(done) {
    
    done();
}
