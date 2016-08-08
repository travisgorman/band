import Backbone from 'backbone';
import voteModel from '.././Models/voteModel';

const VotesCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_rJ7JE9Xt/votesCollection`,
  model: voteModel
});

let votesCollection = new VotesCollection;

export default votesCollection;
