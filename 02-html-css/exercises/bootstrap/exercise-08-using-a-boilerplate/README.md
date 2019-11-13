# Bootstrap - Exercise #8 - The Copy Cat

Sometimes we just want to start our page from a template which already matches our layout needs quite nicely.

We can use bootstrap examples for that.

## Instructions

### Pick the template code

- Create an empty bootstrap-template-test.html file
- On the bootstrap page: Go to tab "Examples"
- Click on any of the examples
- Right-click on the page and select "View source"
- Select & Copy all code by CTRL+A followed by CTRL+C
- Paste the code into your empty bootstrap-template-test.html
- Keep the bootstrap source code page open. We will need it again...

### Fix the broken links

- View the page
  - The bootstrap files are not loaded => because all links to bootstrap in the HTML are relative.
  - The browser looks for these resources (css + javascript files) now on your local PC. But it does not find these resources there
- Fix: Add the following line within your head section to fix it:  `<base href="https://getbootstrap.com">`. Now you make all relative links pointing to bootstrap again
- View the page in the browser. It should look much better. But still not 1:1 like the original.
- Watch for a custom CSS stylesheet linked like so `<link href="album.css" >`.
  - The tag `<base href="">` only correctly matches links with a slash (/) at the beginning
  - This custom CSS file in the head does not start with a slash. This link is not relative to the domain. It is relative to the current folder. So again, our page does not find it. We need to fix that too.
- Fix II: View the source code of the original page again. 
  - In the code: Click on the link of the file. Now you get forwarded to the file. 
  - Find the full url of the CSS file in the address bar of the browser
  - Copy this url and paste it into your local file instead of the filename.
- View your page again. Now it should look like the original

### Responsivity test

- Go into the Chrome Dev Tools (either right-click "Inspect" on any element or go to your top menu: Tools > Developer tools)
- Shrink and expand the view (emulating mobile and desktop view)
- Watch if the responsivity works

Congratulations.

You now can always start any of your bootstrap pages with a boilerplate. Without the need to reinvent the (layout) wheel all the time.
