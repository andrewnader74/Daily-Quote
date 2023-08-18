var quotesArray = 
[
{
   siteQuote:"Be yourself; everyone else is already taken.",
    quoteAuthor:"--Oscar Wilde"
},
{
    siteQuote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    quoteAuthor:"--Marilyn Monroe"
},

{
    siteQuote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    quoteAuthor:"--Albert Einstein"
},
{
    siteQuote:"So many books, so little time",
    quoteAuthor:"--Frank Zappa"
},
{
    siteQuote:"A room without books is like a body without a soul",
    quoteAuthor:"--Marcus Tullius Cicero"
},
{
    siteQuote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    quoteAuthor:"--Bernard M. Baruch"
},
{
    siteQuote:"You only live once, but if you do it right, once is enough.",
    quoteAuthor:"--Mae West"
},

];


function generateQuote() 
{
    var x = Number(Math.floor((Math.random() * quotesArray.length) + 1)) ;

    document.getElementById('quote').innerHTML= quotesArray[x].siteQuote
    document.getElementById('quoteauthor').innerHTML= quotesArray[x].quoteAuthor

}

