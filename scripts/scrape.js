
var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

    request("https://patch.com/pennsylvania/malvern", function (err, res, body) {

        var $ = cheerio.load(response.data);

        var articles = [];

        $("h2").each(function (i, element) {

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .find("a").attr("title");
            result.link = $(this)
                .find("a").attr("href");
            result.descrip = $(this)
                .parent().find("p").text();

            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
        });
        cb(articles)
        // Send a message to the client
        res.send("Scrape Complete");
    });

};

module.exports = scrape;