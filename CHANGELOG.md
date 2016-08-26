# release roadmap

The general idea is that the master branch will have the latest release and the
develop branch will contain stuff currently being _developed_ (with the exception
of release 0.0.0 which will all be on master as it's already done). I'm going
to try out TDD which means that for any release, step one will be creating all the tests, and
step two will be writing code to pass those tests. This is my personal project
and I don't foresee other poeple working on it. This means that I'm going to
be OK with failing tests on develop, but **NOT** ok with failing tests on
master. I'm using chai mixed with my own simple test framework for testing. This
framework just generates some simple html and descriptions of tests
passed/failed.

## 0.0

### 0.0.0

_in progress_

* With the exception of polypick.version, every function will `throw 'not implented';`.
* With the exception of polypick.version, all tests will expect 'not implented' errors.

### 0.0.1

_planned_

* Implement polypick.intersects.ray
  * Implement tests for polypick.intersects.ray\_tri that pass the function invalid arguments
  * Implement roughly 4 tests for polypick.intersects.ray\_tri that pass the function valid arguments
  * Implement any helper functions needed.

### 0.0.2

_planned_

* 0.0.1 bugfixes

### 0.0.3

_planned_

* Implement polypick.pick
  * Implement tests for polypick.pick that pass the function invalid arguments
  * Implement roughly 4 tests for polypick.pick that pass the function valid arguments
  * Implement any helper functions needed.

### 0.0.4

_planned_

* 0.0.3 bugfixes

## 0.1 
