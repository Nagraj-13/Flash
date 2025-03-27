#!/usr/bin/env node

import { execSync } from "child_process";
import path from "path";
import fs from "fs";
import inquirer from "inquirer";
import degit from "degit";
import chalk from "chalk";
import figlet from "figlet";

const repoBase = "Nagraj-13/Flash_Templates";
const repoPaths = {
  ts: "TS_Template",
  js: "JS_Template",
  backend: "Server_Template",
};

// Display ASCII banner
console.log(chalk.cyan(figlet.textSync("Flash CLI", { horizontalLayout: "fitted" })));

console.log(chalk.magenta("✨ Fast & Easy Project Scaffolding ✨\n"));

// Get command-line arguments
const args = process.argv.slice(2);
const projectName = args.find((arg) => !arg.startsWith("-")) || "my-app";
const projectPath = path.join(process.cwd(), projectName);

// Check if the directory already exists
if (fs.existsSync(projectPath)) {
  console.log(chalk.red(`❌ Error: Directory "${projectName}" already exists.`));
  process.exit(1);
}

// Determine template selection method
const templateFlag = args.includes("--js") ? "js" : args.includes("--ts") ? "ts" : null;

// Function to execute shell commands
const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(chalk.red(`❌ Error: ${error.message}`));
    process.exit(1);
  }
};

// Function to prompt the user if no flag is provided
const promptUser = async () => {
  if (templateFlag) return templateFlag;

  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "📌 Select a template:",
      choices: [
        { name: "💙 TypeScript", value: "ts" },
        { name: "💛 JavaScript", value: "js" },
        { name: "🤍 Backend", value: "backend" },
      ],
    },
  ]);

  return template;
};

// Main function to set up the project
const setupProject = async () => {
  const template = await promptUser();
  const repoPath = repoPaths[template];

  console.log(chalk.green(`🚀 Creating project: ${projectName} (${template.toUpperCase()})`));

  // Clone the specific template folder using degit
  const emitter = degit(`${repoBase}/${repoPath}`, { force: true });

  try {
    await emitter.clone(projectPath);
    console.log(chalk.blue("✅ Project setup completed successfully!"));
  } catch (error) {
    console.error(chalk.red(`❌ Failed to setup the project: ${error.message}`));
    process.exit(1);
  }

  process.chdir(projectPath);

  // Remove .git folder to detach from original repo
  if (fs.existsSync(".git")) {
    fs.rmSync(".git", { recursive: true, force: true });
  }

  console.log(chalk.blue("📦 Installing dependencies..."));
  runCommand("npm install");

  console.log(chalk.green("🎉 Project setup complete!"));
  console.log(chalk.yellow(`\n\n👉 Next steps:\n  cd ${projectName}\n  npm run dev`));
  if(template === "backend") {
    console.log(chalk.yellow(`  create a .env file in the root directory and add the following variables:\n  PORT=5000\n  MONGO_URL=your_mongo_uri   \nCORS_ORIGIN='*'`));
  }else{
    console.log(chalk.blue("🚀 Starting development server..."));
    runCommand("npm run dev");
  }

};

setupProject();
