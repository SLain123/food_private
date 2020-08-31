'use strict';

const sendPost = async (url, data) => {
    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await request.json();
};

const getData = async url => {
    const request = await fetch(url);
    if(!request.ok) {
        throw new Error(`Не удалось получить данные из ${request.url}, статус ${request.status}`);
    }
    return await request.json();
};

export {sendPost, getData};