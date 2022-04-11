module.exports = {


  friendlyName: 'Index',


  description: 'Index home.',


  inputs: {

  },


  exits: {

  },


  fn: async function (_, exits) {
    // All done.
    // return;
    exits.success({message: 'LogRocket Sails API'});
  }


};
