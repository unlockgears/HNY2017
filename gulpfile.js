var gulp = require('gulp')
var browserSync = require('browser-sync');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(['**/*.js'], browserSync.reload)
    gulp.watch(['**/*.html'], browserSync.reload)
})
