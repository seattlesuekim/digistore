App.CartRoute = Ember.Route.extend({
    model: function () {
        return this.store.find("cart", 1);
    },

    actions: {
        more: function (item) {
            item.incrementProperty('qty');
            item.save();
        },

        less: function (item) {
            var qty = item.get('qty');
            if (qty > 1) {
                item.decrementProperty('qty');
            }
        },

        removeFromCart: function(item) {
            this.store.find('cart', 1).then(function(cart) {
                cart.get('items').then(function(items) {
                    items.removeObject(item);
                });
                item.deleteRecord();
            });
        }
    }
});