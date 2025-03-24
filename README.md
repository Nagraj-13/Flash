


---

# 🚀 Flash CLI

```
  _____  _              _        ____  _      ___ 
 |  ___|| |  __ _  ___ | |__    / ___|| |    |_ _|
 | |_   | | / _` |/ __|| '_ \  | |    | |     | | 
 |  _|  | || (_| |\__ \| | | | | |___ | |___  | | 
 |_|    |_| \__,_||___/|_| |_|  \____||_____||___|
```

✨ **Fast & Easy Project Scaffolding for React** ✨  
Create pre-configured React projects with **Tailwind, Shadcn, Redux, React-Router-Dom** in seconds!

---

## 🚀 Features

- **Fast setup**: Generates a new project instantly.
- **Preconfigured stack**: Tailwind, Redux, React-Router, and ShadCN.
- **Supports TypeScript & JavaScript**: Choose your preferred template.
- **Automated dependency installation**: Ready-to-use out of the box.

---

## 📦 Installation

use it directly with `npx` :

```sh
npx flash_create my-app
```
 Or

You can install **Flash CLI** globally:

```sh
npm install -g flash_create
```


---

## 🔥 Usage

### Creating a new project

```sh
flash my-app
```

You can also specify a template directly:

```sh
flash my-app --ts   # TypeScript template
flash my-app --js   # JavaScript template
```

If no template is specified, you'll be prompted to choose one.

### Next Steps

Once the setup is complete, it will automaticaly run the Project or if not just navigate to your project and:

```sh
cd my-app
npm run dev
```

---

## 🛠 How It Works

1. **Prompts user for template selection (if not provided via flag).**
2. **Clones the appropriate template** from `Nagraj-13/Flash_Templates`.
3. **Installs dependencies** automatically.
4. **Removes `.git`** to detach from the original repository.
5. **Starts the development server** (`npm run dev`).

---

## 📝 Example Output

```
✨ Fast & Easy Project Scaffolding ✨

📌 Select a template: 💛 JavaScript
🚀 Creating project: my-app (JS)
✅ Project setup completed successfully!
📦 Installing dependencies...

🎉 Project setup complete!

👉 Next steps:
  cd my-app
  npm run dev

🚀 Starting development server...
```

---

## 🔧 Development

### Clone & Test Locally

```sh
git clone https://github.com/Nagraj-13/Flash.git
cd Flash
npm link  # Makes 'flash' command available globally
```

Now, test it:

```sh
flash my-app
```

### Publishing Updates

After making changes:

```sh
npm version patch
npm publish --access public
```

---

## ❓ Troubleshooting

- **Command Not Found?**  
  Run `npx clear-npx-cache` and try again.

- **Project Folder Already Exists?**  
  Use a different name or delete the existing folder.

- **Installation Issues?**  
  Try running `npm cache clean --force` and reinstall.

---

## 🤝 Contributing

Feel free to submit issues or pull requests on [GitHub](https://github.com/Nagraj-13/Flash).

---

## 📜 License

This project is licensed under the **ISC License**.

---

🚀 **Happy Coding!** 🚀