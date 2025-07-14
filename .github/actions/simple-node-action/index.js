var core = require('@actions/core');
var github = require('@actions/github');
var exec = require('@actions/exec');



function getSumOfTwoNum(x, y){
    return x + y;
}

var sumVal = getSumOfTwoNum(1, 2);
core.notice(`Sum value is ${sumVal}`);