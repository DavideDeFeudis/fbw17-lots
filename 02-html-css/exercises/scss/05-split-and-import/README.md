# SCSS Exercise - Splitting your SCSS files and @import

Convert the given CSS file to SCSS. Store the SCSS file in the folder scss/

## Outsource
Outsource repeated styles for colors and typography into own files.

### Colors
Outsource the base colors into its own SCSS file \_colors.scss. Define the color variable(s) here.

### Typography
Outsource repeated typography settings like font-family, etc, into a file \_fonts.scss.

Any other repeated styles you might place in the file style.scss directly.


## Importing & Testing

Import the colors and fonts files in your main.scss. Apply your variables instead of the "hard-coded" values.

Convert the SCSS to CSS by applying `sass --watch scss:css`

There should only be ONE CSS generated: the style.css. No css file \_colors.css and no \_fonts.css should be present in the css/ folder.

Watch the index.html in the browser again: Everything still looks as before + plus your new styles are applied?

Adapt the color styles a bit and watch again: Are the changes applied?

Congratulations! You now realized your very first customizable website theme.
