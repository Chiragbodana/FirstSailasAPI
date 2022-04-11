module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New muna user created',
    },
    emailAlreadyInUse: {
      statusCode: 400,
     description: 'Email address already in use',
    },
    error:{
      description: 'Something went wrong',
    },
  },


  fn: async function (_, exits) {

    // All done.
    // return;

  }


};
