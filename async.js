function clown() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('message will show after 2 seconds..');
        }, 2000)
    })
}
async function msg() {
    const msg = await clown();
    console.log(msg);
}
msg();
