const Mainframe = require ('../services/mainframe')

const host = "198.81.193.67";
const port = 10443;
const user = "ibmuser";
const password = "feb@2021";

const mainframe = new Mainframe(host, port, user, password);

const account = 'FB3';

exports.getIplInfo = function(req, res, next) {
    const iplinfo = mainframe.getIplInfo(account);
    iplinfo.then(function(result) {
        res.render('index', { title: 'Express' , output: result});
    }, function(err) {
        console.log(err);
    });
}