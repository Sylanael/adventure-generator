# Vue-Bootstrap-basic

## Installation
This project depends on the following: please install them first:

### Node Package Manager
https://www.npmjs.com/get-npm

### Vue CLI
npm install -g @vue/cli
https://cli.vuejs.org/

## Command 

cd to the folder you cloned this and run the following command via command line

``npm install`` to download the nessasary components

``npm run serve`` to run the local server

``npm run build`` to build the final output


## Vue Bootstrap Documentation
https://bootstrap-vue.org/docs/icons

## Vue Life Cycle Hooks
- **beforeCreate :** This is the first lifecycle state. You can’t interact with any part of the component yet
- **created :** This is just after the creation of the component instance. You can now interact with the component, ie. the data properties, watchers, computed properties, but you still can’t access the DOM. Usually, data is fetched from your database or API in this lifecycle hook.
- **beforeMount :**  The component is compiled at this stage, but it is yet to be rendered on to the screen.
- **mounted :** This is after the component has been mounted. Now, you can access the $el method and play around with the content inside HTML elements. At this stage the component becomes fully interactive.
- **beforeUpdate :** Whenever changes are made to data or the DOM, right before that, this lifecycle hook is called. This is helpful when you need to log changes.
- **updated :** This is right after the changes are made to the DOM or the data. Here you can perform operations dependent on the change in the DOM.
- **beforeDestroy :** This is right before the component is destroyed and is the last instance of the fully functional DOM. You can do the necessary closing operations.
- **destroyed :**  This is kind of similar to the beforeCreate hook where the component is not functional and no data properties, watchers, computed properties, events can be accessed. 

## Routes
check /src/main.js

## Consuming APIs
- GET: https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
- POST: https://serversideup.net/post-put-patch-requests-with-vuejs-and-axios/


## Authors & Contributors

Thanks to the following people who have contributed to this project:

* [@sylanael](https://gitlab.com/sylanael)

