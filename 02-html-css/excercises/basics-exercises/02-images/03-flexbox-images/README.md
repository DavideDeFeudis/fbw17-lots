# Exercise 3 - Images in a flexbox + linear-gradient

Let's combine "foreground" and background images together.

Put 3 images in a flexbox:  
Two "real" images and one linear gradient.

The images should be positioned left and right and the linear-gradient in the middle.

To make your life easy: Use the dog image again (two times):  
<https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080>

Use the image as content-image in the flexbox (with img tag), not background-image.  
The linear-gradient should be a background-image.

Instructions:

- The flexbox should have a height of 200px
- The two images should get a fixed width of 200px;
- The two images should be pushed to the left and right edges of the flex container (without space to the border)
- The images should not strech -> dimension them with object-fit
- The linear-gradient should take up 30% of available width
- The linear-gradient should transition from color blue to purple
- The linear-gradient should have even space to the left and the right image

This time: Use CSS "width" attribute for img tags instead of flex-basis. 
For the linear-gradient apply flex-basis.
