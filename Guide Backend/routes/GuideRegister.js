const express = require('express');
const GuideData = require('../models/GuideRegister');

const router =express.Router();

router.post('/add',(req,res)=>{
    let newGuide=new GuideData(req.body);

    newGuide.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Guide added successfully"
});
    });
});


router.get('/',(req,res)=>{
    GuideData.find().exec((err,guidedata)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingGuide: guidedata
        });
    });
})

router.get('/:id',(req,res)=>{
    let guideId=req.params.id;
    GuideData.findById(guideId , (err,guidedata)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            guide:guidedata
        });
    });
});

router.put('/update/:id',(req,res)=>{
    GuideData.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Guide Data Update Successfull"
            });
        }
    );
});

router.delete('/delete/:id',(req,res)=>{
    GuideData.findByIdAndRemove(req.params.id).exec((err,deleteguide)=>{
        if(err) return res.status(400).json({
          message:"Guide Data Delete unsuccesful",err
        });
        return res.json({
            message:"Guide data Delete succesful",deleteguide
        });
    });
});



module.exports=router;

