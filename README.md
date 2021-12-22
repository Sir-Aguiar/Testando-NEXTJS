# Configuration



The first command in the terminal's 

npm init -y

This instruction create a package.json file with the dependencies of the project. After that you need to install the NextJs framework and the React e React-DOM libaries, you can do that with a single line of command:

```
npm install next react react-dom
```
And at the package.json file the dependencies are already updated.


# Production


To run the Next scipt you need to have a pages repository in your root, each file in page become a new route to your root element (index.js, what will be shown when the user log in)

And then you can start to code in ReactJS normally, to deploy you can do it with the Vercel serivice's



# Deploy



```
git add -A 

git commit -m "commit name

git push origin main
```

Now the files are updated in your github repository and all you gotta do is to allow Vercel to build it and host at your own DNS
