Ember.Handlebars.helper('toDollars', function(price) {
    return (parseFloat(price) / 100).toFixed(2);
});