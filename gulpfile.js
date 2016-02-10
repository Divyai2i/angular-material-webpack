var gulp      = require("gulp");
var webpack   = require("webpack-stream");
var extractor = require("extract-text-webpack-plugin");
var minifyCSS = require("gulp-minify-css");
var minifyJS  = require("gulp-uglify");
var concat    = require("gulp-concat");
var sequence  = require("run-sequence");
var open      = require("gulp-open");
var nodemon   = require("gulp-nodemon");


gulp.task("run", function() {
  nodemon({
    script : "./app.js",
    ext    : "js html",
  });
});


gulp.task("open", () => {
  gulp.src("").pipe( open({
    uri: "http://localhost:3000/"
  }));
});


gulp.task("compress", () => {

  gulp.src(["./public/dist/bundle.js"]).pipe(minifyJS())
    .pipe(concat("bundle.min.js"))
    .pipe(gulp.dest("./public/dist/"));

  gulp.src(["./public/dist/bundle.css"]).pipe(minifyCSS())
    .pipe(concat("bundle.min.css"))
    .pipe(gulp.dest("./public/dist/"));

});



gulp.task("pack", () => {
  return gulp.src("public/src/js/app.js").pipe( webpack({
      output : {
        filename : "bundle.js"
      },
      watch  : true,
      module : {
        loaders : [{
          test   : /\.css$/,
          loader : extractor.extract("style-loader", "css-loader")
        },
        {
          test   : /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader : "file"
        }],
      },
      plugins : [ new extractor("bundle.css") ]
    }))
    .pipe( gulp.dest("public/dist"));
});


gulp.task("build", () => {
  sequence("pack", "compress");
});


gulp.task("default", () => {
  sequence("run", "open");
});
