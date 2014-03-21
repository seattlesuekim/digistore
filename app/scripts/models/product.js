App.Product = DS.Model.extend({
    name: DS.attr("string"),
    price: DS.attr("number"),
    description: DS.attr("string"),
    image: DS.attr("string"),
    avatar: DS.attr("string"),
    item: DS.belongsTo('item', {async: true})
    });




//        name: "Whitechapel: This is Exile",
//        price: 500,
//        image: "https://pbs.twimg.com/media/BbjrbKeIAAAEazz.jpg",
//        avatar: "http://ecx.images-amazon.com/images/I/61XrdfcpqBL._SL75_SS50_.jpg",
//        description: "This Is Exile is the second album by the American deathcore band Whitechapel. It was produced by Jonny Fay and the band itself and was released on July 8, 2008 through Metal Blade Records.",
