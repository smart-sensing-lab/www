var Article = require('../../models/article.js');
var debug = require('debug')('ics:news-list');

exports.url = '/news';

exports.get = function(req, done, fail) {
    Article
        .find({
            type: 'news'
        })
        .sort('-createdTime')
        .paginate({
            perPage: 14,
            page: req.query.page || 1
        }, function(err, pager) {
            if (err) return fail(err);

            done({
                newsActive: 'active',
                pager: pager,
                title: '最新动态'
            });
        });

    //See: https://www.npmjs.com/package/mongoose-query-paginate
    //pager = {
    //  options: options,               // paginate options
    //  results: [Document, ...],       // mongoose results
    //  current: 5,                     // current page number
    //  last: 12,                       // last page number
    //  prev: 4,                        // prev number or null
    //  next: 6,                        // next number or null
    //  pages: [ 2, 3, 4, 5, 6, 7, 8 ], // page numbers
    //  count: 125                      // document count
    //};
};