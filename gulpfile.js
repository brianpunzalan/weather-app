const gulp = require('gulp')
const browserSync = require('browser-sync')
const webpack = require('webpack-stream')

browserSync.create()

gulp.task('build', () => {
  return gulp.src('src/query.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
})

gulp.task('serve', () => {
  browserSync.init({
    server: "./public"
  })
  gulp.watch(['src/**/**.js'], 
    gulp.series('build')
  )
})

gulp.task('default', 
  gulp.series('build', 'serve'))
