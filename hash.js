// node hash-password.js
import bcrypt from "bcrypt";

const password = "VishalSingh@#12"; // change this
const saltRounds = 10;

const run = async () => {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("HASH:", hash);
};
run();
