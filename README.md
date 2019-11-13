# Course material for fbw17-lots

This repository will serve course material including:
- powerpoint slides (theory)
- code examples (HTML / CSS files & codepen links)
- exercices

## Want to push all your changes to your fork - but still get all updates when doing git pull? 

In case you want to push all your solutions to tasks online so you can view them also from home or everywhere else, you can set up a clone that pulls changes from the original repository and pushes them to another repository, e.g. your fork!

This can be easily setup by setting a different URL for fetch/pull and push in your local clone.

Step-by-Step guide:

- Create a clone from the repository you want to get updates from (if you have not done so already)
- Fork the repository in GitHub - so you get a 1:1 copy that you can write to
- Now grab the clone URL from your *FORK* on GitHub
- Within your local clone on your PC - set your fork as the target where to push to with this command:
  - `git remote set-url origin --push https://github.com/<your-username>/<reponame>.git`
  - replace the repository URL with the one from your fork

That's it!

Now you can constantly receive updates from the original repository by hitting git pull. And all your commits and pushes of any of your own stuff, e.g. task solutions, will go to your fork!



# Your portfolio

The folder "portfolio" will be a shared folder for all individual portfolio projects

- Please FORK this repository on GitHub (get help from others if needed!)
- Then clone your forked repository to a local folder
- Within the cloned repository: cd into folder "portfolio"
- Stay on the master branch / work directly on master
- Create a subfolder "your-firstname"_"your-lastname";
- Create three HTML files in this folder: index.html, skills.html, contact.html
- Within your name folder: create a folder "css"
- cd into the folder "css" and create a file "styles.css"
- Add and commit your work
- Push the master branch
- Lookup in your GitHub, refresh and see if the changes are online
- That's it!

