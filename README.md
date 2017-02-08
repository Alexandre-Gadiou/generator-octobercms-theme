# generator-october-theme

[![build Status](https://travis-ci.org/Alexandre-Gadiou/generator-octobercms-theme.svg)](https://travis-ci.org/Alexandre-Gadiou/enerator-octobercms-theme.svg?branch=master)

**generator-october-theme** is a yeoman generator to set up an OctoberCMS theme project in 5 minutes. (if nodejs already installed ...)

generator-october-theme is based on [EJS](http://ejs.co) technology.

## Presentation

As we already know, [bootstrap 4 alpha](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) moved from LESS to SASS technology.
 
This generator enables to create a **modern** OctoberCMS theme project with this packages : 

1. **Bootstrap-SASS 3.3.5**
2. **Font Awesome 4.4.0**
3. **jQuery 3.1.1**

Even if OctoberCMS is user friendly for front developers, a project always start with a static HTML prototype.

**generator-october-theme** will create a new folder in your OctoberCMS theme project `src/main/html`. In this folder you 
design your HTML pages with layouts, components ...

## Getting Started

1. Install [nodejs](https://nodejs.org/)

2. Install G
	
	* 	`npm install -g gulp`
		
3. Install Bower
	
	* 	`npm install -g bower`
		
4. Install Yeoman

	* 	`npm install -g yo`	

5. Install [Maven](https://maven.apache.org/install.html)
	

## Installation

1. Download [generator-october-theme](https://github.com/Alexandre-Gadiou/generator-october-theme/archive/master.zip)

2. Install

	* 	`cd generator-octobercms-theme`
		
	* 	`npm link`
		
## Usage	

As promised, you can now generate the october theme project and then start the prototype.

### Project generation

To generate the october theme project, you need to run this command  :

```
yo octobercms-theme
```

Then answer to Mr yeoman questions

### Start the prototype	

You can start the prototype only if you have generated the project before.

To start the prototype, you just need to run this command  :

```
gulp
```

This command creates a new folder `prototype/dist` which is browsersynch root (the server).
