import replace from "gulp-replace";
import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import htmlmin from "gulp-htmlmin";

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(
        versionNumber({
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to': [
                    'js',
                    {
                        'type'  : 'css',
                        'key'   : '_v',
                        'value' : '%DT%',
                        'files': ['style.min.css'],
                    },
                ]
            },
            'output': {
                'file': 'gulp/version.json'
            }
        })
    )
    .pipe(
        htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
            }
        )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}
