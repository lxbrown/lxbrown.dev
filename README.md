## My personal website
See it live at https://lxbrown.dev

### Prerequisites 
* [git](https://git-scm.com/)
* [npm](https://www.npmjs.com/)
* [yarn](https://classic.yarnpkg.com/en/) and [firebase-tools](https://firebase.google.com/) must also be installed. Those can be done globally:

    ```shell
    npm install -g yarn
    npm install -g firebase-tools
    ```

### Install

```shell
git clone https://github.com/lxbrown/lxbrown.dev.git
cd lxbrown.dev
yarn install
```

You should now be able to host the page locally

```shell
yarn start
```

and see the page hosted locally at http://localhost:3000/

### Deploy
To deploy the app, you need to be an authorized user on the Firebase project, right now that's just me :). If you set up your own project ([Firebase docs](https://firebase.google.com/docs/web/setup#create-firebase-project)), you can test deploying locally

```shell
firebase emulators:start
```

And deploy to the live site

```shell
yarn deploy
```
