import Backbone from 'backbone';
import voteModel from '.././Models/voteModel';
import store from '../store';

const VotesCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_rJ7JE9Xt/votesCollection`,
  // headers: {
  //   "Authorization": `Kinvey  ${store.session.authtoken}`
  // },
  model: voteModel
});

// let votesCollection = new VotesCollection;

export default VotesCollection;
