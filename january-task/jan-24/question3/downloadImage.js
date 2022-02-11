function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        callback(url);
    }, 1000);
  }
const url1 = 'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg';
const url2 = 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg'; 
download(url1, function (url) {
console.log(`Downloaded ${url}`);
download(url2, function (url) {
console.log(`Downloaded ${url}`);
});
});