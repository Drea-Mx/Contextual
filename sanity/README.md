# Contextual
[contextual.mx](https://contextual.mx/)


Instructions to run the project in your local machine. The project was created using [React Gatsby](https://www.gatsbyjs.com) for the Front-End and [Sanity](https://www.sanity.io/)


## Runing the front-end

1. **Make sure you have installed [Node Js](https://nodejs.org/download/release/latest-v16.x/) version 16.**

2. **Install the Gatsby CLI:**
    ```shell
        npm install -g gatsby-cli
    ```

3. **In the gatsby folder run:**
    ```shell
        npm install
    ```

4. **Run the project**
    ```shell
        npm run develop
    ```

## Runing the CMS Local


1. **Install Sanity:**
    ```shell
        npm install -g @sanity/cli
    ```

2. **Inside sanity folder:**
    ```shell
        sanity start
    ```

3. **To deploy CMS:**
    ```shell
        sanity deploy
    ```

4. **To deploy Graphql CMS:**
    ```shell
        sanity graphql deploy
    ```