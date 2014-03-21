App.Order = DS.Model.extend({
    cart:      DS.belongsTo("cart", {async: true}),
    name:      DS.attr("string"),
    email:     DS.attr("string"),
    zip:       DS.attr("string"),
    cc_number: DS.attr("string"),
    exp:       DS.attr("string"),
    cvv:       DS.attr("string")
});