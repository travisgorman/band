import Backbone from 'backbone';
import voteModel from '.././Models/voteModel';
import store from '../store';

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_rJ7JE9Xt/votesCollection`,
  model: voteModel
});

// let votesCollection = new VotesCollection;
