App.CartsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find("cart", 1);
    }
});