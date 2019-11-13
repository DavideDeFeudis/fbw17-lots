# SCSS Bootstrap Customization Exercise

Setup the structure for a custom bootstrap:

- Within your projects folder: Create a folder "bootstrap-custom"
- Step inside the folder
- Init a web project with the command `npm init -y`
- Install bootstrap via npm: `npm install --save bootstrap`
- Create two folders 'css' and 'scss'
- Step into the folder 'scss'
- Create a file 'custom.scss'
- Put this line into it the file: `@import "../node_modules/bootstrap/scss/bootstrap";`
- Go up one folder (cd ..)
- Run sass --watch scss:css to convert the SCSS into CSS

Test it:

- Create a file index.html with the bootstrap starter code inside. In case you do not have the code, grab it here from the section "Starter template": https://getbootstrap.com/docs/4.3/getting-started/introduction/
- Copy the whole button palette of bootstrap into the body of your file: <https://getbootstrap.com/docs/4.3/components/buttons/>
- Now replace the link to the bootstrap styleshet in the head with your generated CSS stylesheet (css/custom.css)
- Reload the page: The bootstrap buttons should still have their default style

Congratulations! You have now your own custom copy of bootstrap and can change it to your needs. For concrete customization see the next exercise...

All info on bootstrap theming / customization:
<https://getbootstrap.com/docs/4.3/getting-started/theming/>
