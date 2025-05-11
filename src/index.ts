import { setUser, readConfig } from "../config";

function main() {
  setUser("greg");
  console.log(readConfig());
}

main();