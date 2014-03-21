App.Router.map(function(){
    this.resource("cart");
    this.resource('checkout');
    this.resource('confirmation', { path: "order/:order_id" });
    this.resource("products", { path: "/" }, function () {
        this.resource("product", { path: ":product_id" });
    });
    this.resource("admin", function() {
        this.resource('productEdit', {path: ':product_id' });
        this.resource('productNew', {path: 'products/new'});
    });
});