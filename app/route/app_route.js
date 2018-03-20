//This is the base route that gets exported to the
//index.js file in the same folder.

module.exports = function(app, db) {
    //Index Route
    app.get('/',(req,res)=>{
        res.send("Hello World");
    });


    //Post route to create a given entity
    app.post('api/record', (req, res) => {
        // const record = {
        //     type: req.body.type,
        //     details: req.body.details
        // };
        //
        // db.collection('data').insert(record,(err,result)=>{
        //     if(err){
        //         res.send({'error':'An error has occured'});
        //     } else {
        //         res.send(result.ops[0])
        //     }
        // });
    });


    //Get all records
    app.get('api/record',(req,res)=>{

    });

    //Query[search] database -> table
    app.get('api/',()=>{

    });


    app.put('api/',()=>{

    });


    app.delete('/',()=>{

    });

};