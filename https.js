const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (res) => {

    console.log(res.statusCode);

    console.log(res.headers);

    let body = '';

    res.on('data', (data) => {
        console.log(data);
        body += data;
    });

    res.on('end', () => {
        console.log(body);
    }).on('error', (error) => {
        console.error(error.message);
    })
});

// https://youtu.be/CDr5UljhzNY
