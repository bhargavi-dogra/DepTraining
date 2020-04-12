var express =require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');
const passport = require('passport');
const adminRouter = express.Router();

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


    adminRouter.route('./addpost')
      .post((req,res)=>{
    const {id,title,content,username,active} = req.body;
    const url = 'mongodb://localhost:27017';
    const dbName = 'postsApp';

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
            
           
            res.redirect('/auth/posts');
          

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
         const url = 'mongodb://localhost:27017';
         const dbName = 'postsApp';
              
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