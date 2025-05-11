import fs from "fs";
import os from "os";
import path from "path";

type Config = {
  dbUrl: string;
  currentUserName: string;
}

export function readConfig(): Config {
  const configPath = getConfigFilePath();
  const rawConfig = fs.readFileSync(configPath, "utf-8");
  const cfg = JSON.parse(rawConfig);
  return validateConfig(cfg);
}

export function setUser(userName: string) {
  const cfg = readConfig();
  cfg.currentUserName = userName;
  writeConfig(cfg);
}

function getConfigFilePath(): string {
  return path.join(os.homedir(), ".gatorconfig.json");
}

function writeConfig(cfg: Config) {
  const configPath = getConfigFilePath();
  fs.writeFileSync(configPath, JSON.stringify(cfg));
}

function validateConfig(rawConfig: any): Config {
  if (typeof rawConfig !== "object") {
    throw new Error("Config must be an object");
  }
  if (typeof rawConfig.dbUrl !== "string") {
    throw new Error("Config must have a dbUrl string");
  }
  return rawConfig as Config;
}
  