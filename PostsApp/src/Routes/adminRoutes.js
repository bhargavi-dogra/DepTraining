var express =require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');
const passport = require('passport');
const adminRouter = express.Router();
const { url , dbName} = require('../config/dbconfig');


const posts =[{
    id:'1',
    title:'Sunshine',
    content:'shine like sunshine',
    username:'bhargavi',
    active : true
},{
id:'2',
title:'water',
content:'Water is life,Save water save life!!',
username:'mickey',
active : false
},{
id:'3',
title:'Quote',
content:'An apple a day keeps all desises away!',
username:'mini',
active : true
},{
id:'5',
title:'Kite',
content:'All kites are colorful and flying!',
username:'donald',
active : false
},
]

function routers(nav)
{


    adminRouter.route('/addpost')
    .all((req,res,next)=>{
      if(req.user){
        next();
      }else{
        res.redirect('/');
      }
    }) .get((req,res)=>{
      console.log(req.user);
      const userdata =req.user;

      
    //  res.json(req.user);
    res.render('addpost', {
      nav,
      title: 'Posts App',
      userdata
  });
})
      .post((req,res)=>{
    const {id,title,content,username,active} = req.body;

    (async function addPost(){
        let client;
        try{
           client = await MongoClient.connect(url);
           debug('Connected correctly to server');
            
           const db = client.db(dbName);
           const col = db.collection('posts');
           const post = {id,title,content,username,active};
           const results = await col.insertOne(post);
           debug(results);          
           debug('Congratulations! You have Successfully posted your thought!');
          

        }catch(err){
          debug(err);
        }
    }());

          debug(req.body);
          //create user
        // res.json(req.body);

      });


    adminRouter.route('/')
     .get((req,res)=>{
              
         (async function mongo(){
               let client;
               try{
            client =await MongoClient.connect(url);
            debug('Connected correctly to server');

            const db = client.db(dbName);
            const response =  await db.collection('posts').insertMany(posts);
            res.json(response);
               }catch(err){
             debug(err.stack);
               }
               client.close();
         }());
   
     });

     




     return adminRouter;
}

module.exports = routers;