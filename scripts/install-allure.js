const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const allureDir = path.join(__dirname, "../node_modules/allure-commandline");

try {
  // Vérifier si Allure est déjà installé
  execSync("allure --version", { stdio: "ignore" });
  console.log("✅ Allure est déjà installé");
} catch (error) {
  console.log("🔧 Installation d'Allure Commandline...");
  try {
    // Installer via npm si nécessaire
    execSync("npm install allure-commandline --save-dev", { stdio: "inherit" });
    console.log("✅ Allure Commandline installé avec succès");
  } catch (installError) {
    console.error("❌ Échec de l'installation d'Allure:", installError.message);
    process.exit(1);
  }
}
