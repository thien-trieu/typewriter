const sentence = "hello there from lighthouse labs";

let newStr = sentence + "\n";
let ms = 0;


for (let char of newStr) {

  setTimeout(() => {
    process.stdout.write(char);

  }, ms);
  ms += 50;

}

