const axios = require('axios');
axios.post('https://shazib.online/ords/general/service/contact/post', {
    api_name: 'post',
    api_email:'khanbabars@gmail.com',
   api_comments:'example post'
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });