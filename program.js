process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case "/exit":
        process.stdout.write("Quiting application!\n");
        process.exit();
        break;
      case "/env":
        console.log("Language: " + process.env.LANG);
        console.log("Node version: " + process.versions.node);
        break;
      default:
        process.stderr.write("Wrong instruction!\n");
    }
  }
});
