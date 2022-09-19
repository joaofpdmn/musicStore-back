const albums = [
    {
      "name": "OK Computer",
      "artist": "Radiohead",
      "image": "//e.snmc.io/i/300/s/819f6c8d9dc68af88e83be0a0ba5d1fb/8862252/Radiohead%20-%20OK%20Computer%2C%20Cover%20art.jpeg",
      "date": "16 June 1997",
      "genre": "\n               Alternative Rock\n               Art Rock\n         ",
      "price": 80
    },
    {
      "name": "To Pimp a Butterfly",
      "artist": "Kendrick Lamar",
      "image": "//e.snmc.io/i/300/s/b14876e444855e5f7136aeef78ed03e5/8121875/Kendrick%20Lamar%20-%20To%20Pimp%20a%20Butterfly%2C%20Cover%20art.jpeg",
      "date": "15 March 2015",
      "genre": "\n               Conscious Hip Hop\n               West Coast Hip Hop\n               Jazz Rap\n         ",
      "price": 120
    },
    {
      "name": "Wish You Were Here",
      "artist": "Pink Floyd",
      "image": "//e.snmc.io/i/300/s/933a58f8f534c69c8d5893b66d4a5831/4184635/Pink%20Floyd%20-%20Wish%20You%20Were%20Here%2C%20Cover%20art.png",
      "date": "12 September 1975",
      "genre": "\n               Progressive Rock\n               Art Rock\n         ",
      "price": 130
    },
    {
      "name": "In the Court of the Crimson King",
      "artist": "King Crimson",
      "image": "//e.snmc.io/i/300/s/6c33f871f2c09bb6b3de2112a85f00fe/7999484/King%20Crimson%20-%20In%20the%20Court%20of%20the%20Crimson%20King%2C%20Cover%20art.jpeg",
      "date": "10 October 1969",
      "genre": "\n               Progressive Rock\n               Art Rock\n         ",
      "price": 130
    },
    {
      "name": "Kid A",
      "artist": "Radiohead",
      "image": "//e.snmc.io/i/300/s/812c770d4172782625519ae43df71348/8879684/Radiohead%20-%20Kid%20A%2C%20Cover%20art.jpeg",
      "date": "3 October 2000",
      "genre": "\n               Art Rock\n               Electronic\n               Experimental Rock\n         ",
      "price": 180
    },
    {
      "name": "Loveless",
      "artist": "My Bloody Valentine",
      "image": "//e.snmc.io/i/300/s/8fd8d7f09c0aded4623ecd571bb7f1f7/8080265/My%20Bloody%20Valentine%20-%20Loveless%2C%20Cover%20art.png",
      "date": "11 November 1991",
      "genre": "\n               Shoegaze\n               Noise Pop\n         ",
      "price": 180
    },
    {
      "name": "Madvillainy",
      "artist": "Madvillain",
      "image": "//e.snmc.io/i/300/s/d38a9002179af5154c09c7c495c1e05b/2381645/Madvillain%20-%20Madvillainy%2C%20Cover%20art.jpeg",
      "date": "23 March 2004",
      "genre": "\n               Abstract Hip Hop\n         ",
      "price": 110
    },
    {
      "name": "The Dark Side of the Moon",
      "artist": "Pink Floyd",
      "image": "//e.snmc.io/i/300/s/922d3644185312796dd3100a71c8cbad/5395533/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%2C%20Cover%20art.jpeg",
      "date": "23 March 1973",
      "genre": "\n               Art Rock\n               Progressive Rock\n         ",
      "price": 170
    },
    {
      "name": "Abbey Road",
      "artist": "The Beatles",
      "image": "//e.snmc.io/i/300/s/3bb3f5880c39f44b7e1c6aef17838696/6617288/The%20Beatles%20-%20Abbey%20Road%2C%20Cover%20art.jpeg",
      "date": "26 September 1969",
      "genre": "\n               Pop Rock\n         ",
      "price": 120
    },
    {
      "name": "In Rainbows",
      "artist": "Radiohead",
      "image": "//e.snmc.io/i/300/s/690690b9b84a8b6c341d37c644ffad9e/5914164/Radiohead%20-%20In%20Rainbows%2C%20Cover%20art.jpeg",
      "date": "10 October 2007",
      "genre": "\n               Art Rock\n               Alternative Rock\n         ",
      "price": 140
    },
    {
      "name": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
      "artist": "David Bowie",
      "image": "//e.snmc.io/i/300/s/fffb0974b74021ce584f567a63233e77/8542182/David%20Bowie%20-%20The%20Rise%20and%20Fall%20of%20Ziggy%20Stardust%20and%20the%20Spiders%20From%20Mars%2C%20Cover%20art.png",
      "date": "16 June 1972",
      "genre": "\n               Glam Rock\n               Pop Rock\n         ",
      "price": 110
    },
    {
      "name": "good kid, m.A.A.d city",
      "artist": "Kendrick Lamar",
      "image": "//e.snmc.io/i/300/s/e41bf333e45262cc7122d970372c24b2/4367819/Kendrick%20Lamar%20-%20good%20kid%2C%20m_A_A_d%20city%2C%20Cover%20art.jpeg",
      "date": "22 October 2012",
      "genre": "\n               West Coast Hip Hop\n               Conscious Hip Hop\n         ",
      "price": 120
    },
    {
      "name": "The Velvet Underground & Nico",
      "artist": "The Velvet UndergroundNico",
      "image": "//e.snmc.io/i/300/s/cf7888c3c5d45ef556e74ee560887f8b/6988068/The%20Velvet%20Underground%20%26%20Nico%20-%20The%20Velvet%20Underground%20%26%20Nico%2C%20Cover%20art.png",
      "date": "12 March 1967",
      "genre": "\n               Art Rock\n               Experimental Rock\n         ",
      "price": 150
    },
    {
      "name": "The Black Saint and the Sinner Lady",
      "artist": "",
      "image": "//e.snmc.io/i/300/s/72de16523052a225402f8583e6e880b4/8024579/Mingus%20-%20The%20Black%20Saint%20and%20the%20Sinner%20Lady%2C%20Cover%20art.png",
      "date": "July 1963",
      "genre": "\n               Avant-Garde Jazz\n               Third Stream\n         ",
      "price": 80
    },
    {
      "name": "Remain in Light",
      "artist": "Talking Heads",
      "image": "//e.snmc.io/i/300/s/a9484c337fd74498a4e8a5a6143567aa/5627825/Talking%20Heads%20-%20Remain%20in%20Light%2C%20Cover%20art.jpeg",
      "date": "8 October 1980",
      "genre": "\n               New Wave\n               Post-Punk\n         ",
      "price": 140
    },
    {
      "name": "Revolver",
      "artist": "The Beatles",
      "image": "//e.snmc.io/i/300/s/13122393ff501d715649f57a80ab4f78/6112311/The%20Beatles%20-%20Revolver%2C%20Cover%20art.png",
      "date": "5 August 1966",
      "genre": "\n               Pop Rock\n               Psychedelic Pop\n         ",
      "price": 190
    },
    {
      "name": "A Love Supreme",
      "artist": "John Coltrane",
      "image": "//e.snmc.io/i/300/s/ada392a52735ed0db8bcfbecd0901f72/8835374/John%20Coltrane%20-%20A%20Love%20Supreme%2C%20Cover%20art.jpeg",
      "date": "February 1965",
      "genre": "\n               Spiritual Jazz\n               Avant-Garde Jazz\n         ",
      "price": 120
    },
    {
      "name": "Kind of Blue",
      "artist": "Miles Davis",
      "image": "//e.snmc.io/i/300/s/15936c779dbb7a62718ae0edd76bd1b8/7426308/Miles%20Davis%20-%20Kind%20of%20Blue%2C%20Cover%20art.jpeg",
      "date": "17 August 1959",
      "genre": "\n               Modal Jazz\n               Cool Jazz\n         ",
      "price": 160
    },
    {
      "name": "Illmatic",
      "artist": "Nas",
      "image": "//e.snmc.io/i/300/s/239995da7fba21d556be0273d6ac19d5/5352803/Nas%20-%20Illmatic%2C%20Cover%20art.jpeg",
      "date": "19 April 1994",
      "genre": "\n               East Coast Hip Hop\n               Boom Bap\n               Hardcore Hip Hop\n         ",
      "price": 90
    },
    {
      "name": "Paranoid",
      "artist": "Black Sabbath",
      "image": "//e.snmc.io/i/300/s/683a84ab6dbb5c48a2c2fffecbbf07e9/2651476/Black%20Sabbath%20-%20Paranoid%2C%20Cover%20art.jpeg",
      "date": "18 September 1970",
      "genre": "\n               Heavy Metal\n               Hard Rock\n         ",
      "price": 100
    },
    {
      "name": "Lift Yr. Skinny Fists Like Antennas to Heaven!",
      "artist": "",
      "image": "//e.snmc.io/i/300/s/54cbbfecff58031af098939aa7a89617/5662600/Godspeed%20You%20Black%20Emperor!%20-%20Lift%20Yr_%20Skinny%20Fists%20Like%20Antennas%20to%20Heaven!%2C%20Cover%20art.jpeg",
      "date": "9 October 2000",
      "genre": "\n               Post-Rock\n         ",
      "price": 160
    },
    {
      "name": "Pet Sounds",
      "artist": "The Beach Boys",
      "image": "//e.snmc.io/i/300/s/c35b25c4a2a60921553398c4406575f7/3633017/The%20Beach%20Boys%20-%20Pet%20Sounds%2C%20Cover%20art.jpeg",
      "date": "16 May 1966",
      "genre": "\n               Baroque Pop\n         ",
      "price": 170
    },
    {
      "name": "Enter the Wu-Tang (36 Chambers)",
      "artist": "Wu-Tang Clan",
      "image": "//e.snmc.io/i/300/s/f3843cc709560cccc8569d434b8e9c41/6558603/Wu-Tang%20Clan%20-%20Enter%20the%20Wu-Tang%20(36%20Chambers)%2C%20Cover%20art.jpeg",
      "date": "9 November 1993",
      "genre": "\n               East Coast Hip Hop\n               Boom Bap\n               Hardcore Hip Hop\n         ",
      "price": 180
    },
    {
      "name": "Red",
      "artist": "King Crimson",
      "image": "//e.snmc.io/i/300/s/c2e47ffd0a3117492fda52bc97a21540/2601521/King%20Crimson%20-%20Red%2C%20Cover%20art.jpeg",
      "date": "6 October 1974",
      "genre": "\n               Progressive Rock\n               Art Rock\n         ",
      "price": 90
    },
    {
      "name": "Disintegration",
      "artist": "The Cure",
      "image": "//e.snmc.io/i/300/s/b1f46acfa7c5c71f55f30043819d5fa8/7272164/The%20Cure%20-%20Disintegration%2C%20Cover%20art.jpeg",
      "date": "2 May 1989",
      "genre": "\n               Gothic Rock\n               Post-Punk\n         ",
      "price": 190
    },
    {
      "name": "My Beautiful Dark Twisted Fantasy",
      "artist": "Kanye West",
      "image": "//e.snmc.io/i/300/s/f5f5457edd60635215826d6d9b192aa9/6045065/Kanye%20West%20-%20My%20Beautiful%20Dark%20Twisted%20Fantasy%2C%20Cover%20art.jpeg",
      "date": "22 November 2010",
      "genre": "\n               Pop Rap\n               Hip Hop\n         ",
      "price": 140
    },
    {
      "name": "In the Aeroplane Over the Sea",
      "artist": "Neutral Milk Hotel",
      "image": "//e.snmc.io/i/300/s/75c756c51d822289e6246e51bc2ff2b9/6902522/Neutral%20Milk%20Hotel%20-%20In%20the%20Aeroplane%20Over%20the%20Sea%2C%20Cover%20art.jpeg",
      "date": "10 February 1998",
      "genre": "\n               Indie Folk\n               Indie Rock\n         ",
      "price": 130
    },
    {
      "name": "Spiderland",
      "artist": "Slint",
      "image": "//e.snmc.io/i/300/s/9b346cc22733374f1eef7ce156d739d7/2161189/Slint%20-%20Spiderland%2C%20Cover%20art.jpeg",
      "date": "27 March 1991",
      "genre": "\n               Post-Rock\n               Post-Hardcore\n               Math Rock\n         ",
      "price": 140
    },
    {
      "name": "Pink Moon",
      "artist": "Nick Drake",
      "image": "//e.snmc.io/i/300/s/402c4e4a46a8ddbbdc823f261951db19/2509162/Nick%20Drake%20-%20Pink%20Moon%2C%20Cover%20art.jpeg",
      "date": "25 February 1972",
      "genre": "\n               Contemporary Folk\n               Singer-Songwriter\n         ",
      "price": 150
    },
    {
      "name": "Sgt. Pepper's Lonely Hearts Club Band",
      "artist": "The Beatles",
      "image": "//e.snmc.io/i/300/s/f4d3f1366e6b361a5617dbbbebebf914/6617240/The%20Beatles%20-%20Sgt_%20Pepper's%20Lonely%20Hearts%20Club%20Band%2C%20Cover%20art.jpeg",
      "date": "1 June 1967",
      "genre": "\n               Psychedelic Pop\n               Pop Rock\n         ",
      "price": 120
    },
    {
      "name": "Animals",
      "artist": "Pink Floyd",
      "image": "//e.snmc.io/i/300/s/1283801071b5e25d584f94132d4a1d23/4175208/Pink%20Floyd%20-%20Animals%2C%20Cover%20art.png",
      "date": "21 January 1977",
      "genre": "\n               Progressive Rock\n               Art Rock\n         ",
      "price": 100
    },
    {
      "name": "The Beatles [White Album]",
      "artist": "The Beatles",
      "image": "//e.snmc.io/i/300/s/8a8f9e1df479fdea7e9a0164d55cd3c9/7430929/The%20Beatles%20-%20The%20Beatles%20%5BWhite%20Album%5D%2C%20Cover%20art.jpeg",
      "date": "22 November 1968",
      "genre": "\n               Pop Rock\n               Rock\n         ",
      "price": 190
    },
    {
      "name": "Unknown Pleasures",
      "artist": "Joy Division",
      "image": "//e.snmc.io/i/300/s/d0652ce9bf04adebc69a4fcd80a9ca0f/10154759/Joy%20Division%20-%20Unknown%20Pleasures%2C%20Cover%20art.jpeg",
      "date": "15 June 1979",
      "genre": "\n               Post-Punk\n         ",
      "price": 130
    },
    {
      "name": "The Queen Is Dead",
      "artist": "The Smiths",
      "image": "//e.snmc.io/i/300/s/58d757c275130de1e1f72cb3c75d6568/1816031/The%20Smiths%20-%20The%20Queen%20Is%20Dead%2C%20Cover%20art.jpeg",
      "date": "16 June 1986",
      "genre": "\n               Jangle Pop\n               Indie Pop\n         ",
      "price": 160
    },
    {
      "name": "In a Silent Way",
      "artist": "Miles Davis",
      "image": "//e.snmc.io/i/300/s/8567e5648c089934348afc431e240bfb/9687885/Miles%20Davis%20-%20In%20a%20Silent%20Way%2C%20Cover%20art.png",
      "date": "30 July 1969",
      "genre": "\n               Jazz Fusion\n               Modal Jazz\n         ",
      "price": 180
    },
    {
      "name": "Long Season",
      "artist": "Fishmans",
      "image": "//e.snmc.io/i/300/s/0e4a85b80cf8000f9772964385d8a78d/7461038/Fishmans%20-%20Long%20Season%2C%20Cover%20art.jpeg",
      "date": "25 October 1996",
      "genre": "\n               Dream Pop\n               Neo-Psychedelia\n               Progressive Pop\n         ",
      "price": 130
    },
    {
      "name": "Vespertine",
      "artist": "Björk",
      "image": "//e.snmc.io/i/300/s/605a81773564025f555d0f557e6051d5/9935583/Bj%C3%B6rk%20-%20Vespertine%2C%20Cover%20art.jpeg",
      "date": "27 August 2001",
      "genre": "\n               Art Pop\n               Electronic\n         ",
      "price": 170
    },
    {
      "name": "Highway 61 Revisited",
      "artist": "Bob Dylan",
      "image": "//e.snmc.io/i/300/s/7ec99147b8df42c4e21195773c1a4fd8/3677487/Bob%20Dylan%20-%20Highway%2061%20Revisited%2C%20Cover%20art.jpeg",
      "date": "30 August 1965",
      "genre": "\n               Folk Rock\n               Singer-Songwriter\n         ",
      "price": 80
    },
    {
      "name": "Hounds of Love",
      "artist": "Kate Bush",
      "image": "//e.snmc.io/i/300/s/172b7e49acca3c5d7fc5ac16e70c4d1b/4288422/Kate%20Bush%20-%20Hounds%20of%20Love%2C%20Cover%20art.png",
      "date": "16 September 1985",
      "genre": "\n               Art Pop\n               Progressive Pop\n         ",
      "price": 110
    },
    {
      "name": "Dummy",
      "artist": "Portishead",
      "image": "//e.snmc.io/i/300/s/8f0cd2c99089c5707561da574f7bba78/10069850/Portishead%20-%20Dummy%2C%20Cover%20art.png",
      "date": "22 August 1994",
      "genre": "\n               Trip Hop\n         ",
      "price": 170
    },{
        "name": "Doolittle",
        "artist": "Pixies",
        "image": "//e.snmc.io/i/300/s/98ee48f39c8975d540d167e783429551/9267576/Pixies%20-%20Doolittle%2C%20Cover%20art.png",
        "date": "17 April 1989",
        "genre": "\n               Alternative Rock\n               Indie Rock\n         ",
        "price": 180
      },
      {
        "name": "Songs in the Key of Life",
        "artist": "Stevie Wonder",
        "image": "//e.snmc.io/i/300/s/9f0c2a2a1ce861195bfc5d26ce628159/7228470/Stevie%20Wonder%20-%20Songs%20in%20the%20Key%20of%20Life%2C%20Cover%20art.jpeg",
        "date": "28 September 1976",
        "genre": "\n               Soul\n         ",
        "price": 90
      },
      {
        "name": "98.12.28 男達の別れ (98.12.28 Otokotachi no Wakare)",
        "artist": "Fishmans",
        "image": "//e.snmc.io/i/300/s/f308c9a3ef6f8f820a80753ead9319a5/6123720/Fishmans%20-%2098_12_28%20%E7%94%B7%E9%81%94%E3%81%AE%E5%88%A5%E3%82%8C%20(98_12_28%20Otokotachi%20no%20Wakare)%2C%20Cover%20art.png",
        "date": "29 September 1999",
        "genre": "\n               Dream Pop\n               Neo-Psychedelia\n         ",
        "price": 120
      },
      {
        "name": "Low",
        "artist": "David Bowie",
        "image": "//e.snmc.io/i/300/s/330d3567260dba9e40117f7891ddc63c/4503212/David%20Bowie%20-%20Low%2C%20Cover%20art.jpeg",
        "date": "14 January 1977",
        "genre": "\n               Art Rock\n         ",
        "price": 80
      },
      {
        "name": "Led Zeppelin [IV]",
        "artist": "Led Zeppelin",
        "image": "//e.snmc.io/i/300/s/e70c9df634dcdaa8085350ba2e2d0171/5707164/Led%20Zeppelin%20-%20Led%20Zeppelin%20%5BIV%5D%2C%20Cover%20art.jpeg",
        "date": "8 November 1971",
        "genre": "\n               Hard Rock\n         ",
        "price": 110
      },
      {
        "name": "F♯A♯∞",
        "artist": "",
        "image": "//e.snmc.io/i/300/s/7104073d56bca700dd4db7b09427e276/1903204/Godspeed%20You%20Black%20Emperor!%20-%20F%E2%99%AFA%E2%99%AF%E2%88%9E%2C%20Cover%20art.jpeg",
        "date": "14 August 1997",
        "genre": "\n               Post-Rock\n         ",
        "price": 180
      },
      {
        "name": "The Glow Pt. 2",
        "artist": "The Microphones",
        "image": "//e.snmc.io/i/300/s/6fd6e266f228c77758c1260ce71733ca/8964258/The%20Microphones%20-%20The%20Glow%20Pt_%202%2C%20Cover%20art.jpeg",
        "date": "11 September 2001",
        "genre": "\n               Indie Folk\n               Psychedelic Folk\n               Lo-Fi / Slacker Rock\n         ",
        "price": 80
      },
      {
        "name": "Bitches Brew",
        "artist": "Miles Davis",
        "image": "//e.snmc.io/i/300/s/df73c16596672a67a9c3a9fb5b5e1db5/2259766/Miles%20Davis%20-%20Bitches%20Brew%2C%20Cover%20art.jpeg",
        "date": "30 March 1970",
        "genre": "\n               Jazz Fusion\n               Avant-Garde Jazz\n         ",
        "price": 150
      },
      {
        "name": "Blonde on Blonde",
        "artist": "Bob Dylan",
        "image": "//e.snmc.io/i/300/s/f95b08e4b5193ec1defa42726a5691a7/6868676/Bob%20Dylan%20-%20Blonde%20on%20Blonde%2C%20Cover%20art.jpeg",
        "date": "20 June 1966",
        "genre": "\n               Folk Rock\n               Singer-Songwriter\n         ",
        "price": 90
      },
      {
        "name": "Souvlaki",
        "artist": "Slowdive",
        "image": "//e.snmc.io/i/300/s/45fcda9f8afa7652df7a4852d000e3bd/8055860/Slowdive%20-%20Souvlaki%2C%20Cover%20art.jpeg",
        "date": "1 June 1993",
        "genre": "\n               Dream Pop\n               Shoegaze\n         ",
        "price": 110
      },
      {
        "name": "Marquee Moon",
        "artist": "Television",
        "image": "//e.snmc.io/i/300/s/6d36f5709b57292f4a39deb8b18bf429/7659700/Television%20-%20Marquee%20Moon%2C%20Cover%20art.jpeg",
        "date": "8 February 1977",
        "genre": "\n               Art Punk\n               Art Rock\n               Post-Punk\n         ",
        "price": 110
      },
      {
        "name": "Endtroducing.....",
        "artist": "DJ Shadow",
        "image": "//e.snmc.io/i/300/s/41a4c785e5c3486617447dae6098e13c/2698402/DJ%20Shadow%20-%20Endtroducing_____%2C%20Cover%20art.jpeg",
        "date": "19 November 1996",
        "genre": "\n               Instrumental Hip Hop\n               Experimental Hip Hop\n               Plunderphonics\n         ",
        "price": 80
      },
      {
        "name": "Close to the Edge",
        "artist": "Yes",
        "image": "//e.snmc.io/i/300/s/d0ecf20a25ea20cb913c2c1e96cfc104/1638254/Yes%20-%20Close%20to%20the%20Edge%2C%20Cover%20art.jpeg",
        "date": "13 September 1972",
        "genre": "\n               Symphonic Prog\n               Progressive Rock\n         ",
        "price": 100
      },
      {
        "name": "The Low End Theory",
        "artist": "A Tribe Called Quest",
        "image": "//e.snmc.io/i/300/s/2633168af2d6881d2b6882dc01761fdb/1724180/A%20Tribe%20Called%20Quest%20-%20The%20Low%20End%20Theory%2C%20Cover%20art.jpeg",
        "date": "24 September 1991",
        "genre": "\n               Jazz Rap\n               East Coast Hip Hop\n               Conscious Hip Hop\n         ",
        "price": 150
      },
      {
        "name": "Blood on the Tracks",
        "artist": "Bob Dylan",
        "image": "//e.snmc.io/i/300/s/b70f9ee7c30000144e211c6efc08c75a/9813259/Bob%20Dylan%20-%20Blood%20on%20the%20Tracks%2C%20Cover%20art.jpeg",
        "date": "20 January 1975",
        "genre": "\n               Singer-Songwriter\n               Folk Rock\n         ",
        "price": 110
      },
      {
        "name": "The Money Store",
        "artist": "Death Grips",
        "image": "https://e.snmc.io/3.0/img/blocked_art/img_blocked_300x300.png",
        "date": "24 April 2012",
        "genre": "\n               Industrial Hip Hop\n               Hardcore Hip Hop\n               Experimental Hip Hop\n         ",
        "price": 140
      },
      {
        "name": "Blonde",
        "artist": "Frank Ocean",
        "image": "//e.snmc.io/i/300/s/c6c7c64a7ecd6a879a8174f3f68d1436/8060362/Frank%20Ocean%20-%20Blonde%2C%20Cover%20art.jpeg",
        "date": "20 August 2016",
        "genre": "\n               Alternative R&B\n               Art Pop\n               Neo-Soul\n         ",
        "price": 110
      },
      {
        "name": "Atrocity Exhibition",
        "artist": "Danny Brown",
        "image": "//e.snmc.io/i/300/s/c950187f50e417740dc2087b8640800c/7838287/Danny%20Brown%20-%20Atrocity%20Exhibition%2C%20Cover%20art.jpeg",
        "date": "30 September 2016",
        "genre": "\n               Experimental Hip Hop\n               Hardcore Hip Hop\n         ",
        "price": 180
      },
      {
        "name": "Electric Ladyland",
        "artist": "The Jimi Hendrix Experience",
        "image": "https://e.snmc.io/3.0/img/blocked_art/img_blocked_300x300.png",
        "date": "25 October 1968",
        "genre": "\n               Blues Rock\n               Psychedelic Rock\n               Acid Rock\n         ",
        "price": 180
      },
      {
        "name": "The College Dropout",
        "artist": "Kanye West",
        "image": "//e.snmc.io/i/300/s/d40a2d972e6085eb0d183d104bd3989e/4096884/Kanye%20West%20-%20The%20College%20Dropout%2C%20Cover%20art.jpeg",
        "date": "10 February 2004",
        "genre": "\n               Chipmunk Soul\n               Pop Rap\n         ",
        "price": 160
      },
      {
        "name": "The Doors",
        "artist": "The Doors",
        "image": "//e.snmc.io/i/300/s/0fcc333d9b0c3e3c48f1cd55e598eef7/2281803/The%20Doors%20-%20The%20Doors%2C%20Cover%20art.jpeg",
        "date": "4 January 1967",
        "genre": "\n               Psychedelic Rock\n         ",
        "price": 170
      },
      {
        "name": "Master of Reality",
        "artist": "Black Sabbath",
        "image": "//e.snmc.io/i/300/s/b9f082f46adf865a8a4979cc6dc6888f/2918156/Black%20Sabbath%20-%20Master%20of%20Reality%2C%20Cover%20art.jpeg",
        "date": "21 July 1971",
        "genre": "\n               Heavy Metal\n         ",
        "price": 130
      },
      {
        "name": "Homogenic",
        "artist": "Björk",
        "image": "//e.snmc.io/i/300/s/0e3b36f0c33dd563cf6f024d0975e7f4/8697079/Bj%C3%B6rk%20-%20Homogenic%2C%20Cover%20art.jpeg",
        "date": "22 September 1997",
        "genre": "\n               Art Pop\n               Electronic\n         ",
        "price": 120
      },
      {
        "name": "Closer",
        "artist": "Joy Division",
        "image": "//e.snmc.io/i/300/s/0f891d9a5bce5bf4c9d2ca9be7b21485/7790079/Joy%20Division%20-%20Closer%2C%20Cover%20art.jpeg",
        "date": "18 July 1980",
        "genre": "\n               Post-Punk\n         ",
        "price": 110
      },
      {
        "name": "Either / Or",
        "artist": "Elliott Smith",
        "image": "//e.snmc.io/i/300/s/5b02b824d2241eddff8cc96da74aefb0/5191061/Elliott%20Smith%20-%20Either%20%2F%20Or%2C%20Cover%20art.jpeg",
        "date": "25 February 1997",
        "genre": "\n               Singer-Songwriter\n               Indie Folk\n         ",
        "price": 140
      },
      {
        "name": "Heaven or Las Vegas",
        "artist": "Cocteau Twins",
        "image": "//e.snmc.io/i/300/s/61cf20c38cbde9ef9a022192385b0db0/8917820/Cocteau%20Twins%20-%20Heaven%20or%20Las%20Vegas%2C%20Cover%20art.jpeg",
        "date": "17 September 1990",
        "genre": "\n               Dream Pop\n         ",
        "price": 90
      },
      {
        "name": "Illinois",
        "artist": "Sufjan Stevens",
        "image": "//e.snmc.io/i/300/s/64147c3e8c8e8bbfba6112b9503d507e/6845564/Sufjan%20Stevens%20-%20Illinois%2C%20Cover%20art.jpeg",
        "date": "5 July 2005",
        "genre": "\n               Chamber Pop\n               Singer-Songwriter\n         ",
        "price": 130
      },
      {
        "name": "Are You Experienced",
        "artist": "The Jimi Hendrix Experience",
        "image": "//e.snmc.io/i/300/s/cd8d1b16d8a310ffbb6336514dc55383/2609770/The%20Jimi%20Hendrix%20Experience%20-%20Are%20You%20Experienced%2C%20Cover%20art.jpeg",
        "date": "12 May 1967",
        "genre": "\n               Blues Rock\n               Psychedelic Rock\n               Acid Rock\n         ",
        "price": 130
      },
      {
        "name": "Soundtracks for the Blind",
        "artist": "Swans",
        "image": "//e.snmc.io/i/300/s/65194526cb607b9afc16895da37e908c/1868623/Swans%20-%20Soundtracks%20for%20the%20Blind%2C%20Cover%20art.jpeg",
        "date": "22 October 1996",
        "genre": "\n               Experimental Rock\n               Post-Rock\n               Experimental\n         ",
        "price": 140
      },
      {
        "name": "What's Going On",
        "artist": "Marvin Gaye",
        "image": "//e.snmc.io/i/300/s/19973795b3f67b91254ce7f04a13b279/6368145/Marvin%20Gaye%20-%20What's%20Going%20On%2C%20Cover%20art.jpeg",
        "date": "21 May 1971",
        "genre": "\n               Soul\n         ",
        "price": 130
      },
      {
        "name": "★ [Blackstar]",
        "artist": "David Bowie",
        "image": "//e.snmc.io/i/300/s/4564caed35a234137937d4f319679827/5978111/David%20Bowie%20-%20%E2%98%85%20%5BBlackstar%5D%2C%20Cover%20art.png",
        "date": "8 January 2016",
        "genre": "\n               Art Rock\n         ",
        "price": 130
      },
      {
        "name": "Laughing Stock",
        "artist": "Talk Talk",
        "image": "//e.snmc.io/i/300/s/4d2a91150f3a233464678cc457e692b5/6811660/Talk%20Talk%20-%20Laughing%20Stock%2C%20Cover%20art.jpeg",
        "date": "19 November 1991",
        "genre": "\n               Post-Rock\n         ",
        "price": 140
      },
      {
        "name": "Songs of Leonard Cohen",
        "artist": "Leonard Cohen",
        "image": "//e.snmc.io/i/300/s/488fe0a4c49914155d79df9f318be7e8/2522186/Leonard%20Cohen%20-%20Songs%20of%20Leonard%20Cohen%2C%20Cover%20art.jpeg",
        "date": "27 December 1967",
        "genre": "\n               Contemporary Folk\n               Singer-Songwriter\n         ",
        "price": 170
      },
      {
        "name": "Station to Station",
        "artist": "David Bowie",
        "image": "//e.snmc.io/i/300/s/2d16930b51f5f38dee253da609bfd747/2662002/David%20Bowie%20-%20Station%20to%20Station%2C%20Cover%20art.jpeg",
        "date": "23 January 1976",
        "genre": "\n               Art Rock\n         ",
        "price": 180
      },
      {
        "name": "MM..FOOD",
        "artist": "MF DOOM",
        "image": "//e.snmc.io/i/300/s/b760786ad37a62f352462498f7ee1ab8/1317618/MF%20DOOM%20-%20MM__FOOD%2C%20Cover%20art.jpeg",
        "date": "16 November 2004",
        "genre": "\n               East Coast Hip Hop\n               Abstract Hip Hop\n         ",
        "price": 130
      },
      {
        "name": "Ride the Lightning",
        "artist": "Metallica",
        "image": "//e.snmc.io/i/300/s/279a65c12eefddddc7121f8ff1c99107/3693902/Metallica%20-%20Ride%20the%20Lightning%2C%20Cover%20art.jpeg",
        "date": "30 July 1984",
        "genre": "\n               Thrash Metal\n         ",
        "price": 170
      },
      {
        "name": "The Velvet Underground",
        "artist": "The Velvet Underground",
        "image": "//e.snmc.io/i/300/s/c75e2048bf8907d2f8bdc3507fee4bb9/5706942/The%20Velvet%20Underground%20-%20The%20Velvet%20Underground%2C%20Cover%20art.jpeg",
        "date": "March 1969",
        "genre": "\n               Pop Rock\n         ",
        "price": 160
      },
      {
        "name": "Liquid Swords",
        "artist": "",
        "image": "//e.snmc.io/i/300/s/767ca7c87c31ba13a3147241d19b63af/2679854/Genius%2FGZA%20-%20Liquid%20Swords%2C%20Cover%20art.jpeg",
        "date": "7 November 1995",
        "genre": "\n               East Coast Hip Hop\n               Hardcore Hip Hop\n               Boom Bap\n         ",
        "price": 100
      },
      {
        "name": "Selected Ambient Works 85-92",
        "artist": "Aphex Twin",
        "image": "//e.snmc.io/i/300/s/69317721ba730c3bf0ee2d17eb589a79/1353614/Aphex%20Twin%20-%20Selected%20Ambient%20Works%2085-92%2C%20Cover%20art.jpeg",
        "date": "9 November 1992",
        "genre": "\n               Ambient Techno\n               IDM\n         ",
        "price": 130
      },
      {
        "name": "Aquemini",
        "artist": "OutKast",
        "image": "//e.snmc.io/i/300/s/a1e63049f6f1ad0f3699b727f1ef62b0/8595826/OutKast%20-%20Aquemini%2C%20Cover%20art.jpeg",
        "date": "29 September 1998",
        "genre": "\n               Southern Hip Hop\n               Conscious Hip Hop\n         ",
        "price": 150
      }
  ];

  export default albums;