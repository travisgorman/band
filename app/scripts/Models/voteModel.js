import Backbone from 'backbone';

export default Backbone.Model.extend({
  rootUrl: `https://baas.kinvey.com/appdata/kid_rJ7JE9Xt/votesCollection`,
  default: {
    bandName: '',
    thumbnail: '',
    votes: 0
  }
});
