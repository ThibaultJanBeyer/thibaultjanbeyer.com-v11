var gulp = require("gulp");

var mSrc = "./src/CNAME",
  mDst = "./docs/";

module.exports = function() {
  return gulp.src(mSrc).pipe(gulp.dest(mDst));
};
