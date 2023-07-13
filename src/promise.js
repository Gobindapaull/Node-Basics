let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve('run before'), 1000);
});
promise.then(
    (result) => {
        console.log(result);
        getMessage();
    },
    (error) => {
        console.log(error);
    }
)
function getMessage() {
    console.log('run after result');
}
