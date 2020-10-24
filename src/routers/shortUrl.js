const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const ShortUrl=require('../models/shortUrl')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Store the full url and keys into DB
router.post('/shortUrls',async(req,res)=>{
    if(req.body.fullurl=='' || req.body.fullurl==null)return res.status(400).json({"status":false,"message":"Full url not passed"})

    ShortUrl.count({short:req.body.urlkey},async(err,count)=>{
        if(count==0){
            if(req.body.urlkey=='' || req.body.urlkey==null){
                await ShortUrl.create({full:req.body.fullurl})
                res.redirect('/')    
            }
            else{
                await ShortUrl.create({full:req.body.fullurl,short:req.body.urlkey})
                res.redirect('/')
            }
        }
        else{
            res.status(400).json({"status":false,"message":"Short URL is already Exist.Please try new short key"})
        }
    })

})
// Find url using key and redirect to url 
router.get('/:shortUrl',async(req,res)=>{
    const shortUrl=await ShortUrl.findOne({ short:req.params.shortUrl })
    if(shortUrl == null)return res.status(400).json({"status":false,"message":"Short URL is not passed"})
    shortUrl.clicks++
    shortUrl.save()
    res.redirect(shortUrl.full)
})
module.exports = router;