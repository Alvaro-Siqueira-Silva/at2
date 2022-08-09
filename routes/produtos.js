module.exports = (app)=>{
    app.get('/produtos', async(req,res)=>{
        res.render('produtos.ejs')
    })
}