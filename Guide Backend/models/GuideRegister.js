const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      comment: { type: String, required: true },
      rating: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );


const guideSchema = new mongoose.Schema ({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    age:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    licence:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    review:[reviewSchema]

});

module.exports = mongoose.model('guideregister',guideSchema);
