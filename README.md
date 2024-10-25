[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16491056)
## installare tailwinds in un progetto react: comandi:
```bash
npx create-react-app my-app
cd my-app
npm install tailwindcss postcss-cli autoprefixer
npx tailwindcss init -p
```
## aggiungere tailwindcss al file postcss.config.js
```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
## aggiungere tailwindcss al file src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## installare lucide-react
```bash
npm install lucide-react
```


