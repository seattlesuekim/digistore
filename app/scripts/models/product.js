App.Product = DS.Model.extend({
    name: DS.attr("string"),
    price: DS.attr("number"),
    description: DS.attr("string"),
    image: DS.attr("string"),
    avatar: DS.attr("string"),
    item: DS.belongsTo('item', {async: true})
})

App.Product.FIXTURES = [
    {
        id: 1,
        name: "Marilyn Manson: Holy Wood",
        price: 1000,
        image: "http://iv1.lisimg.com/image/1287406/600full-holy-wood-(in-the-shadow-of-the-valley-of-death)-cover.jpg",
        avatar: "http://www.amoeba.com/sized-images/max/50/60//uploads/buy_stuff_here//MarilynManson_HolyWood.jpg",
        description: "The death of one is a tragedy, the death of millions is just a statistic."
    },
    {
        id: 2,
        name: "Job For A Cowboy: Genesis",
        price: 800,
        image: "http://upload.wikimedia.org/wikipedia/en/9/96/JFAC_Genesis.jpg",
        avatar: "http://www.nuclearblast.de/static/articles/142/142425.jpg/50x50.jpg",
        description: "Genesis is the debut full-length album by American death metal band Job for a Cowboy. Released on May 15, 2007 through Metal Blade Records, it is their first concept album and is based on possible consequences of the VeriChip, along with the Book of Revelation and apocalyptic theories."
    },
    {
        id: 3,
        name: "Whitechapel: A New Era of Corruption",
        price: 500,
        image: "https://pbs.twimg.com/media/BdQ_UrQCcAEwFCC.jpg",
        avatar: "http://s.pixogs.com/image/R-50-2618004-1293522600.jpeg",
        description: "A New Era of Corruption is the third studio album by Whitechapel. It was released worldwide on June 8, 2010, through Metal Blade Records. In the USA, just under 10,700 copies were sold in the first week, placing it at No. 43 on the Billboard 200 chart.",
    }, {
        id: 4,
        name: "Whitechapel: This is Exile",
        price: 500,
        image: "https://pbs.twimg.com/media/BbjrbKeIAAAEazz.jpg",
        avatar: "http://ecx.images-amazon.com/images/I/61XrdfcpqBL._SL75_SS50_.jpg",
        description: "This Is Exile is the second album by the American deathcore band Whitechapel. It was produced by Jonny Fay and the band itself and was released on July 8, 2008 through Metal Blade Records.",
    }
]