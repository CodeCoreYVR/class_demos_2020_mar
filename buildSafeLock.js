const safe = 714;
let password = "cryptic";
let userPassword = process.argv[2];

if (userPassword === undefined) {
  console.log("Password argument is required");
} else if (userPassword === password) {
  console.log("Opensesame");
  console.log(`Secret number is ${safe}`);
} else {
  console.log("failure");
}
