// To run this file with node, do the following
// in your terminal:
// node helloWorld.js
console.log("Hello World");

console.log(process.argv[2]);

if (process.argv[2] === "dev") {
  console.log("we are running in dev environement");
} else {
  console.log("we are running in production environment");
}
