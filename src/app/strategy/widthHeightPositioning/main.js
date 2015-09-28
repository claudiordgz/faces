/*globals require, module*/
var util = require('faces/util');

function currentPolicy(imageElement, imageContainer, imgUrl, width, height, imgClass) {
    'use strict';
    return util.format('background-image: url(\'{0}\');', imgUrl);
}

module.exports = {
    policy: currentPolicy
};