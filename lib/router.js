
Router.route('/', function () {
    this.layout('layout');
    this.render('jewels');
});

Router.route('/jewels', function () {
    this.layout('layout');
    this.render('jewels');
});

Router.route('/jewels/:_id', function() {
    this.layout('layout');
    this.render('jewelDetail', {
        // we don't really need this since we set the data context for the
        // the entire layout above. But this demonstrates how you can set
        // a new data context for each specific region.
        data: function () { return Jewels.findOne({_id: this.params._id}) }
    });

});


Router.route('/jewels/:_id/cancel', function() {    
    Jewels.update(this.params._id, {
        $set: {owner: "", isActive: true}
    });
    this.redirect('/jewels');
});
