/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

// const path = require('path');
const gulp = require('gulp');
// const gulpif = require('gulp-if');
// const babel = require('gulp-babel');
const gulp_jspm = require('gulp-jspm');

// Add your own custom gulp tasks to the gulp-tasks directory
// A few sample tasks are provided for you
// A task should return either a WriteableStream or a Promise
// const project = require('./gulp-tasks/project.js');

// Clean the build directory, split all source and dependency files into streams
// and process them, and output bundled and unbundled versions of the project
// with their own service workers
gulp.task('copy', ()=>{
    return gulp.src('src/Observable.js')
    .pipe(gulp_jspm({selfExecutingBundle: true,inject: true}))
    // .pipe(babel({
    //         presets: ['es2015'],
    //         plugins: ["transform-remove-strict-mode"],
    //         comments: false,
    //         compact: true
    //     }))
    .pipe(gulp.dest('build'));
});

// Clean the build directory, split all source and dependency files into streams
// and process them, and output bundled and unbundled versions of the project
// with their own service workers
