# GulpOrigHbs

## Project Overview

This project is based on the skeleton obtained from the original Volt Bootstrap 5 Dashboard by Themesberg.

- **Original repository:** [themesberg/volt-bootstrap-5-dashboard](https://github.com/themesberg/volt-bootstrap-5-dashboard)

## Modifications

We have modified the application to use [Handlebars](https://handlebarsjs.com/) for templating instead of [gulp-file-include](https://www.npmjs.com/package/gulp-file-include).

- **Original templating:** [gulp-file-include](https://www.npmjs.com/package/gulp-file-include).
- **Current templating:** [Handlebars](https://handlebarsjs.com/)

## Project Name

The project is named **GulpOrigHbs**.

## Gulp CLI

Gulp CLI (Command Line Interface) is a tool that allows you to interact with Gulp, a popular JavaScript task runner, from the command line. It provides a set of commands and flags to manage and execute tasks defined in your Gulpfile.

### Installation

To install Gulp CLI globally, you can use npm (Node Package Manager):

```
npm install --global gulp-cli
```

This command installs the Gulp CLI globally on your system, making the `gulp` command available from any directory.

### Usage

The basic syntax for using Gulp CLI is:

```
gulp [flags] <task> <task>
```

Here, `[flags]` are optional flags to modify the behavior of the command, and `<task>` represents the tasks you want to execute. For example, to run a task named `build`, you can use:

```
gulp build
```

If you want to run multiple tasks concurrently, you can list them separated by spaces:

```
gulp clean build
```

To run tasks serially, use the `--series` flag:

```
gulp clean build --series
```

If you run `gulp` without specifying any tasks, it will execute the default task defined in your Gulpfile. If no default task is found, Gulp will throw an error.

## Version Information

- **Project version:** 1.4.2
- **Description:** Volt - Bootstrap 5 Dashboard, changed to handlebars
- **Main file:** gulpfile.js
- **Author:** KeshavSoft

## Release Notes

### 1.4.2

- Volt - Bootstrap 5 Dashboard, changed to handlebars

### 1.4.3

- settings html started

### 1.4.4

- transactions html started

### 1.4.5

- transactions versions started

### 1.4.6

- partials refactor
