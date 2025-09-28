# Libélula Website

This is the official website for **Clínica Libélula**, built with React, Tailwind CSS, and deployed via GitHub Pages.

## 🚀 Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [pnpm](https://pnpm.io/) (package manager)
- [GitHub Pages](https://pages.github.com/) (deployment)

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/cfboy/libelula-website.git
   cd libelula-website
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```

3. **Start the development server:**
   ```sh
   pnpm start
   ```

4. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts

- `pnpm start` — Run the development server
- `pnpm build` — Build for production
- `pnpm run deploy` — Deploy to GitHub Pages
- `pnpm format` — Format code with Biome

## 🖼️ Assets

- All static images are in `public/assets/`
- SVG icons are imported as React components or used via [Lucide React](https://lucide.dev/)

## 🚢 Deployment

Deployment is handled by the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package:

```sh
pnpm run deploy
```
or including a commit message

```sh
pnpm run deploy -- -m "Deploy React app to GitHub Pages"
```

This builds the app and pushes the output to the `gh-pages` branch for GitHub Pages hosting.

## 📁 Project Structure

```
libelula-website/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
└── README.md
```

## 📝 License

This project is for Clínica Libélula.  
See [LICENSE](LICENSE) for details.

---

Made with ❤️ by the Libélula team.