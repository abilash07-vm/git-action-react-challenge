var core = require('@actions/core');
var github = require('@actions/github');
var exec = require('@actions/exec');



function getSumOfTwoNum(x, y){
    return x + y;
}
var num1 = core.getInput('num1',{required: true});
var num2 = core.getInput('num2',{required: true});
var sumVal = getSumOfTwoNum(num1, num2);
core.notice(`Sum value is ${sumVal}`);

core.setOutput('sumVal', sumVal);