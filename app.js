window.onload = init;
function init(){
    generateQuote()
}

var images = [];

images[0] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450902/WebAssets/img1_iopwa4.jpg)"
images[1] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450898/WebAssets/img3_orlbpd.jpg)"
images[2] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450902/WebAssets/img4_tmxicc.jpg)"
images[3] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450910/WebAssets/img5_slrcdw.png)"
images[4] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450900/WebAssets/img7_mhr9fh.jpg)"
images[5] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450898/WebAssets/img8_wewfc0.jpg)"
images[6] = "url(https://res.cloudinary.com/prblack/image/upload/v1609459784/WebAssets/img9a_zhoika.jpg)"
images[7] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450899/WebAssets/img10_gppw3b.jpg)"
images[8] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450898/WebAssets/img11_o5dxmm.jpg)"
images[9] = "url(https://res.cloudinary.com/prblack/image/upload/v1609450898/WebAssets/img12_udt0xx.jpg)"

function changeImages(){
    let allImages = Math.floor(Math.random() * images.length);
    var el = document.getElementById('background');
    el.style.backgroundImage = images[allImages];
    for (var i = 0; i < allImages; i++){
        if(i < images.length - 1) {
            i++;
        } else {
        i = 0;
        }
    }

}

function generateQuote(){
    let allQuotes = QUOTEBANK.length;
    let quoteIndex = Math.floor(Math.random() * allQuotes);
    let randomQuote = QUOTEBANK[quoteIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=GoT&related=&text="
    let tumblrLink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=GoTquotes,GameOfThrones&caption=" +
    encodeURIComponent(randomQuote.character) + "&content=" + encodeURIComponent(randomQuote.quotes) +
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

    // add quote
    let apiFormatQuote = randomQuote.quotes.replace(/ /g, "%20");
    twitterLink += apiFormatQuote;

    // add author
    let apiFormatAuthor = randomQuote.character.replace(/ /g, "%20");
    twitterLink += " - " + apiFormatAuthor;

    document.getElementById("text").innerText = randomQuote.quotes;
    document.getElementById("author").innerText = randomQuote.character;
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("tumblr-quote").href = tumblrLink;

    changeImages()
}



