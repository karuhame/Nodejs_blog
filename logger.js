var url = 'sondeptrainhat';

function log(){
    console.log(url);
}
// có thể dùng module.export = log để gán giá trị là 1 function => khi gọi ra thì gọi logger();
module.exports.log = log;
console.log(__dirname);