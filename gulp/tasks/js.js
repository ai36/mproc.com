import minify from 'gulp-minify';
 
export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true,
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}