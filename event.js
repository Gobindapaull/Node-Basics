const first = () => console.log('first');
const second = () => console.log('second');

const third = () => {
    console.log('third');
    setTimeout(first, 2000);
    second();
}
third();
