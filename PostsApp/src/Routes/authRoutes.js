var express = require('express');
const { MongoClient} = require('mongodb');
const debug = require('debug')('app:authRoutes');
const passport = require('passport');
const { url , dbName} = require('../config/dbconfig');
const authRouter =express.Router();

function router(nav){

    authRouter.route('/signUp')
      .post((req,res)=>{
    const {username,password} = req.body;

    (async function addUser(){
        let client;
        try{
           client = await MongoClient.connect(url);
           debug('Connected correctly to server');
            
           const db = client.db(dbName);
           const col = db.collection('users');
           const user = {username,password};
           const results = await col.insertOne(user);
           debug(results);
            
           req.login(results.ops[0],()=>{
            res.redirect('/auth/profile');
           });

        }catch(err){
          debug(err);
        }
    }());

          debug(req.body);
          //create user
        // res.json(req.body);
      });

    authRouter.route('/signin')
         .get((req,res)=>{
             res.render('signin',{
                 nav,
                 title: 'signIn'
             });

         })     
        .post(passport.authenticate('local',{
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));
      authRouter.route('/profile')
      .all((req,res,next)=>{
        if(req.user){
          next();
        }else{
          res.redirect('/');
        }
      })
      .get((req,res)=>{
        console.log(req.user);
        const userdata =req.user;

        debug('Congratulations! You have Successfully Signed Up!');
      //  res.json(req.user);
      res.render('profile', {
        nav,
        title: 'Posts App',
        userdata
    });
    
      });

      authRouter.route('/logout')
      .get(function(req, res, next) {
        if (req.session) {
          req.session.destroy(function(err) {
            if(err) {
              return next(err);
            } else {
              return res.redirect('/auth/signin');
            }
          });
        }
      });
 
      return authRouter;
}

module.exports =router;