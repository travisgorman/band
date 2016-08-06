import Backbone from 'backbone';
import voteModel from 'voteModel';

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_rJ7JE9Xt/votesCollection`,
  model: voteModel
});
