const Content = require('../models/contentModel');

module.exports = {
    index: (req, res) => {
        Content.fetchData(req.db, (err, rows) => {
            if(err){
                req.flash('error', `${err.message}`);
                res.render('content/index', {data: ''});
            }else{
                res.render('content/index', {data: rows});
            }
        });
    },
    store: (req, res) => {
        const {title, desc, body} = req.body;
        var formData = {
            title,
            desc,
            body,
        }
        Content.insertData(req.db, formData, (err, result) => {
            if(err){
                req.flash('error', `${err.message}`);
                res.redirect('/content');
            }else{
                req.flash('success', 'Success');
                res.redirect('/content');
            }
        });
    },

    update: (req, res) => {
        const {id, title, desc, body} = req.body;
        var formData = {
            title,
            desc,
            body,
        }
        Content.updateData(req.db, id, formData, (err, result) => {
            if(err){
                req.flash('error', `${err.message}`);
                res.redirect('/content');
            }else{
                req.flash('success', 'Success');
                res.redirect('/content');
            }
        });
    },

    delete:(req, res) => {
        const { id } = req.params;
        console.log("Nyam");
        Content.deleteData(req.db, id, (err) => {
            if(err){
                req.flash('error', `${err.message}`);
                res.redirect('/content');
            }else{
                req.flash('success', 'Success');
                res.redirect('/content');
            }
        });
    }

    
}