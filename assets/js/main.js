console.log("test");


/* 

API
https://newsapi.org/



Bonus: 
Anzeige nach Sprache
Über Schlüsselwort suchen

WICHTIG:
Wenn du eine Fehlermeldung mit “corsNotAllowed” bekommst:
Nutze kein https, sondern http!


*/


/************************************************************************************************
 * 
 * Hier fetch der am Anfang mal News über Bitcoins holt
 * damit die Seite gefüllt ist
 * 
 ************************************************************************************************/

const fetchUrlFinden = `https://newsapi.org/v2/everything?q=bitcoins&apiKey=d1bac37fa63346329db5ce20423e0671`
console.log(fetchUrlFinden);

fetch(fetchUrlFinden)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        fake_fetch_function(data)

        // !!! Ende fetch 
    })




const outputField = document.querySelector("#outputField");

const suchLeiste = document.querySelector("#suchLeiste");

const btnFinden = document.querySelector("#btnFinden");
let suchLeiste_Value = "";



/************************************************************************************************
 * 
 *  hier wird eine suchLeiste mit inhalt gefüllt 
 * und die überschreibt dann die default Daten von Bitcoin, die weiter unten geladen werden
 *  
 * 
 ************************************************************************************************/
btnFinden.addEventListener("click", () => {
    suchLeiste_Value = suchLeiste.value;
    console.log(suchLeiste_Value);
    const h1 = document.querySelector("h1");
    h1.innerText = `News über ${suchLeiste_Value}`;

    const fetchUrlFinden = `https://newsapi.org/v2/everything?q=${suchLeiste_Value}&apiKey=d1bac37fa63346329db5ce20423e0671`
    console.log(fetchUrlFinden);

    fetch(fetchUrlFinden)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            fake_fetch_function(data)

            // !!! Ende fetch 
        })

/*         console.log(suchLeiste_Value)

        const bildImg_Url_unsplash = `https://unsplash.com/napi/search?query=${suchLeiste_Value}&per_page=20`
        console.log(bildImg_Url_unsplash)

        fetch(bildImg_Url_unsplash)
            .then(response => response.json())
            .then(data => {
                console.log(data)

            }) */

          
        
     
        /* 
        
        https://unsplash.com/napi/search?query=hund&per_page=20
        
        */



    // !!! Ende Event Listener
})  




/************************************************************************************************
 * 
 *  hier jetzt den code rein, was man praktisch im fetch machen würde ;-)
 *  !!! hier wirds zusammengebaut
 * 
 ************************************************************************************************/
// hier jetzt den code rein, was man praktisch im fetch machen würde ;-)
// !!! hier wirds zusammengebaut
function fake_fetch_function(data) {

    outputField.innerHTML = "";    //  soll alles leer machen

    // Muster
    /* 
            <section>
                <article>
    
                    <a href=" - url - "> <img src=" - urlToImage - " alt="Bild - titel - "> </a>
                </article>
                <article>
                    <h2>titel</h2>
                    <p>description</p> // kürzen evtl. zu lang
                    <h5>publishedAt</h5>
    
                    <a href=" - url - "> <button>lese mehr</button> </a>
    
                </article>
            </section>
    */
    // data ist kein Array sonder object
    console.log(typeof (data)) // object
    console.log(Array.isArray(data)) // false
    console.log(data)

    data.articles.forEach(element => {
        console.log(element)
        
        

        outputField.innerHTML += `

<section class="data_Section">
<article>

    <a href="${element.url}"> <img src="${element.urlToImage}" alt="es gibt kein Bild zu:  --> ${element.title}"> </a>
</article>
<article>
    <h2>${element.title}</h2>
    <p>${element.description}</p>
    <h5>${element.publishedAt.slice(0, 10)}</h5>

    <a href="${element.url}"> <button>lese mehr, klick mich oder das Bild</button> </a>

</article>
</section>
`

        // !!! Ende forEach
    })

    // !!! Ende fake_fetch_function
}


/************************************************************************************************
 * 
 *  hier Daten hart als Variablen
 *  
 * 
 ************************************************************************************************/
