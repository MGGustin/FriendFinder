var friendsData = require('../data/friendsData');


module.exports = function (app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });
    
    app.post('/api/friends', function(req, res) {
        var newfriend= req.body;
        var score= friendsData.scores;
        friendsData.push(newfriend);
            for (var index = 0, sum = 0; index < score.length; sum += score[index++]) {
                
            }
        friendsData.push()
    });
}