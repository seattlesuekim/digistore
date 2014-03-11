App.Item = DS.Model.extend({
    product: DS.belongsTo('product', {async: true}),
    cart: DS.belongsTo('cart', {async: true}),
    currPrice: DS.attr("number"),
    quantity: DS.attr("number")
})

App.Item.FIXTURES = [
    {
        id: 1,
        product: 1,
        currPrice: 5000,
        quantity: 1
    },
    {
        id: 2,
        product: 2,
        currPrice: 3000,
        quantity: 2
    }
]