// !! Daten hart aus dem Browser Console mit F12 copy and paste holen
// !!! zu Testzwecken, damit man nicht ständig       anfragen an Server braucht und Kontingent verbraucht
// speichert sich praktisch die Daten von Server lokal ab
// so muss man nicht ständig anfragen stellen, denn man hat ja auch nur 
// !! const data
/* 
const data = {

    
        "status": "ok",
        "totalResults": 13890,
        "articles": [
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Joel Khalili",
                "title": "Bitcoin Investors Are Plotting a Major Coup",
                "description": "A group of activist shareholders at the world's largest bitcoin investment trust claim they lost billions as the market tanked. Now they want to take control.",
                "url": "https://www.wired.com/story/crypto-bitcoin-grayscale-coup/",
                "urlToImage": "https://media.wired.com/photos/63ea75bd69cf98bf3540429b/191:100/w_1280,c_limit/Coup-D'etat-In-Bitcoin-Land-Business.mp4",
                "publishedAt": "2023-02-14T12:00:00Z",
                "content": "Like Valkyrie, Osprey has called on Grayscale to step down as sponsor and put itself forward as a replacement. In an open letter, Osprey CEO Greg King promised to cut the management fee by 75 percent… [+2998 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Boone Ashworth",
                "title": "OnePlus Pad Android Tablet: Details, Specs, Release Date",
                "description": "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
                "url": "https://www.wired.com/story/oneplus-pad-android-tablet/",
                "urlToImage": "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
                "publishedAt": "2023-02-11T14:00:00Z",
                "content": "Theres no shortage of tablets in the world, from the ever-dominant iPad to an assortment of Android options and Fire tabs to the niche weirdos like the E-ink and stylus Kindle Scribe. Now, OnePlus, a… [+4068 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Mack DeGeurin",
                "title": "El Salvador Is Planning a 'Bitcoin Embassy' in Texas After Losing Tens of Millions on Crypto",
                "description": "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial president’s beleaguered effort to embrace cryptocurrencies, now says it plans to open a “bitcoin embassy” in Texas. The Central American country’s continu…",
                "url": "https://gizmodo.com/bitcoin-price-el-salvador-embassy-texas-crypto-crash-1850118217",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ccb1cf72839bb2d47936bf0eadf47da0.jpg",
                "publishedAt": "2023-02-15T18:03:53Z",
                "content": "El Salvador, which has already lost tens of millions of taxpayer dollars on its authoritarian millennial presidents beleaguered effort to embrace cryptocurrencies, now says it plans to open a bitcoin… [+2879 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptoverse: Big investors edge back to bitcoin - Reuters",
                "description": "Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.",
                "url": "https://www.reuters.com/technology/cryptoverse-big-investors-edge-back-bitcoin-2023-01-31/",
                "urlToImage": "https://www.reuters.com/resizer/wVEBWtf3RmkXKgyvKm8NmhJ80-U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FE2DLHQ4UBOOPNWFOIS34JBLP4.jpg",
                "publishedAt": "2023-01-31T06:01:08Z",
                "content": "Jan 31 (Reuters) - Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.\r\nDigital asset investment products, often favored by institutional investors, saw in… [+4079 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptoverse: Bitcoin is back with a bonk - Reuters",
                "description": "Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.",
                "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-is-back-with-bonk-2023-01-17/",
                "urlToImage": "https://www.reuters.com/resizer/jPD5gWOp4iaNFHGJCoc9M20WksQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MLQZOZNWTZLSRJTK4RZJLSI364.jpg",
                "publishedAt": "2023-01-17T06:16:00Z",
                "content": "Jan 17 (Reuters) - Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.\r\nThe No.1 cryptocurrency has clocked a 26% gain in January, leapi… [+4367 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Davos 2023: Scaramucci's SkyBridge bets on $35k bitcoin, targets ... - Reuters.com",
                "description": "SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view was \"overly bullish\".",
                "url": "https://www.reuters.com/technology/davos-2023-scaramuccis-skybridge-bets-35k-bitcoin-targets-credit-2023-01-16/",
                "urlToImage": "https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg",
                "publishedAt": "2023-01-16T17:56:00Z",
                "content": "DAVOS, Switzerland, Jan 16 (Reuters) - SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view … [+1366 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Silvergate and other crypto-linked stocks climb as bitcoin notches its highest price in 5 months",
                "description": "Silvergate stock surged more than 12% on Monday after bitcoin hit $23,000 over the weekend.",
                "url": "https://markets.businessinsider.com/news/stocks/silvergate-stock-price-si-coinbase-coin-crypto-bitcoin-notches-highs-2023-1",
                "urlToImage": "https://i.insider.com/63cea934b9a04b0019eda8ef?width=1200&format=jpeg",
                "publishedAt": "2023-01-23T17:20:50Z",
                "content": "Silvergate and other crypto-linked stocks are climbing after bitcoin notched a five-month high over the weekend.\r\nThe crypto-focused bank is up over 12% at $15.45 on Monday, after diving earlier this… [+2724 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "Warren Buffett's business partner rips into 'cryptocrappo' - and says he's ashamed of America for embracing bitcoin and its kin",
                "description": "Charlie Munger eviscerated the likes of bitcoin and dogecoin, dismissing them as stupid, worthless, and dangerous.",
                "url": "https://markets.businessinsider.com/news/currencies/charlie-munger-warren-buffett-daily-journal-crypto-currency-bitcoin-regulation-2023-2",
                "urlToImage": "https://i.insider.com/63edf9cb1d14070018bafbf1?width=1200&format=jpeg",
                "publishedAt": "2023-02-16T11:14:48Z",
                "content": "It's fair to say that Charlie Munger isn't the biggest fan of cryptocurrencies.\r\n\"Sometimes I call it cryptocrappo and sometimes I call it, well, cryptoshit,\" the billionaire investor said during Dai… [+2118 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "El Salvador is opening a 'bitcoin embassy' in Texas in a bid to promote more acceptance of crypto",
                "description": "El Salvador is reaching again beyond its borders to broaden its bitcoin strategy, following a partnership it struck with Switzerland last year.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-el-salvador-cryptocurrency-embassy-texas-curreproject-adoption-bukele-2023-2",
                "urlToImage": "https://i.insider.com/61df129d1025b20018bb5d05?width=1200&format=jpeg",
                "publishedAt": "2023-02-15T20:00:16Z",
                "content": "El Salvador is planning to open a \"Bitcoin Embassy\" in the US, continuing to push for wider adoption of the cryptocurrency even after losing millions of dollars on its high-profile bets on the token.… [+1572 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Is bitcoin being manipulated? A professor who proved it in 2017 sees more red flags, report says.",
                "description": "\"In a period of highly negative sentiment, we've seen suspiciously solid floors under bitcoin,\" finance professor John Griffin told Fortune.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-manipulation-token-crypto-markets-ether-btc-ftx-griffin-2023-2",
                "urlToImage": "https://i.insider.com/63dbc4cb0a08ae0018a6767b?width=1200&format=jpeg",
                "publishedAt": "2023-02-02T15:25:38Z",
                "content": "After a dismal outing last year, bitcoin has skyrocketed more than 40% to start the new year. But John Griffin, a finance professor at the University of Texas McCombs School of Business, thinks there… [+2506 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Cathie Wood's Ark Invest says bitcoin could hit $1.5 million by 2030, doubling down on its bullishness for the world's largest cryptocurrency",
                "description": "Ark Invest's bull case for bitcoin is $1.48 million, while its base case is $682,800 by 2030.",
                "url": "https://markets.businessinsider.com/news/currencies/cathie-wood-bitcoin-price-ark-invest-crypto-market-outlook-2030-2023-2",
                "urlToImage": "https://i.insider.com/61dede7a1025b20018bb4cfd?width=1200&format=jpeg",
                "publishedAt": "2023-02-01T16:39:45Z",
                "content": "Cathie Wood's Ark Investment Management said bitcoin could hit $1.48 million by 2030, a 6,326% increase from its current price.\r\nThat's under its bull-case scenario, while its base case sees bitcoin … [+2018 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "Expect bitcoin to top $50,000 again within a few years, Anthony Scaramucci says – as crypto markets start 2023 with a bang",
                "description": "Investors are piling back into crypto markets, with bitcoin jumping 26% and ethereum up 29% year-to-date.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-bitcoin-price-outlook-anthony-scaramucci-ethereum-market-rally-ftx-2023-1",
                "urlToImage": "https://i.insider.com/63c543bfbcd21800196b7c10?width=1200&format=jpeg",
                "publishedAt": "2023-01-16T13:30:32Z",
                "content": "Bitcoin could top $50,000 in a few years' time as cryptocurrencies rebound from a nightmare year, according to Anthony Scaramucci.\r\nThe SkyBridge Capital founder said he's anticipating that 2023 will… [+1821 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Grayscale would appeal lawsuit against SEC if court rejects case ... - Reuters",
                "description": "Crypto asset manager Grayscale Investments is gearing up for a prolonged legal fight with the U.S. Securities and Exchange Commission to create a spot bitcoin exchange-traded fund, the company’s chief executive officer said.",
                "url": "https://www.reuters.com/technology/grayscale-would-appeal-lawsuit-against-sec-if-court-rejects-case-ceo-says-2023-01-25/",
                "urlToImage": "https://www.reuters.com/resizer/koRr6wzvqUCPOgJi5PPl7pgisIU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LL4HSL6N7FIZDCZW7D4JZM5WKU.jpg",
                "publishedAt": "2023-01-25T05:35:00Z",
                "content": "Jan 25 (Reuters) - Crypto asset manager Grayscale Investments is gearing up for a prolonged legal fight with the U.S. Securities and Exchange Commission to create a spot bitcoin exchange-traded fund,… [+2795 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "rhogg@insider.com (Ryan Hogg)",
                "title": "Tesla's bitcoin holdings fell nearly $1.8 billion in value last year, as Elon Musk called crypto a 'sideshow'",
                "description": "A bloodbath for crypto in 2022 saw Tesla's $1.5 billion bet on bitcoin backfire, as Elon Musk's carmaker dumped at least 75% of its position.",
                "url": "https://markets.businessinsider.com/news/currencies/tesla-crypto-bitcoin-elon-musk-fall-value-holdings-2022-sideshow-2023-2",
                "urlToImage": "https://i.insider.com/631567f8ed92be0018c5dd1d?width=1200&format=jpeg",
                "publishedAt": "2023-02-02T11:34:25Z",
                "content": "Tesla's bitcoin hoard plummeted by nearly $1.8 billion last year, as Elon Musk's carmaker dumped a big chunk of its holdings and cryptocurrency prices slumped.\r\nThe value of its \"fair market holdings… [+2222 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Exclusive: Binance moved $346 mln for seized crypto exchange ... - Reuters",
                "description": "Crypto giant Binance processed almost $346 million in bitcoin for the Bitzlato digital currency exchange, whose founder was arrested by U.S. authorities last week for allegedly running a \"money laundering engine,\" blockchain data seen by Reuters show.",
                "url": "https://www.reuters.com/business/finance/binance-moved-346-mln-seized-crypto-exchange-bitzlato-data-show-2023-01-24/",
                "urlToImage": "https://www.reuters.com/resizer/VltdzWQaz6Z8ait4zgD0qM7Vb6I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OPTKETLDXFNMXKBZPSFJGIBNAU.jpg",
                "publishedAt": "2023-01-24T12:01:00Z",
                "content": "LONDON, Jan 24 (Reuters) - Crypto giant Binance processed almost $346 million in bitcoin for the Bitzlato digital currency exchange, whose founder was arrested by U.S. authorities last week for alleg… [+6455 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Investors are pouring cash into crypto at the highest level in 6 months as risk appetite returns and bitcoin wraps up best January since 2013",
                "description": "Investors made a large shift away from short-bets on bitcoin last week. The token's price has climbed about 40% in January.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-cryptocurrency-gains-assets-inflows-bulls-investing-digital-btcusd-2023-1",
                "urlToImage": "https://i.insider.com/62d8aec20c98f500195ec74f?width=1200&format=jpeg",
                "publishedAt": "2023-01-30T19:56:41Z",
                "content": "Inflows into cryptocurrency investment products more than tripled last week, with the swift spike concentrated in bitcoin as the world's most popular token headed for its strongest January performanc… [+1506 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "kduffy@insider.com (Kate Duffy)",
                "title": "Disney drops 'Simpsons' episode in Hong Kong in which character references 'forced labor camps' in China, reports say",
                "description": "A character in the Simpsons episode says: \"Behold the wonders of China: Bitcoin mines, forced labor camps where children make smartphones.\"",
                "url": "https://www.businessinsider.com/disney-remove-simpsons-episode-china-forced-labor-camps-hong-kong-2023-2",
                "urlToImage": "https://i.insider.com/63e0f36fe33c4000193b08ce?width=1200&format=jpeg",
                "publishedAt": "2023-02-06T14:10:39Z",
                "content": "Disney has scrubbed from its streaming service in Hong Kong an episode of \"The Simpsons\" that refers to \"forced labor camps\" in China, the Financial Times first reported Monday.\r\nIn the episode, enti… [+1699 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "'Black Swan' author Nassim Taleb warns stocks are hugely overvalued, and the easy-money era is over for investors",
                "description": "Taleb said the stock market is too expensive relative to current interest rates, championed Warren Buffett's investing style, and trashed bitcoin.",
                "url": "https://markets.businessinsider.com/news/stocks/black-swan-taleb-stock-market-outlook-fed-warren-buffett-bitcoin-2023-2",
                "urlToImage": "https://i.insider.com/63da627b0a08ae0018a64cb2?width=1200&format=jpeg",
                "publishedAt": "2023-02-01T14:55:24Z",
                "content": "Investors should brace for asset prices to plummet, interest rates to remain elevated, and outsized returns to dry up, Nassim Taleb has warned.\r\nThe Universa Investments adviser and author of \"The Bl… [+3016 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "Kraken will stop offering crypto 'staking' and pay a $30 million penalty after settling with the SEC",
                "description": "Cryptos stumbled, with bitcoin and ethereum both falling as concerns built about a crackdown on income-generating technique \"staking\" by the regulator.",
                "url": "https://markets.businessinsider.com/news/currencies/what-is-crypto-staking-kraken-sec-settlement-penalty-gary-gensler-2023-2",
                "urlToImage": "https://i.insider.com/63e610ec27e5db0018ef0b16?width=1200&format=jpeg",
                "publishedAt": "2023-02-10T10:48:39Z",
                "content": "Kraken has agreed to stop offering crypto \"staking\" services and pay $30 million as part of a settlement with US regulators over charges it failed to register the yield-bearing program.\r\nThat meant t… [+2519 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Investor sentiment has become 'extremely greedy' and that makes the market fragile, says Fairlead's Katie Stockton",
                "description": "\"Sentiment has now gotten what we call sort of extremely greedy. You can see it maybe yesterday in bitcoin,\" according to Farilead's Katie Stockton.",
                "url": "https://markets.businessinsider.com/news/stocks/investor-sentiment-greedy-fragile-stock-market-outlook-sp500-technical-analysis-2023-2",
                "urlToImage": "https://i.insider.com/63c03c6033ffb700180f79e8?width=1200&format=jpeg",
                "publishedAt": "2023-02-16T20:30:15Z",
                "content": "After strong start to the year, the stock market now looks vulnerable as investors appear to be overdoing it, according to Fairlead Strategies' Katie Stockton. \r\nJanuary in particular saw some encour… [+1551 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Crypto is now toxic on Wall Street and an overwhelming majority of traders refuse to touch it this year, according to a JPMorgan survey",
                "description": "A JPMorgan survey of institutional traders found that 72% don't plan on trading cryptocurrencies or digital assets this year.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-toxic-wall-street-traders-2023-outlook-ftx-bankruptcy-sbf-2023-2",
                "urlToImage": "https://i.insider.com/633af20a6427060019ef0fac?width=1200&format=jpeg",
                "publishedAt": "2023-02-01T18:25:57Z",
                "content": "Crypto tokens may have finally lost their shine on Wall Street, despite signs of strength to start the year in big-cap tokens like bitcoin and ether. \r\nBut despite the recent strength, 72% of traders… [+1436 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "EditorDavid",
                "title": "Bitcoin's 2023 Price Rise 'Very Suspicious', Says Manipulation Researcher",
                "description": "In 2017 the New York Times covered research co-authored by John Griffin, a finance professor at the University of Texas, into Hong Kong-based Bitfinex, \"one of the largest and least regulated exchanges in the industry.\"\n\nMr. Griffin looked at the flow of digi…",
                "url": "https://slashdot.org/story/23/02/04/0443239/bitcoins-2023-price-rise-very-suspicious-says-manipulation-researcher",
                "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
                "publishedAt": "2023-02-04T17:34:00Z",
                "content": "In 2017 the New York Times covered research co-authored by John Griffin, a finance professor at the University of Texas, into Hong Kong-based Bitfinex, \"one of the largest and least regulated exchang… [+3441 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Sam Silverman",
                "title": "'They Don't Want to Be Left in the Past': 82% of Millionaires Are Not Deterred From Crypto in the Wake of Sam Bankman-Fried's FTX Collapse",
                "description": "Despite the volatile nature of crypto, millionaires still want to be ahead of the curve.",
                "url": "https://www.entrepreneur.com/business-news/millionaires-are-still-seeking-crypto-advice-despite-ftx/444007",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1675180545-GettyImages-1390011916.jpg",
                "publishedAt": "2023-01-31T15:36:00Z",
                "content": "Millionaires aren't shying away from crypto despite a year of scandal and big losses.\r\nGetty Images\r\nAlthough the fallout the Sam Bankman-Fried's FTX collapse and a \"crypto winter\" are still ongoing,… [+1947 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
                "title": "Paul Krugman says bitcoin could be losing out to the 'pet rock of ages' gold because scandals are denting faith in crypto",
                "description": "Some investors are losing faith in fashionable technobabble and turning to gold, \"the pet rock of ages\", Nobel Prize winner Paul Krugman has suggested.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-gold-tesla-paul-krugman-performance-fed-rates-2023-1",
                "urlToImage": "https://i.insider.com/52fe5c2a6da811de53063b86?width=1200&format=jpeg",
                "publishedAt": "2023-01-23T18:16:40Z",
                "content": "Some investors could be ditching bitcoin in favor of gold as crypto scandals tarnish confidence in digital assets, Paul Krugman has suggested.\r\nThe Nobel Prize-winning economist noted prices for the … [+2710 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Ted Cruz wants lawmakers who get the munchies to use crypto at Congressional vending machines",
                "description": "Crypto should be accepted to buy candy and gifts at the Capitol, says Senator Cruz in another run at getting his resolution passed.",
                "url": "https://markets.businessinsider.com/news/currencies/ted-cruz-bitcoin-crypto-capitol-vending-machines-snacks-congress-cryptocurrency-2023-1",
                "urlToImage": "https://i.insider.com/5ff0b2cca18a450018cb685c?width=1200&format=jpeg",
                "publishedAt": "2023-01-27T15:19:40Z",
                "content": "Senator Ted Cruz is pushing for the wider adoption of cryptocurrency, and one route may be through his fellow Capitol Hill lawmakers seeking to satisfy their sugar cravings. \r\nThe Texas lawmaker this… [+1900 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Ray Dalio warns 'money as we know it is in jeopardy' and favors an inflation-linked cryptocurrency over bitcoin",
                "description": "The Bridgewater Associates founder also told CNBC that he sees China's yuan and digital renminbi making gains.",
                "url": "https://markets.businessinsider.com/news/currencies/ray-dalio-china-yuan-vs-dollar-bitcoin-inflation-linked-crypto-2023-2",
                "urlToImage": "https://i.insider.com/61d4b2a657bd6c0018588e39?width=1200&format=jpeg",
                "publishedAt": "2023-02-02T16:38:20Z",
                "content": "Bridgewater Associates founder Ray Dalio warned Thursday of a looming currency crisis and that an inflation-linked cryptocurrency would be safer than bitcoin. \r\nIn an interview with CNBC, he asserted… [+1934 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "author": "Gabriel Erard",
                "title": "Qué es Ordinals y cómo ha llevado la fiebre por los NFT a Bitcoin",
                "description": "Hablar de NFTs almacenados en la blockchain de Bitcoin es algo que, hasta hace poco, parecía imposible. Para los bitcoiners más conservadores era (es) una blasfemia, lisa y llanamente. Sin embargo, un nuevo protocolo llamado Ordinals llegó para cambiar la his…",
                "url": "http://hipertextual.com/2023/02/que-es-ordinals-nft-bitcoin",
                "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/02/btc.jpg?fit=2048%2C1364&quality=55&strip=all&ssl=1",
                "publishedAt": "2023-02-14T08:00:00Z",
                "content": "Hablar de NFTs almacenados en la blockchain de Bitcoin es algo que, hasta hace poco, parecía imposible. Para los bitcoiners más conservadores era (es) una blasfemia, lisa y llanamente. Sin embargo, u… [+5358 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "FBI says N. Korea-related hacker groups behind U.S. crypto firm heist - Reuters",
                "description": "Two hacker groups associated with North Korea, the Lazarus Group and APT38, were responsible for the theft last June of $100 million from U.S. crypto firm Harmony's Horizon bridge, the Federal Bureau of Investigation said on Monday.",
                "url": "https://www.reuters.com/technology/fbi-says-n-korea-related-hacker-groups-behind-us-crypto-firm-heist-2023-01-24/",
                "urlToImage": "https://www.reuters.com/resizer/_aSRdlb3j5cI8Ixl7zka1zHHoBc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OLQ4SG7XWRMB3PXB4JRZMDUXSQ.jpg",
                "publishedAt": "2023-01-24T01:06:32Z",
                "content": "Jan 23 (Reuters) - Two hacker groups associated with North Korea, the Lazarus Group and APT38, were responsible for the theft last June of $100 million from U.S. crypto firm Harmony's Horizon bridge,… [+1180 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Coinbase soars 10% as crypto markets rally and bitcoin notches highest price since September",
                "description": "The move higher comes as crypto prices enjoy a sustained rally, with the industry's market cap reclaiming $1 trillion over the weekend.",
                "url": "https://markets.businessinsider.com/news/stocks/coinbase-stock-price-soars-crypto-markets-rally-bitcoin-extends-gains-2023-1",
                "urlToImage": "https://i.insider.com/63c6f31d17227d00187c2759?width=1200&format=jpeg",
                "publishedAt": "2023-01-17T21:01:20Z",
                "content": "Coinbase surged more than 10% on Tuesday, trading at $53 per share as the wider crypto market enjoys a week-long rally.\r\nThe move in Coinbase stock comes as cryptocurrency prices continue their uptic… [+1361 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Digital Currency Group is reportedly selling shares from its most prized crypto funds at a steep discount as the digital asset giant navigates financial woes",
                "description": "Digital Currency Group told Insider that offloading assets \"is simply part of our ongoing portfolio rebalancing.\"",
                "url": "https://markets.businessinsider.com/news/currencies/dcg-digital-currency-group-sell-grayscale-assets-steep-discount-crypto-2023-2",
                "urlToImage": "https://i.insider.com/63e252f127e5db0018ee80f6?width=1200&format=jpeg",
                "publishedAt": "2023-02-07T15:33:04Z",
                "content": "Digital Currency Group is selling shares of its prized investment vehicles to repay its bankrupt lending arm's creditors, according to a Financial Times report.\r\nDCG has started to offload holdings a… [+1180 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "rhogg@insider.com (Ryan Hogg)",
                "title": "Drake scooped up a $512,000 profit in bitcoin after betting on the Kansas City Chiefs to win the Super Bowl",
                "description": "The \"God's Plan\" singer placed seven bets worth a total of $965,000, but was only successful with his $700,000 punt on the Chiefs to beat the Eagles.",
                "url": "https://markets.businessinsider.com/news/currencies/drake-512000-bitcoin-profit-betting-on-chiefs-super-bowl-win-2023-2",
                "urlToImage": "https://i.insider.com/63ca6c452a1e600018b8d37f?width=1200&format=jpeg",
                "publishedAt": "2023-02-14T16:26:38Z",
                "content": "Drake scooped up $512,000 in bitcoin winnings after placing several bets on Sunday's Super Bowl, but it took a lot more of the cryptocurrency than last year to take his positions.\r\nAccording to a pos… [+1643 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Bitcoin is headed for its best start to the year since 2013 as risk appetite grows ahead of expected smaller Fed rate hike",
                "description": "All eyes are on the Fed meeting next week when the central bank is expected to announce a smaller increase in the benchmark rate.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-crypto-price-fed-rate-hike-inflation-federal-reserve-cryptocurrency-2023-1",
                "urlToImage": "https://i.insider.com/63d3cd9a4589790018e56eff?width=1200&format=jpeg",
                "publishedAt": "2023-01-27T15:12:59Z",
                "content": "Bitcoin is on track for its best January since 2013 as the prospect of slower rate hikes from the Federal Reserves has increase the risk appetite among investors.\r\nOn Friday, the token dipped 0.3% to… [+2223 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Bitcoin and other cryptos slump as the Fed gets ready to raise interest rates again",
                "description": "Dogecoin bucked the wider downward trend. The meme token surged 10% on Tuesday amid reports of Elon Musk's plan for Twitter payments.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-crypto-price-dogecoin-federal-reserve-interest-rate-hikes-again-2023-1",
                "urlToImage": "https://i.insider.com/63d9258f0a08ae0018a62696?width=1200&format=jpeg",
                "publishedAt": "2023-01-31T14:59:35Z",
                "content": "Crypto markets are trending downward as the Federal Reserve's two-day policy meeting gets underway on Tuesday.  \r\nBitcoin suffered its biggest single-day percentage loss in more than 2 months, slidin… [+2392 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Bankrupt crypto lender Genesis wants 'Bitcoin Jesus' to pay $20.9 million over expired options trades",
                "description": "The faltering digital asset firm filed for chapter 11 this month after enduring a double-whammy of exposure toThree Arrows Capital and FTX.",
                "url": "https://markets.businessinsider.com/news/currencies/genesis-crypto-bankrupt-bitcoin-jesus-expired-options-trades-markets-ftx-2023-1",
                "urlToImage": "https://i.insider.com/63ce9f1bb9a04b0019eda6c8?width=1200&format=jpeg",
                "publishedAt": "2023-01-25T15:14:15Z",
                "content": "GGC International, a branch of Genesis Global, alleged that veteran trader Roger Ver, also know as \"Bitcoin Jesus,\" has yet to settle some of his cryptocurrency options trades, according to January 2… [+1728 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Bitcoin hits a 6-month high as the total crypto market regains $85 billion in value",
                "description": "Crypto investors aren't in the clear yet, as macro conditions remain uncertain and risk appetite hinges on the Fed's next move.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-6-month-high-btc-analysts-2023-2",
                "urlToImage": "https://i.insider.com/63ee2a6c1d14070018bb0159?width=1200&format=jpeg",
                "publishedAt": "2023-02-16T15:20:23Z",
                "content": "Bitcoin's price hit a six-month high on Thursday as the cryptocurrency market's total value rose by nearly $85 billion to top $1.1 trillion.\r\nThe world's largest crypto is trading around $24,376, up … [+2677 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "psyme@insider.com (Pete Syme)",
                "title": "Super Bowl LVII won't have any crypto ads because firms pulled out of deals following FTX's bankruptcy",
                "description": "Super Bowl LVI saw Larry David's character doubt the safety of FTX in its own commercial, adding: \"I'm never wrong about this stuff, never.\"",
                "url": "https://www.businessinsider.com/super-bowl-lvii-no-crypto-ads-after-ftx-collapse-2023-2",
                "urlToImage": "https://i.insider.com/63e23ca727e5db0018ee7f2d?width=1200&format=jpeg",
                "publishedAt": "2023-02-07T16:23:33Z",
                "content": "Fans dubbed last year's Super Bowl the \"Crypto Bowl,\" after eToro, Coinbase, Crypto.com, and the now-collapsed FTX all paid for airtime. But a lot has changed since then, to the extent that there wil… [+2406 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Chad D. Cummings",
                "title": "How the Feds Could Regulate Crypto (and Why All Is Not Lost for Investors)",
                "description": "Threats of impending cryptocurrency regulation have dominated headlines in recent months, but all is not lost for crypto investors. Here are a few protections that stand in the way of a federal crypto showdown.",
                "url": "https://www.entrepreneur.com/money-finance/how-the-feds-could-regulate-cryptocurrency-post-ftx-collapse/440080",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1674492880-shutterstock-2169083271.jpg",
                "publishedAt": "2023-01-25T17:00:00Z",
                "content": "Each day seems to carry with it a new, ominous headline propounding the imminent demise of cryptocurrency. The death of Bitcoin has been predicted more than 450 times as of this writing. And yet, it … [+952 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "jsor@insider.com (Jennifer Sor)",
                "title": "JPMorgan boss Jamie Dimon says bitcoin is a 'waste of time' and a fraud, and warns Russia-Ukraine war is threat to the global economy",
                "description": "Jamie Dimon previously compared crypto tokens to \"pet rocks,\" and called the industry a \"complete sideshow\" after the collapse of FTX.",
                "url": "https://markets.businessinsider.com/news/stocks/jamie-dimon-economic-outlook-recession-bitcoin-fraud-russia-ukraine-war-2023-1",
                "urlToImage": "https://i.insider.com/60e717db6164f3001853b3d3?width=1200&format=jpeg",
                "publishedAt": "2023-01-19T14:38:41Z",
                "content": "JPMorgan CEO Jamie Dimon said bitcoin is a fraud, repeating his criticism of the world's largest cryptocurrency amid the market's struggles after the FTX collapse. The banking exec also delivered an … [+2216 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Enrique Pérez",
                "title": "Qué son los Ordinales de Bitcoin y por qué se teme que puedan corromper la propia criptomoneda",
                "description": "El Bitcoin ha cambiado. Y los puristas no están contentos. El centro del debate gira alrededor de los Ordinales, un nuevo protocolo (ord) creado por Casey Rodarmor que permite inscribir artefactos digitales en la cadena de bloques de Bitcoin. O lo que es lo m…",
                "url": "https://www.xataka.com/criptomonedas/que-ordinales-bitcoin-que-se-teme-que-puedan-corromper-propia-criptomoneda",
                "urlToImage": "https://i.blogs.es/e717c9/ordinales-bitcoin/840_560.jpeg",
                "publishedAt": "2023-02-02T13:01:38Z",
                "content": "El Bitcoin ha cambiado. Y los puristas no están contentos. El centro del debate gira alrededor de los Ordinales, un nuevo protocolo (ord) creado por Casey Rodarmor que permite inscribir artefactos di… [+4795 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "rhogg@insider.com (Ryan Hogg)",
                "title": "FBI says North Korea-backed hackers stole $100 million from crypto firm Harmony's Horizon Bridge",
                "description": "US prosecutors confirmed that Lazarus Group and APT38 were behind a June hack on crypto firm Harmony, which saw $60 billion converted to ethereum.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-north-korean-groups-stole-100-million-california-firm-fbi-2023-1",
                "urlToImage": "https://i.insider.com/63bbf9e823f3620019876e3b?width=1200&format=jpeg",
                "publishedAt": "2023-01-24T10:38:06Z",
                "content": "US prosecutors have confirmed that two hacking groups backed by North Korea were behind a $100 million crypto theft from a California firm last year.\r\nIn a statement Monday, the FBI confirmed Lazarus… [+1691 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Crypto exchange OKX touts $7.5 billion in 'clean' reserves - which include none of its own native token",
                "description": "Sam Bankman-Fried's hedge fund Alameda Research, on the other hand, relied heavily on a token that FTX created.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-exchange-okx-proof-of-reserves-native-tokens-ftx-crash-2023-1",
                "urlToImage": "https://i.insider.com/63c94cc12a1e600018b8ad95?width=1200&format=jpeg",
                "publishedAt": "2023-01-19T14:23:11Z",
                "content": "OKX's third proof of reserves report showed the crypto exchange holds $7.5 billion in reserves and they do not include its native token OKB. \r\nThursday's report was the first one that showed an exact… [+1723 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNET"
                },
                "author": "Oscar Gonzalez",
                "title": "PayPal Halts Plans for Stablecoin, Report Says - CNET",
                "description": "The payments company says if it moves forward with a coin, it'll work closely with regulators.",
                "url": "https://www.cnet.com/personal-finance/crypto/paypal-halts-plans-for-stablecoin-report-says/",
                "urlToImage": "https://www.cnet.com/a/img/resize/b129aa5e9ac83ca2f4f4fc030197296ae4b5038d/hub/2022/04/25/02ef8983-cf7b-417f-9094-b6fac848699e/paypal-logo-2022-783.jpg?auto=webp&fit=crop&height=630&width=1200",
                "publishedAt": "2023-02-10T22:26:24Z",
                "content": "PayPal has hit pause on efforts to develop its own stablecoin, according to a Bloomberg report Friday. \r\nThe online payment provider reportedly halted its plans due to increased scrutiny of cryptocur… [+839 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Guy Sheetrit",
                "title": "Will Crypto Rise Again – and What to Do While Waiting",
                "description": "Since 2020, the crypto market has experienced the most important bear season in its history (coindesk), with the toughest wave persisting throughout 2022. From an all-time high of nearly $69,000 back in November 2021, bitcoin now trades at around $20,000. And…",
                "url": "https://readwrite.com/will-crypto-rise-again-and-what-to-do-while-waiting/",
                "urlToImage": "https://images.readwrite.com/wp-content/uploads/2023/01/Will-Crypto-Rise-Again.jpg",
                "publishedAt": "2023-02-09T16:01:00Z",
                "content": "Since 2020, the crypto market has experienced the most important bear season in its history (coindesk), with the toughest wave persisting throughout 2022. From an all-time high of nearly $69,000 back… [+8055 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Ricardo Aguilar",
                "title": "Bitcoin remonta y vuelve a superar los 20.000 dólares: nadie sabe muy bien qué está pasando",
                "description": "Hablar de criptomonedas es hablar de promesas. Promesas que no siempre se cumplen. Bitcoin llegó a hundirse a niveles de 2020, perdiendo más de la mitad de su valor y arrastrando consigo una enorme crisis dentro del territorio cripto. Pero todo que baja puede…",
                "url": "https://www.xataka.com/criptomonedas/bitcoin-remonta-vuelve-a-superar-20-000-dolares-nadie-sabe-que-esta-pasando",
                "urlToImage": "https://i.blogs.es/7ff725/1366_2000/840_560.jpeg",
                "publishedAt": "2023-01-16T17:31:50Z",
                "content": "Hablar de criptomonedas es hablar de promesas. Promesas que no siempre se cumplen. Bitcoin llegó a hundirse a niveles de 2020, perdiendo más de la mitad de su valor y arrastrando consigo una enorme c… [+2540 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Marlene Lenthang",
                "title": "N.J. man hired hitman for $20K in Bitcoin to kill a 14-year-old, prosecutors say",
                "description": "A New Jersey man faces up to 10 years behind bars after he hired a hitman and paid $20,000 in Bitcoin to kill a 14-year-old, prosecutors said.",
                "url": "https://news.yahoo.com/n-j-man-hired-hitman-163209738.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/udFOPwDKNNPK3Q_pGP_e5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/nbc_news_122/b7e5a8b8dcacaadddfd4487186caf630",
                "publishedAt": "2023-02-03T16:32:09Z",
                "content": "A New Jersey man faces up to 10 years behind bars after he hired a hitman and paid $20,000 in Bitcoin to kill a 14-year-old, prosecutors said.\r\nJohn Michael Musbach, 31, of Haddonfield, pleaded guilt… [+2549 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "FTX's meltdown was painful but necessary for the industry to grow up, bitcoin bull and Microstrategy CEO Michael Saylor says",
                "description": "\"What [crypto] needs is adult supervision. It needs the Goldman Sachs' and the Morgan Stanley's and the BlackRock's to come in,\" Saylor said.",
                "url": "https://markets.businessinsider.com/news/currencies/ftx-meltdown-alameda-microstrategy-michael-saylor-crypto-bitcoin-market-outlook-2023-2",
                "urlToImage": "https://i.insider.com/63dd6c8ae33c4000193ae88f?width=1200&format=jpeg",
                "publishedAt": "2023-02-05T13:15:00Z",
                "content": "The cryptocurrency industry is enduring a crisis of confidence as a slew of industry giants like FTX face scandal-ridden collapse. Sam Bankman-Fried's crypto exchange may have wiped out over $8 billi… [+1272 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Web3isgoinggreat.com"
                },
                "author": "Molly White",
                "title": "Tesla lost $140M trading Bitcoin in 2022",
                "description": "Elon Musk's $1.5 billion Bitcoin bet at Tesla turned out to be a bad deal. He sunk the funds into Bitcoin in January 2021, when Bitcoin was trading between $30,000 and $40,000. Simultaneously, he announced that Tesla would begin accepting Bitcoin — an announc…",
                "url": "https://web3isgoinggreat.com/?id=tesla-lost-140-million-trading-bitcoin-in-2022",
                "urlToImage": "https://storage.googleapis.com/primary-web3/entryImages/logos/resized/tesla_300.webp",
                "publishedAt": "2023-02-01T05:22:44Z",
                "content": "For some reason, Porsche decided they needed to release a set of Porsche 911 NFTs so that customers could buy \"the opportunity to co-create Porsche's future in the Web3 universe\" (whatever that means… [+1115 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Lauren Leffer",
                "title": "More Ransomware Victims Are Refusing to Pay Hackers",
                "description": "Ransomware cyber-gangs made about $456.8 million in 2022. It sounds like a lot of money until you compare it to the record estimated profits from 2021: $765 million. All told, hackers managed to extort 40% less from their victims this past year, vs. the year …",
                "url": "https://gizmodo.com/ransomware-hackers-blockchain-chainalysis-1850005764",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6fd11d3378ccffb172c8919419bcf4e0.jpg",
                "publishedAt": "2023-01-19T17:15:00Z",
                "content": "Ransomware cyber-gangs made about $456.8 million in 2022. It sounds like a lot of money until you compare it to the record estimated profits from 2021: $765 million. All told, hackers managed to exto… [+3655 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Lucas Ropek",
                "title": "Want a Six Figure Job with Paid Time Off? Check Out These Dark Web Cybercrime Positions",
                "description": "Unprecedented layoffs have put tens of thousands of highly qualified computer nerds out of a job but there’s apparently one place they can always turn to if they get really desperate: the dark web! A recent report from security firm Kaspersky shows that some …",
                "url": "https://gizmodo.com/kaspersky-dark-web-big-tech-layoffs-cybercrime-1850055032",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e239aae1fb67ca31b2e9256b1964264f.jpg",
                "publishedAt": "2023-02-01T12:20:00Z",
                "content": "Unprecedented layoffs have put tens of thousands of highly qualified computer nerds out of a job but theres apparently one place they can always turn to if they get really desperate: the dark web! A … [+3806 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "Former Ubiquiti Employee Pleads Guilty To Attempted Extortion Scheme",
                "description": "A former employee of network technology provider Ubiquiti pleaded guilty to multiple felony charges after posing as an anonymous hacker in an attempt to extort almost $2 million worth of cryptocurrency while employed at the company. From a report: Nickolas Sh…",
                "url": "https://yro.slashdot.org/story/23/02/03/1812207/former-ubiquiti-employee-pleads-guilty-to-attempted-extortion-scheme",
                "urlToImage": "https://a.fsdn.com/sd/topics/crime_64.png",
                "publishedAt": "2023-02-03T20:41:00Z",
                "content": "Nickolas Sharp, 37, worked as a senior developer for Ubiquiti between 2018 and 2021 and took advantage of his authorized access to Ubiquiti's network to steal gigabytes worth of files from the compan… [+790 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "Failed hedge fund Three Arrows Capital is pitching a marketplace where crypto victims can sell their bankruptcy claims - and calling it 'GTX' in an apparent nod to FTX",
                "description": "\"If this launches, we deserve every second of this crypto ice age,\" 'Wolf of All Streets' trader Scott Melker said.",
                "url": "https://markets.businessinsider.com/news/currencies/three-arrows-capital-pitches-gtx-crypto-bankruptcy-claims-marketplace-2023-1",
                "urlToImage": "https://i.insider.com/63c677b6bcd21800196b868d?width=1200&format=jpeg",
                "publishedAt": "2023-01-17T12:04:36Z",
                "content": "The founders of failed crypto hedge fund Three Arrows Capital are reportedly trying to launch a new exchange  where people who lost money in the collapse of a digital asset company would be able to b… [+2145 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Crypto news site CoinDesk hires banker to explore potential sale - Reuters",
                "description": "Crypto outlet CoinDesk Inc is exploring a full or partial sale of its business and has hired investment bank Lazard Ltd <a href=\"https://www.reuters.com/companies/LAZ.N\" target=\"_blank\">(LAZ.N)</a> to lead the process, the media company's chief executive said…",
                "url": "https://www.reuters.com/markets/deals/crypto-news-site-coindesk-hires-banker-explore-potential-sale-2023-01-19/",
                "urlToImage": "https://www.reuters.com/resizer/JV9_2z7D2Ppeuej6tQZPYYnu69M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YLIKWS7CWVKU5APZEJUFPV3R2U.jpg",
                "publishedAt": "2023-01-19T00:10:00Z",
                "content": "Jan 18 (Reuters) - Crypto outlet CoinDesk Inc is exploring a full or partial sale of its business and has hired investment bank Lazard Ltd (LAZ.N) to lead the process, the media company's chief execu… [+1152 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Media startup Semafor plans buyout of Sam Bankman-Fried's ... - Reuters",
                "description": "Semafor is planning to buy out FTX founder Sam Bankman-Fried's roughly $10 million investment in the news startup, the New York Times reported on Wednesday, citing the company's chief executive officer.",
                "url": "https://www.reuters.com/business/finance/media-startup-semafor-plans-buyout-sam-bankman-frieds-investment-nyt-2023-01-18/",
                "urlToImage": "https://www.reuters.com/resizer/T9MHklUGrqffR8b4wGq5irKzuiY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/M36OKLIMVBKWLDHRVWXOYRPI34.jpg",
                "publishedAt": "2023-01-18T12:19:00Z",
                "content": "Jan 18 (Reuters) - Semafor is planning to buy out FTX founder Sam Bankman-Fried's roughly $10 million investment in the news startup, the New York Times reported on Wednesday, citing the company's ch… [+1041 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "El Salvador says it has repaid $800 million bond maturing January - Reuters",
                "description": "El Salvador has repaid an $800 million bond, Finance Minister Alejandro Zelaya said on Monday, the same day the bond was set to mature, as the Central American country faced pressure to make progress in cutting debt.",
                "url": "https://www.reuters.com/world/americas/el-salvador-says-it-has-repaid-800-million-bond-maturing-january-2023-01-24/",
                "urlToImage": "https://www.reuters.com/resizer/CrjewUr_jG4ZSQsIYVgb3_HUCMc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3HLAKEBDRNK23OQQADLQL2S6SI.jpg",
                "publishedAt": "2023-01-24T03:14:00Z",
                "content": "SAN SALVADOR, Jan 23 (Reuters) - El Salvador has repaid an $800 million bond, Finance Minister Alejandro Zelaya said on Monday, the same day the bond was set to mature, as the Central American countr… [+911 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "German online bank N26 to expand crypto trading - Reuters",
                "description": "German online bank N26 said on Tuesday that it would expand the list of countries where its customers may trade cryptocurrencies to include those in Germany and Switzerland.",
                "url": "https://www.reuters.com/technology/german-online-bank-n26-expand-crypto-trading-2023-01-17/",
                "urlToImage": "https://www.reuters.com/resizer/BLf_tLTzRtV1DKIyswNsForc-l8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PRT5TCNOUFJHVDLYNXLUMZRKCY.jpg",
                "publishedAt": "2023-01-17T09:12:00Z",
                "content": "FRANKFURT, Jan 17 (Reuters) - German online bank N26 said on Tuesday that it would expand the list of countries where its customers may trade cryptocurrencies to include those in Germany and Switzerl… [+835 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks jump as investors get ready for a slew of corporate earnings",
                "description": "About 25% of S&P 500 companies are scheduled to release their fourth-quarter earnings results this week.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-get-ready-q4-corporate-earnings-2023-1",
                "urlToImage": "https://i.insider.com/627ac10fc1076b00183d50c1?width=1200&format=jpeg",
                "publishedAt": "2023-01-23T21:07:12Z",
                "content": "US stocks surged on Monday, with the S&amp;P 500 jumping above the closely-watched 4,000 level and its 200-day moving average. \r\nThe strong session on Monday extends big gains from Friday as investor… [+1139 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Helen Davidson in Taipei",
                "title": "Simpsons censored in Hong Kong for mentioning China ‘labour camps’",
                "description": "Episode removed from Disney+ is the second of the cartoon to be made unavailable in Hong KongAn episode of the Simpsons that references “forced labour camps” in China has been removed from Disney+ streaming services in Hong Kong.The episode is the second in t…",
                "url": "https://www.theguardian.com/world/2023/feb/07/simpsons-censored-in-hong-kong-for-mentioning-china-labour-camps",
                "urlToImage": "https://i.guim.co.uk/img/media/52928b04f4f9912041cf187bca88b2cb41d79f09/0_78_6048_3628/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0386f335c843034a4e75560e183ba56e",
                "publishedAt": "2023-02-07T05:12:31Z",
                "content": "An episode of the Simpsons that references forced labour camps in China has been removed from Disney+ streaming services in Hong Kong.\r\nThe episode is the second in the long-running US cartoons lates… [+2124 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks trade higher a day ahead of a key inflation reading",
                "description": "Traders will be watching for a slew of corporate earnings this week, and on Tuesday fresh consumer price index data comes out.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-trade-cpi-reading-investing-earnings-2023-2",
                "urlToImage": "https://i.insider.com/63ea44954102a900184c8015?width=1200&format=jpeg",
                "publishedAt": "2023-02-13T14:33:25Z",
                "content": "US stocks traded slightly higher Monday as traders look ahead to a key inflation reading coming on Tuesday that could sway the Federal Reserve's policy plans. \r\nEconomists expect January's headline c… [+1164 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks end mixed after volatile session as indexes notch weekly losses",
                "description": "The S&P 500 suffered its first weekly loss in three weeks and notched its worst one-week decline since December.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-dow-jones-nasdaq-weekly-losses-2023-2",
                "urlToImage": "https://i.insider.com/627d639b27d5960019ee5b01?width=1200&format=jpeg",
                "publishedAt": "2023-02-10T21:07:21Z",
                "content": "US stocks were mixed at the close on Friday after a volatile session that capped off a losing week for the major indexes. \r\nThe S&amp;P 500 suffered its first weekly loss in three weeks and notched i… [+1173 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks sink further with S&P 500 on course for worst week since December",
                "description": "US stocks opened lower again on Friday as firms reported disappointing quarterly earnings.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-russia-crude-oil-production-cut-2023-2",
                "urlToImage": "https://i.insider.com/63c6b19958de070019f9f010?width=1200&format=jpeg",
                "publishedAt": "2023-02-10T14:40:36Z",
                "content": "US stocks opened lower on Friday, with major indices set to cap off a volatile week with more losses. \r\nThe S&amp;P 500 was on course for its worst week since December, and investors are seeking cove… [+1120 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks fall after hot retail sales report suggests higher interest rates for longer",
                "description": "January retail sales surged 3%, well above economist estimates of 1.8% and represented the biggest monthly gain for retail sales since March 2021.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-hot-retail-sales-report-higher-rates-2023-2",
                "urlToImage": "https://i.insider.com/62824e98e7446d0018cc9eeb?width=1200&format=jpeg",
                "publishedAt": "2023-02-15T14:36:40Z",
                "content": "US stocks dropped on Wednesday after a hotter-than-expected retail sales report suggested to investors that interest rates might stay higher for longer.\r\nRetail sales in January surged 3%, which was … [+927 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks rise but eye weekly losses as wave of tech layoffs continues",
                "description": "Alphabet follows Microsoft, Meta, and others tech giants in announcing mass layoffs as Wall Street continues to brace for an economic downturn.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tech-layoffs-tesla-netflix-google-economy-2023-1",
                "urlToImage": "https://i.insider.com/63ca9ffbeee94d001a79146c?width=1200&format=jpeg",
                "publishedAt": "2023-01-20T14:38:55Z",
                "content": "US stocks traded higher Friday but are on pace for weekly losses as the wave of layoffs in the tech sector continued.\r\nGoogle parent Alphabet will slash 12,000 employees, or about 6% of its global wo… [+863 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks fall as investor concerns grow over looming recession and debt ceiling fight",
                "description": "The Treasury took extraordinary measures on Thursday to meet its obligations after the US officially hit the debt ceiling set by Congress.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-grow-concerned-about-debt-ceiling-2023-1",
                "urlToImage": "https://i.insider.com/63c9abf2eee94d001a79055c?width=1200&format=jpeg",
                "publishedAt": "2023-01-19T21:06:36Z",
                "content": "US stocks fell on Thursday as investor concerns linger about a potential recession and the US debt limit being reached.\r\nRecession fears resurfaced after retail sales fell 1% in December, building of… [+1069 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks extend losses as interest rate and recession fears linger",
                "description": "Despite recession fears, the labor market is solid as jobless claims unexpectedly fell to 190,000 last week, below economist forecasts of 214,000.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-recession-concerns-linger-weak-retail-sales-2023-1",
                "urlToImage": "https://i.insider.com/639ccfcbb5600000185b2286?width=1200&format=jpeg",
                "publishedAt": "2023-01-19T14:42:20Z",
                "content": "US stocks fell for the second day in a row on Thursday as recession fears resurfaced based on recent sales and manufacturing data.\r\nRetail sales data for the month of December showed a 1% decline, bu… [+1107 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks rise as GDP data and Tesla earnings come in better than expected",
                "description": "Gross domestic product for the fourth quarter rose at a 2.9% annualized pace, the Commerce Department said Thursday.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tesla-earnings-gdp-growth-economy-2023-1",
                "urlToImage": "https://i.insider.com/63d288d440fbb600192b8a75?width=1200&format=jpeg",
                "publishedAt": "2023-01-26T14:35:40Z",
                "content": "US stocks climbed Thursday following the release of better-than-expected economic growth data, as well as a strong fourth-quarter earnings report from Tesla.\r\nThe Commerce Department reported that gr… [+1127 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks trade mixed as business activity improves while earnings season heats up",
                "description": "Earnings season is heating up, with industrial giants GE and 3M reporting early Tuesday while tech heavyweights are due later.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-pmi-nyse-outtage-earnings-mircosoft-2023-1",
                "urlToImage": "https://i.insider.com/63d03d26aa91990019ac5ca8?width=1200&format=jpeg",
                "publishedAt": "2023-01-24T21:11:23Z",
                "content": "US stocks were mixed at the close on Tuesday, as a key economic indicator showed improvement while investors digested a tranche of industrial earnings. \r\nS&amp;P Global's US purchasing manager indexe… [+897 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Russia's largest bank is about to debut an Ethereum-based DeFi platform",
                "description": "As the war in Ukraine and financial sanctions continue to weigh on the country, Sberbank is eyeing a new foray into crypto.",
                "url": "https://markets.businessinsider.com/news/currencies/russia-bank-ethereum-crypto-defi-platform-sanctions-war-ukraine-putin-2023-2",
                "urlToImage": "https://i.insider.com/63e117aac6bb0f0019bfc93b?width=1200&format=jpeg",
                "publishedAt": "2023-02-06T16:04:11Z",
                "content": "Sberbank, Russia's largest bank, is set to launch an ethereum-based decentralized finance platform by May, Russian news outlet Interfax reported last week. \r\nSberbank's platform will allow users acce… [+1173 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "hbullock@insider.com (Hallam Bullock)",
                "title": "How to get ahead in 2023",
                "description": "Insider's Hallam Bullock has rounded up some of our top markets stories. Including top tips for stocks and what to expect for the rest of 2023.",
                "url": "https://www.businessinsider.com/how-to-get-ahead-in-2023-2023-1",
                "urlToImage": "https://i.insider.com/63bf31ef33ffb700180f63f5?width=1200&format=jpeg",
                "publishedAt": "2023-01-16T11:05:00Z",
                "content": "Hello friends. Insider's newsletter editor Hallam Bullock here, reporting from London while Phil Rosen is out. Even though ChatGPT wrote a convincing article for Phil last week, AI can't hope to deli… [+3771 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "ChatGPT has gone viral. Now Wall Street is flocking to AI.",
                "description": "Insider's Phil Rosen speaks to the executive behind the AI-driven fund that leverages IBM's Watson supercomputer.",
                "url": "https://www.businessinsider.com/chatgpt-ai-bot-openai-markets-wall-street-investors-etf-2023-2",
                "urlToImage": "https://i.insider.com/63dae27ce33c4000193a9b79?width=1200&format=jpeg",
                "publishedAt": "2023-02-02T11:35:00Z",
                "content": "Hi. I'm Phil Rosen. Today's newsletter covers everything you want to know about how the viral ChatGPT language tool is colliding with the world of Wall Street. \r\nBut first let's recap the Fed's 25-ba… [+5428 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks rise as investors assess widespread tech layoffs and brace for more earnings",
                "description": "Of the 57 S&P 500 companies that have reported earnings so far, 67% beat profit estimates by a median of 5%, according to Fundstrat.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-assess-tech-layoffs-4q-earnings-2023-1",
                "urlToImage": "https://i.insider.com/63189c0fadc9990018843498?width=1200&format=jpeg",
                "publishedAt": "2023-01-23T14:43:43Z",
                "content": "US stocks were mostly higher to start the week, looking to extend big gains from Friday as investors assess a stream of corporate news and earnings results.\r\nMore layoffs hit the tech sector on Monda… [+1246 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks slide as investors turn focus to Fed meeting and brace for mega-cap tech earnings",
                "description": "Of the 145 S&P 500 companies that have reported earnings so far, 68% beat profit estimates by a median of 5%, according to Fundstrat.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-fed-mega-cap-tech-earnings-2023-1",
                "urlToImage": "https://i.insider.com/63c9abf2eee94d001a79055c?width=1200&format=jpeg",
                "publishedAt": "2023-01-30T14:34:27Z",
                "content": "US stocks slipped Monday as investors brace for a key Federal Reserve interest rate decision and mega-cap tech earnings later this week.\r\nThe catalysts should make for a volatile week ahead, with the… [+1161 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks slip as investors brace for Fed Chair Jerome Powell's speech",
                "description": "Powell is slated to give comments at the Economic Club of Washington, and onlookers will watch for insight into the Fed's inflation battle.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-new-today-investors-fed-chair-powell-oil-commodities-2023-2",
                "urlToImage": "https://i.insider.com/63e2583596242f0019e7b994?width=1200&format=jpeg",
                "publishedAt": "2023-02-07T14:36:04Z",
                "content": "US stocks moved lower Tuesday ahead of Federal Reserve Chairman Jerome Powell's speech at the Economic Club of Washington at 12:40 pm ET. \r\nAfter Powell's disinflation comment following the Fed's 25-… [+1048 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks trade mixed as the Fed's preferred inflation gauge shows further cooling",
                "description": "Core PCE increased in December by 4.4% from a year ago, down from November's annual pace of 4.7% and in line with forecasts.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-pce-inflation-fed-meeting-dow-sp500-2023-1",
                "urlToImage": "https://i.insider.com/63c6b19958de070019f9f010?width=1200&format=jpeg",
                "publishedAt": "2023-01-27T14:50:49Z",
                "content": "US stocks opened mixed on Friday, as the Federal Reserve's preferred inflation gauge showed more cooling. \r\nThe personal consumption expenditures index was up 5% year over year in December. The core … [+1143 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks rally and notch weekly gains as inflation continues to cool",
                "description": "The Dow and the S&P 500 gained more than 2% for the week, and the Nasdaq jumped more than 4%.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-pce-sp500-dow-weekly-gains-2023-1",
                "urlToImage": "https://i.insider.com/63a49ef52345c00019eaa94b?width=1200&format=jpeg",
                "publishedAt": "2023-01-27T21:11:52Z",
                "content": "US stocks regained ground at the close on Friday to finish the day and week in positive territory, as investors digested easing inflation data. \r\nThe personal consumption expenditures index was up 5%… [+1018 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Lwn.net"
                },
                "author": null,
                "title": "Free Software and Fiduciary Duty",
                "description": "Serial litigant Craig Wright recently won\na procedural ruling in a London court that allows a\nmulti-billion-dollar Bitcoin-related lawsuit to proceed.  This case has\nraised a fair amount of concern within the free-software community, where\nit is seen as threa…",
                "url": "https://lwn.net/SubscriberLink/922545/ea7cde57282a2db0/",
                "urlToImage": null,
                "publishedAt": "2023-02-09T17:20:31Z",
                "content": "<table><tr><td>Welcome to LWN.net\r\nThe following subscription-only content has been made available to you \r\nby an LWN subscriber. Thousands of subscribers depend on LWN for the \r\nbest news from the L… [+6749 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptocurrency past is prologue: before and after FTX - Reuters",
                "description": "FTX is not the first nor last but a recent and enormous implosion in the cryptocurrency industry. Previously we have seen examples parade by of external theft, internal theft, anti-money laundering failures, cybercrime enablement, loss of cryptographic keys a…",
                "url": "https://www.reuters.com/legal/transactional/cryptocurrency-past-is-prologue-before-after-ftx-2023-01-17/",
                "urlToImage": "https://www.reuters.com/resizer/Lb7P3qv1ZTJhf_MlUq4-_yDe0zI=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S2YQA2OJMNL7TF2VO3M3LR7MNI.jpg",
                "publishedAt": "2023-01-17T16:21:00Z",
                "content": "January 17, 2023 - FTX is not the first nor last but a recent and enormous implosion in the cryptocurrency industry. Previously we have seen examples parade by of external theft, internal theft, anti… [+8033 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "FTX recruited customers in Africa by signaling that crypto would protect them from soaring inflation, report says",
                "description": "African currencies plunged last year as the Federal Reserve's interest-rate hikes drove the dollar higher. FTX promoted crypto as a hedge against that, according to the Wall Street Journal.",
                "url": "https://markets.businessinsider.com/news/currencies/ftx-collapse-bankruptcy-crypto-africa-inflation-hedge-dollar-dominance-wsj-2023-1",
                "urlToImage": "https://i.insider.com/63ca7aa02a1e600018b8d4b7?width=1200&format=jpeg",
                "publishedAt": "2023-01-20T12:25:33Z",
                "content": "FTX promoted its exchange in Africa by signaling that investing in crypto could help stop people's money being devalued by high inflation, according to the Wall Street Journal.\r\nThe crypto group repo… [+1558 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "author": "Mario Oettler",
                "title": "heise+ | Lightning-Netzwerke: Wie der Bitcoin doch noch Zahlungsmittel werden soll",
                "description": "An sich ist der Bitcoin zu langsam und zu teuer für alltagstaugliches Bezahlen. Die Lightning-Netzwerke sollen da Abhilfe schaffen.",
                "url": "https://www.heise.de/hintergrund/Lightning-Netzwerke-Wie-der-Bitcoin-doch-noch-Zahlungsmittel-werden-soll-7490252.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/9/6/0/4/5/shutterstock_1225883905-2f91fa97beb5ca60.jpg",
                "publishedAt": "2023-02-13T07:30:00Z",
                "content": "Inhaltsverzeichnis\r\nBitcoin ist eine dezentrale und interessante Alternative, um Werte digital zu versenden. Jedoch hat das Netzwerk, wie die meisten anderen Blockchains auch, mit Skalierungsprobleme… [+1331 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
                "title": "Elon Musk jokes at the Super Bowl that he's talking to Rupert Murdoch about Dogecoin - and the meme coin immediately jumps 5%",
                "description": "In a tweet that posted a picture of the pair seated next to each other, with a caption asking what they were discussing, Musk simply said: \"Dogecoin.\"",
                "url": "https://markets.businessinsider.com/news/currencies/elon-musk-dogecoin-crypto-market-rupert-murdoch-super-bowl-2023-2",
                "urlToImage": "https://i.insider.com/6274e00194a2c10018ee3bc4?width=1200&format=jpeg",
                "publishedAt": "2023-02-13T11:05:07Z",
                "content": "Tech guru Elon Musk joked he was talking to Rupert Murdoch about meme-inspired cryptocurrency Dogecoin at Sunday's Super Bowl.  \r\nThe two billionaires were watching the Philadelphia Eagles and Kansas… [+1452 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "author": "Axel Kannenberg",
                "title": "Mediamarkt und Saturn stellen weitere Bitcoin-Automaten auf",
                "description": "Nach einer Pilotphase im vergangenen Sommer bringt die Mediamarkt-Saturn-Gruppe in acht weitere Filiale Automaten zum Kauf von Bitcoin & Co.",
                "url": "https://www.heise.de/news/Mediamarkt-und-Saturn-stellen-weitere-Bitcoin-Automaten-auf-7490865.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/9/6/3/8/2/kurant-154b427517927795.jpg",
                "publishedAt": "2023-02-09T15:22:00Z",
                "content": "Die Mediamarkt-Saturn-Gruppe will in acht ihrer Standorte Automaten zum Kauf von Kryptowährungen wie dem Bitcoin aufstellen. Die Bitcoin-Automaten sollen in Saturn- oder Mediamarkt-Filialen in Münche… [+2002 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "Binance boss CZ distances his exchange from the dollar-pegged token under fire from the SEC: 'That's not something we created'",
                "description": "The SEC has ordered Paxos to stop minting a Binance-branded token pegged to $1 as part of its ongoing crypto crackdown.",
                "url": "https://markets.businessinsider.com/news/currencies/binance-cz-changpeng-zhao-paxos-busd-stablecoin-sec-crypto-crackdown-2023-2",
                "urlToImage": "https://i.insider.com/63ecba2aeeb52e001886928d?width=1200&format=jpeg",
                "publishedAt": "2023-02-15T12:11:10Z",
                "content": "Binance chief Changpeng Zhao has downplayed the link between his exchange and a token carrying its branding that's currently under fire from the Securities and Exchange Commission.\r\nZhao, who's frequ… [+1740 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "author": "Axel Kannenberg, mit Material der dpa",
                "title": "N26 bietet Kunden in Deutschland Handel mit Kryptowährungen an",
                "description": "Bitcoin, Ether und Co. können Kunden von N26 bald auch über die Smartphone-Bank erwerben. Partner dafür ist der Kryptospezialist Bitpanda.",
                "url": "https://www.heise.de/news/N26-bietet-Kunden-in-Deutschland-Handel-mit-Kryptowaehrungen-an-7461757.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/0/9/0/1/shutterstock_1452161753-4de7605eeaeb2880.jpg",
                "publishedAt": "2023-01-17T15:58:00Z",
                "content": "Die Smartphone-Bank N26 ermöglicht nun auch ausgewählten Kunden in Deutschland den Handel mit Bitcoin und anderen Kryptowährungen. Den Service \"N26 Krypto\" werde man außerdem in der Schweiz, Belgien,… [+2695 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "author": "Jenelle Fulton-Brown",
                "title": "Using the blockchain to prevent data breaches",
                "description": "How blockchain works, and why it shows promise for preventing data breaches and greatly improving cybersecurity:",
                "url": "https://venturebeat.com/security/using-the-blockchain-to-prevent-data-breaches/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/08/GettyImages-1344724504-dem10.jpg?w=1200&strip=all",
                "publishedAt": "2023-02-12T18:10:00Z",
                "content": "Check out all the on-demand sessions from the Intelligent Security Summit here.\r\nData breaches have, unfortunately, become an all-too-common reality. The Varonis 2021 Data Risk Report indicates that … [+1149 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "'Dr Doom' Nouriel Roubini says 'literally 90% of crypto is a scam' and Sam Bankman-Fried and FTX are not outliers in the market",
                "description": "\"Literally 90% of crypto is a scam. A criminal activity. A total real-bubble Ponzi scheme that is going bust,\" economist Nouriel Roubini said.",
                "url": "https://markets.businessinsider.com/news/currencies/nouriel-roubini-sam-bankman-fried-ftx-crash-crypto-scam-ponzi-2023-1",
                "urlToImage": "https://i.insider.com/63c80b572a1e600018b88daa?width=1200&format=jpeg",
                "publishedAt": "2023-01-18T17:18:59Z",
                "content": "Economist Nouriel Roubini, also known as \"Dr. Doom,\" blasted the embattled cryptocurrency industry on Wednesday.\r\n\"Literally 90% of crypto is a scam. A criminal activity,\" Roubini, who is known for h… [+1402 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Elon Musk's reported payments plan for Twitter sends dogecoin skyrocketing 10%",
                "description": "The prospect of dogecoin being a part of a Twitter payments ecosystem has ramped up the meme coin's gain for January.",
                "url": "https://markets.businessinsider.com/news/currencies/dogecoin-elon-musk-twitter-crypto-payments-system-platform-meme-doge-2023-1",
                "urlToImage": "https://i.insider.com/618e361a3d74d00019f40d95?width=1200&format=jpeg",
                "publishedAt": "2023-01-31T14:19:43Z",
                "content": "Dogecoin soared Tuesday following a Financial Times report that Elon Musk is looking at adding a payments system to Twitter, fueling speculation the company could incorporate the altcoin into his soc… [+1454 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks fall as bond yields jump to their highest level since November",
                "description": "So far, 63% of S&P 500 companies have reported fourth-quarter earnings results. Of those companies, 68% have beaten profit estimates by a median of 6%.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-rising-interest-rates-highest-level-november-2023-2",
                "urlToImage": "https://i.insider.com/63c9abf2eee94d001a79055c?width=1200&format=jpeg",
                "publishedAt": "2023-02-09T21:05:53Z",
                "content": "US stocks fell about 1% on Thursday as bond yields rose to their highest level in months on expectations that the Federal Reserve will keep rates higher for longer.\r\nStocks were initially higher in e… [+1439 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Golem.de"
                },
                "author": "Tobias Költzsch",
                "title": "Kryptowährungen: Bitcoin auf höchstem Stand seit sechs Monaten",
                "description": "Der Bitcoin ist so viel wert wie seit Monaten nicht mehr. Grund könnten positive Inflationszahlen sein. (Bitcoin, Wirtschaft)",
                "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrungen-bitcoin-auf-hoechstem-stand-seit-sechs-monaten-2302-171961.html&referer=https%3A%2F%2Ft.co%2Fa66d924c8d",
                "urlToImage": null,
                "publishedAt": "2023-02-16T12:00:02Z",
                "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Coinbase is shuttering services for customers in Japan as crypto winter rages on",
                "description": "Customers in Japan have until February 16 to withdraw holdings from the crypto exchange.",
                "url": "https://markets.businessinsider.com/news/currencies/coinbase-crypto-exchange-shuttering-japan-services-amid-bear-market-winter-2023-1",
                "urlToImage": "https://i.insider.com/63c7ff94eee94d001a78c767?width=1200&format=jpeg",
                "publishedAt": "2023-01-18T15:22:40Z",
                "content": "Coinbase said Wednesday it will soon shutter the cryptocurrency exchange's services in Japan, citing difficult market conditions. \r\nCustomers in Japan have until February 16 to withdraw their crypto … [+1341 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "jsor@insider.com (Jennifer Sor)",
                "title": "The meme token named after Elon Musk's dog has soared 200% this year",
                "description": "Floki is another Shiba Inu-themed token, this one named after Musk's dog. It's soaring on plans to \"burn\" tokens to remove them from circulation.",
                "url": "https://markets.businessinsider.com/news/currencies/elon-musk-floki-dogecoin-meme-crypto-token-rally-twitter-2023-2",
                "urlToImage": "https://i.insider.com/5e32fe3862fa813a0c67ed14?width=1200&format=jpeg",
                "publishedAt": "2023-02-01T17:08:58Z",
                "content": "A meme crypto token named after Elon Musk's dog has soared 200% since the start of the year, beating the gains on other Musk favorites like like dogecoin and Shiba Inu.\r\nFloki climbed to $0.00024 as … [+1518 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks fall after blockbuster January jobs report suggests more hawkish Fed moves ahead",
                "description": "Bond yields soared on Friday after the January jobs report showed payroll gains of 517,000 and the unemployment rate at a 53-year low.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-january-jobs-report-fed-rate-hike-2023-2",
                "urlToImage": "https://i.insider.com/6287e360b0a8be00185fd329?width=1200&format=jpeg",
                "publishedAt": "2023-02-03T14:34:15Z",
                "content": "US stocks fell on Friday after a blockbuster January jobs report suggested the Federal Reserve will continue to be hawkish with more interest rate hikes.\r\nThe US economy added 517,000 jobs in January… [+1454 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Alameda Research and Genesis' multi-billion dollar relationship reportedly began years ago with Sam Bankman-Fried asleep in a beanbag chair at their first meeting",
                "description": "Alameda Research received $6.5 billion from Genesis at the height of their lending relationship, according to the Wall Street Journal.",
                "url": "https://markets.businessinsider.com/news/currencies/alameda-research-genesis-multi-billion-dollar-relationship-report-2023-1",
                "urlToImage": "https://i.insider.com/63c99ac4eee94d001a78fff1?width=1200&format=jpeg",
                "publishedAt": "2023-01-19T21:09:02Z",
                "content": "Sam Bankman-Fried's crypto trading firm Alameda Research met with lender Genesis Global Capital in 2018, kicking off a years-long, multi-billion dollar lending relationship between the two embattled … [+1590 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "DCG suspends quarterly dividends to preserve cash as Genesis lending unit tries to avoid bankruptcy, report says",
                "description": "DCG is \"strengthening our balance sheet by reducing operating expenses and preserving liquidity,\" according to a shareholder letter seen by Bloomberg.",
                "url": "https://markets.businessinsider.com/news/currencies/digital-currency-group-halts-dividend-investors-genesis-bankruptcy-winklevoss-gemini-2023-1",
                "urlToImage": "https://i.insider.com/63c800a4297d7e001963ddbf?width=1200&format=jpeg",
                "publishedAt": "2023-01-18T15:05:57Z",
                "content": "Digital Currency Group reportedly plans to halt quarterly dividends to conserve cash, as its Genesis Global Capital lending unit tries to avoid bankruptcy. \r\nAccording to a Tuesday letter to sharehol… [+1548 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks drop but end the week with strong gains after latest Fed move and mega-cap earnings",
                "description": "With about half of S&P 500 companies having reported fourth-quarter earnings, 70% of those companies beat profit estimates by a median of 6%.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-rate-hike-earnings-jobs-report-2023-2",
                "urlToImage": "https://i.insider.com/628f7dc965b90e0019ab77b8?width=1200&format=jpeg",
                "publishedAt": "2023-02-03T21:06:22Z",
                "content": "US stocks fell on Friday but finished the week higher after a slew of market-shaking news, with the S&amp;P 500 and Nasdaq 100 gaining about 2% and 3%, respectively. \r\nOn Wednesday, the Federal Reser… [+1548 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Crypto industry will 'come up with new things' and national digital currencies are moving ahead despite recent turmoil, BIS says",
                "description": "\"I would assume that the industry will learn from these failures and they will come up with new things,\" head of the BIS Innovation Hub told Reuters.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-outlook-tokens-cbdcs-central-bank-fed-bitcoin-trading-investing-2023-2",
                "urlToImage": "https://i.insider.com/63e119b3c6bb0f0019bfc9e5?width=1200&format=jpeg",
                "publishedAt": "2023-02-06T15:48:49Z",
                "content": "Cryptocurrencies will likely re-emerge from last year's turmoil, according to the Bank for International Settlements' head of innovation Cecilia Skingsley. \r\nThe BIS, the finance body that essentiall… [+1522 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "End of easy-cash era is going to hurt - Reuters",
                "description": "The end of the easy-cash era is over and its impact yet to be felt on world markets, hopeful that the pain of aggressive rate hikes and high inflation has passed.",
                "url": "https://www.reuters.com/markets/global-markets-stress-points-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/QLNsbvlYf_TOeacNdVyYR072cUg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y4PPVGXM4VMZNJNKX6CUME7I4I.jpg",
                "publishedAt": "2023-02-01T07:09:00Z",
                "content": "LONDON, Feb 1 (Reuters) - The end of the easy-cash era is over and its impact yet to be felt on world markets, hopeful that the pain of aggressive rate hikes and high inflation has passed.\r\nU.S. and … [+4872 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "IMF visit in focus after El Salvador bond payment - Reuters",
                "description": "El Salvador cleared a $600 million bond payment hurdle this week but lingering concerns over its financing sources and fiscal policy will be in focus as the country prepares for an annual visit from the International Monetary Fund.",
                "url": "https://www.reuters.com/world/americas/imf-visit-focus-after-el-salvador-bond-payment-2023-01-25/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=127",
                "publishedAt": "2023-01-25T06:03:45Z",
                "content": "NEW YORK, Jan 25 (Reuters) - El Salvador cleared a $600 million bond payment hurdle this week but lingering concerns over its financing sources and fiscal policy will be in focus as the country prepa… [+3830 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Who is Barry Silbert, the head of Genesis-owner DCG? - Reuters",
                "description": "As an investment banker, Barry Silbert worked on some of the highest-profile corporate failures. Now, as founder of venture capital firm Digital Currency Group, parent of troubled crypto firm Genesis, he is grappling with problems closer to home.",
                "url": "https://www.reuters.com/business/finance/who-is-barry-silbert-head-genesis-owner-dcg-2023-01-20/",
                "urlToImage": "https://www.reuters.com/resizer/fLg_spyBAsx6lpqkILUW9jXkPGQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FMB4T6SYGBI5BDXPFYT3FG4AL4.jpg",
                "publishedAt": "2023-01-20T16:36:00Z",
                "content": "Jan 20 (Reuters) - As an investment banker, Barry Silbert worked on some of the highest-profile corporate failures. Now, as founder of venture capital firm Digital Currency Group, parent of troubled … [+4594 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "My Big Coin cryptocurrency firm founder gets 8 years in prison for ... - Reuters",
                "description": "The founder of a defunct cryptocurrency business was sentenced on Tuesday to more than eight years in prison for defrauding investors and customers out of millions of dollars by marketing a virtual currency called My Big Coin with lies and half-truths.",
                "url": "https://www.reuters.com/technology/my-big-coin-cryptocurrency-firm-founder-gets-8-years-prison-fraud-2023-01-31/",
                "urlToImage": "https://www.reuters.com/resizer/DV4a8FzrLLvAj42fQDGTuf022sI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5FQSTIROHFP2LBVVTXUK4VM6BM.jpg",
                "publishedAt": "2023-01-31T22:56:00Z",
                "content": "BOSTON, Jan 31 (Reuters) - The founder of a defunct cryptocurrency business was sentenced on Tuesday to more than eight years in prison for defrauding investors and customers out of millions of dolla… [+2097 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "DAVOS 2023 Crypto collapse brings focus to digital assets' 'true ... - Reuters",
                "description": "The collapse in the prices of digital assets over the past year will allow investors to focus on the \"true value\" of this new technology, the distributed ledger and the smart contracts that can be built on them, former Reserve Bank of India Governor Raghuram …",
                "url": "https://www.reuters.com/technology/davos-2023-crypto-collapse-brings-focus-digital-assets-true-value-ex-india-2023-01-18/",
                "urlToImage": "https://www.reuters.com/resizer/OxnP7kt-Th_tZMxRko46eeSRMqo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ELGH2Q3NCZMYVPLZNEZN3KTHXE.jpg",
                "publishedAt": "2023-01-18T20:21:00Z",
                "content": "DAVOS, Switzerland, Jan 18 (Reuters) - The collapse in the prices of digital assets over the past year will allow investors to focus on the \"true value\" of this new technology, the distributed ledger… [+1958 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "FTX says $415 million in crypto was hacked - Reuters",
                "description": "Bankrupt crypto exchange FTX said in a report to creditors on Tuesday that about $415 million in cryptocurrency had been stolen as a result of hacks.",
                "url": "https://www.reuters.com/technology/ftx-says-415-million-crypto-was-hacked-2023-01-17/",
                "urlToImage": "https://www.reuters.com/resizer/rePoVKfDyza4GSpIbMXtWOHa_zs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PGPRDZLFNRPAJHOW5QMHIQJSR4.jpg",
                "publishedAt": "2023-01-17T23:18:00Z",
                "content": "Jan 17 (Reuters) - Bankrupt crypto exchange FTX said in a report to creditors on Tuesday that about $415 million in cryptocurrency had been stolen as a result of hacks.\r\nSome $323 million in crypto h… [+2246 chars]"
            }
        ]
    } 
    */

/* 
// !!!    wenn const data auskommentiert wurde dann das auch auskommentieren
fake_fetch_function(data)
 
*/


