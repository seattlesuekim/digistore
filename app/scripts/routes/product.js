App.ProductRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find("product", params.product_id);
    },

    actions: {
        addToCart: function (prod) {

            var item = this.store.createRecord('item', {
                product: prod,
                qty: 1,
                currPrice: prod.get("price")
            });

            this.store.find("cart", 1).then(function (cart) {
                item.set("cart", cart);
                item.save();
                cart.get("items").then(function (items) {
                    items.pushObject(item);
                });
            });
            this.transitionTo("cart");
        }
    }
});