const express=require('express')
const app=express()
const path = require('path')
const mongoose=require('mongoose')
const shortUrlRouter=require('./routers/shortUrl')
const ShortUrl=require('./models/shortUrl')
const viewsPath=path.join(__dirname, '../views')

// Connection with Mongo Db
mongoose.connect('mongodb://localhost/urlShortner',{
    useNewUrlParser:true,useUnifiedTopology:true
})
app.set('view engine','ejs')
app.set('views', viewsPath)

// load index page
app.get('/',async(req,res)=>{
    const shortUrls=await ShortUrl.find()
    res.render('index',{ shortUrls:shortUrls })
})
app.use(express.urlencoded({extended:false}))
app.use(shortUrlRouter)
app.listen(process.env.PORT || 3000,()=> console.log('Server running on port 3000!'))