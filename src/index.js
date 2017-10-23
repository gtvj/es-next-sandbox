import $ from 'jquery';
import { my_text } from './my_text';

$(document).ready(function () {
    let $el = $('<div>', {
        'text': my_text
    });

    $('body').append($el);
});
