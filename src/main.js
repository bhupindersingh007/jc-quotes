const showQuote = async () => {

    // jc quotes api - https://www.jcquotes.com/
    let response = await fetch('https://www.jcquotes.com/api/quotes/random');

    let quote = await response.json();

    document.querySelector('#quote').textContent = quote.text;

    document.querySelector('#source').setAttribute('href', quote.source);

};

showQuote();