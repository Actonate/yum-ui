const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const concat = require("gulp-concat");
const ts = require('gulp-typescript');
const del = require('del');
const watch = require('gulp-watch');

sass.compiler = require('node-sass');

function cleanDist() {
	return del([
		'./dist',
		'./css',
	])
}

function compileBabel() {
	return gulp.src(['src/components/**/*.tsx', 'src/components/**/*.ts'])
		.pipe(babel())
		.pipe(gulp.dest('dist'))
}

function buildTypes() {
	var tsProject = ts.createProject('./tsconfig.json', {
		declaration: true,
	});

	var tsResult = tsProject.src()
		.pipe(tsProject());

	return tsResult.dts.pipe(gulp.dest('./dist/types'));
}

function concatTypes() {
	return gulp
		.src([
			'dist/types/**/*.d.ts'
		])
		.pipe(concat("index.d.ts"))
		.pipe(gulp.dest("./dist"));
}

function compileSCSS() {
	return gulp.src('src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'));
}

function copyCSS() {
	return gulp.src(['src/styles/*.css'])
		.pipe(gulp.dest('css/'))
}

function watchCSS() {
	// Endless stream mode
	return watch('src/styles/**/*.scss', gulp.series(compileSCSS, copyCSS));
}

const compileCSS = gulp.series(compileSCSS, copyCSS);
const compileTS = gulp.series(compileBabel);
const generateTypes = gulp.series(buildTypes, concatTypes);

exports.build = gulp.series(cleanDist, compileCSS, compileTS, generateTypes);
exports.watchStyles = gulp.series(watchCSS);