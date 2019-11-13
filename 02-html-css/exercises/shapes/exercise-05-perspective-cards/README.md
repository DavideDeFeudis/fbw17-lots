# Shapes - Exercise 5 - Cards with perspective

In the given HTML file you find three cards.

Please style the cards so they get the 3D effect like seen in the image below.

Final result:
![Result](result.png)

- Use transform rotations to move the cards in the 3D space
- Use perspective to give the rotations depth.
- Apply multiple box shadows on the cards to increase the 3D depth effect
  => keep in mind: multiple shadows are separated by comma!

Tip for the middle card:

- Transform translate could be helpful on this one to move it down a bit, before rotation :-)

Tips for the shadow:

- Style the first (inner) shadow without blur and and use the spread operator to get the thickness / depth view.
- Style the second (outer) shadow with a bigger x and y offset and apply blur, without spread. Additionally use rgba to make it a bit transparent
- You can change the side of a shadow by using negative values for the x offset

CSS properties to use:

- perspective
- transform
- box-shadow (multiple)
- background-clip / -webkit-background-clip

Advanced task (not mandatory):

Use the index-no-css.html file and create all the CSS on your own.
