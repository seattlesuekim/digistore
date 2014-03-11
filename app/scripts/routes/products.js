App.ProductsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find("product")
    }
})

//cart.get("items").then(function) {
//something.set('qty')