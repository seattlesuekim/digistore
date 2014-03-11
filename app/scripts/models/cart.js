App.Cart = DS.Model.extend({
    items: DS.hasMany('item', {async: true}),
    subtotal: DS.attr("number")
})

App.Cart.FIXTURES = [
    {
        id: 1,
        items: [1, 2],
        subtotal: 3000
    }
    ]