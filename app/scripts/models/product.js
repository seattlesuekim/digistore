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
        name: "A New Era of Corruption by Whitechapel",
        price: 5000,
        image: "https://pbs.twimg.com/media/BdQ_UrQCcAEwFCC.jpg",
        avatar: "http://s.pixogs.com/image/R-50-2618004-1293522600.jpeg",
        description: "A New Era of Corruption is the third studio album by Whitechapel. It was released worldwide on June 8, 2010, through Metal Blade Records. In the USA, just under 10,700 copies were sold in the first week, placing it at No. 43 on the Billboard 200 chart.",
    }, {
        id: 2,
        name: "This is Exile by Whitechapel",
        price: 5000,
        image: "https://pbs.twimg.com/media/BbjrbKeIAAAEazz.jpg",
        avatar: "http://ecx.images-amazon.com/images/I/61XrdfcpqBL._SL75_SS50_.jpg",
        description: "This Is Exile is the second album by the American deathcore band Whitechapel. It was produced by Jonny Fay and the band itself and was released on July 8, 2008 through Metal Blade Records.",
    }
]