var rtree = require('./rtree');

var rt = new rtree.RTree();
var i = 1000000;
while(i > 0) {
    var bounds = {x:(Math.random()*360-180), y:(Math.random()*180-90), w:0, h:0};
    rt.insert(bounds, "JUST A TEST OBJECT!_"+i);
    i--;
};

exports.indexHandler = function(req, res){
    res.send(rt.search({x:20,y:20,w:2,h:2}));
};

exports.userHandler = function(req, res){
    res.send(req.params.id);
};
