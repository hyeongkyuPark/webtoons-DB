const models = require('../../models');

exports.join= (async (request, response) => {

    await models.User.create(request.body)
    .then(()=> {
        return response.send(true);
    })
    .catch((err)=>{
        return response.send(false);
    });
  
});


exports.login=(async (request, response) => {

    await models.User.findOne({
        where: {
            userId: request.body.userId
        }
    }).then((result) => {
        if(result) {
            if(request.body.userPw == result.userPw) {
                return response.send(true);
            } else {
                return response.send('no match pw');
            }
        } else {
            return response.send(false);
        }
    });
});