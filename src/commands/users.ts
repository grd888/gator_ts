import { setUser } from "../config";

export function handlerLogin(cmdName: string, ...args: string[]) {
  if (!args.length) {
    throw new Error(`usage: ${cmdName} <name>`);
  }

  const userName = args[0];

  setUser(userName);
  console.log(`Username set to ${userName}`);
}