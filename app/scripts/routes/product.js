App.ProductRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find("product", params.product_id);
    },

    actions: {
        addToCart: function(prod) {
            var isInCart = function(item {
                App.Cart.all().find('item', item.product);
            };

            if (isInCart(prod)) {
                var item = this.store.updateRecord('item', {
                   quantity: this.incrementProperty('quantity')
                });
            };

            var item = this.store.createRecord('item', {
                product: prod,
                quantity: 1,
                currPrice: prod.get("price")
            });

            this.store.find("cart", 1).then(function(cart) {
                item.set("cart", cart);
                item.save();
                cart.get("items").then(function(items) {
                    items.pushObject(item);
                });
            });
            this.transitionTo("cart");
        }
    }
});