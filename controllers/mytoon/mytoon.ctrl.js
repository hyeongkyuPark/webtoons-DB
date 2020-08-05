const models = require('../../models');
const axios = require('axios');

exports.post_mytoon = ((request, response)=> {

    
   request.body.list.forEach(async (item) => {
       
    
    let newToon = await axios.post('http://localhost:3000/search/one', {url: item.url})
       .then((res) => {
            let newToon = {
                mytoonTitle: item.title,
                userId: request.body.id,
                mytoonWriter: res.data.writer,
                mytoonDescription: res.data.description,
                mytoonThumb: item.imgUrl,
                mytoonUrl: item.url,
                mytoonGenre: res.data.genre,
                mytoonAge: res.data.age,
                mytoonWeekday: item.weekDay,
                mytoonBookmark: 0,
                mytoonVisiable: true
            }
    
            return newToon;
       })
       
        await models.Mytoon.create(newToon)
        .then(()=> {
            return response.send(true);
        })
        .catch((err)=>{
            return response.send(false);
        });
   });
});


exports.get_all = (async (request, response) => {

    await models.Mytoon.findAll()
    .then((result) => {
        response.send(result);
    });
});

exports.get_my_toon = (async (request, response) => {

    await models.Mytoon.findAll({
        where : {
            userId: request.param('userId')
        }
    }).then(result => {
        response.send(result);
    });

});