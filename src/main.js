function add(cb) {
  cb();
}
function callback() {
  console.log("cllback");
}
add(callback);
