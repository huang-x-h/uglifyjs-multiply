# grunt-uglifyjs-multiply

> uglify mulitply files

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-uglifyjs-multiply --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-uglifyjs-multiply');
```

## The "uglifyjs_multiply" task

### Overview
In your project's Gruntfile, add a section named `uglifyjs_multiply` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  uglifyjs_multiply: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

See [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

### Usage Examples

```js
grunt.initConfig({
  uglifyjs_multiply: {
    options: {},
    files: {
      'dest': ['src/**/*.js'],
    },
  },
});
```