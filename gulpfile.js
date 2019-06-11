const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Complie scss into css
function css() {
    // 1. Where is my scss file
    return gulp.src('./scss/**/*.scss')
    // 2. Pass that file through sass compiler
    .pipe(sass().on('error' , sass.logError))
    // 3. Where do I save the complied CSS?
    .pipe(gulp.dest('./css'))
    // 4. Stram changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss' , css);
    gulp.watch('./*.html').on('change' , browserSync.reload);
    gulp.watch('./js/**/*.js').on('change' , browserSync.reload);
}

exports.watch = watch;
exports.css = css;