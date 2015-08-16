if (Meteor.isClient) {


  Template.jewels.helpers({
    jewels: function () {
      return Jewels.find({}, {sort: {isActive: -1}});
    },

    percentDone: function () {
      var done = Jewels.find({isActive: false}).count();
      var total = Jewels.find().count();
      var ratio = done/total;
      var percentDone = Math.round(ratio*100);

      return percentDone || '...';
    }
  });


  Template.layout.helpers({
    time: function () {
      // Set moment locale
      moment.locale('fr');
      return moment([2015, 7, 18]).fromNow();
    }   
  });

  Template.jewelDetail.events({
    'submit form': function (e, t) {
      e.preventDefault();

      _owner = t.find('#owner_value').value;

      Jewels.update(this._id, {
        $set: {owner: _owner, isActive: false}
      });
    },
    'keyup #owner_value': function (e, t) {

      _owner = t.find('#owner_value').value;
      if(_owner != "") {
        t.find("#submit").removeAttribute("disabled");
      }
      else {
        t.find("#submit").setAttribute("disabled", "disabled");
      }
    },
    'click #cancel': function (e, t) {
      Jewels.update(this._id, {
        $set: {owner: "", isActive: true}
      });
    }
  });

}

