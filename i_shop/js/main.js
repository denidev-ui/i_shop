console.log('work!')

async function getData() {
    let data = await fetch(
        'https://audiopl-5219a.firebaseio.com/Like.json'
    );
    let main = await data.json();
    console.log(main)
}

getData();