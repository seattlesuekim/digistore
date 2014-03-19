App.EditProductRoute = Ember.Route.extend({
    model: function(params) {
        debugger;
        return this.store.find("product", params.product_id);
    },

    actions: {
        saveProduct: function(product) {
            product.save();
            alert("Your album has been upated.");
            this.transitionTo('admin');

        },
        deleteProduct: function(product) {
            alert("Are you sure? :(");
            product.deleteRecord();
            product.save();
            alert("You have destroyed this album.");
            this.transitionTo('admin');
        }
    }
});