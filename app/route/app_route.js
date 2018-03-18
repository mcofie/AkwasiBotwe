//This is the base route that gets exported to the
//index.js file in the same folder.

module.exports = function(app, db) {

    //Post route to create a given entity
    app.post('/bot', (req, res) => {
        // You'll create your note here.
        let arr = [{'name':'Maxwell Cofie'}]
        let y = {
            "name":"Maxwell Cofie",
            "age":"45"
        }
        res.json(y)
    });

};