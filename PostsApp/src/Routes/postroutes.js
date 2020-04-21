var express = require('express');
const postsRouter = express.Router();
const { MongoClient,ObjectID } = require('mongodb');
const debug = require('debug')('app:postRoutes');
const { url , dbName} = require('../config/dbconfig');

function router(nav) {
   postsRouter.use((req,res,next)=>{
    if(req.user){
        next();
      }else{
        res.redirect('/');
      }
   });

    postsRouter.route('/')
        .get((req, res) => {

            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(url);
                    debug('Connected correctly to server');

                    const db = client.db(dbName);
                    const col = await db.collection('posts');

                   const posts = await col.find().toArray();

                    res.render('postsListView', {
                        nav,
                        title: 'Posts App',
                        posts
                    });
                } catch (err) {
                    debug(err.stack);
                }
                client.close();
            }());

        });

    postsRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;

            (async function mongo(){
                let client;
                try {
                    client = await MongoClient.connect(url);
                    debug('Connected correctly to server');

                    const db = client.db(dbName);
                    const col = await db.collection('posts')
                   
                    const post = await col.findOne({_id:new ObjectID(id) });
                    debug(post);
                    res.render('postview', {
                        nav,
                        title: 'Posts App',
                        post
                    }
                    );
                } catch (err) {
                    debug(err.stack);
                }
                client.close();
            }());
    
        });


    return postsRouter;
}



module.exports = router;