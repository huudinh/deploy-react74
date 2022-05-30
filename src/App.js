function App() {
  return (
    <div>
      Hello world!
    </div>
  );
}

export default App;
// 1. npm run build
// 2. create new repo deploy-react74 -> tao repo github.com
// 3. npm install -D gh-pages

// 4. package.json
// a. add "homepage": "https://{username}.github.io/{repo-name}",
// b. add deploy and predeploy in "scripts"
// "predeploy": "npm run build", // Build before deploy
// "deploy": "gh-pages -d build" // Deploy the "buld" folder

// 5. Setup Github Repo
// git init
// git add .
// git commit - "first commit"
// git branch -M main
// git remote add origin https://github.com/huudinh/deploy-react74.git
// git push -u origin main

// 6. npm run deploy
// https://huudinh.github.io/deploy-react74

// 7. deploy agian
// a. run add . / commit / push
// b. npm run build
// c. npm run deploy
