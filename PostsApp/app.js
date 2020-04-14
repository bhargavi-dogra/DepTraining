var express = require('express');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const nav =[
    {link:'/posts',title:'posts'},
{link:'/admin/addpost',title:'Add Post'}
];
const postsRouter = require('./src/Routes/postroutes')(nav);
const adminRouter = require('./src/Routes/adminRoutes')(nav);
const authRouter = require('./src/Routes/authRoutes')(nav);

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use(cookieParser());;
app.use(session({secret: 'mypostsapp'}));



require('./src/config/passport.js')(app);

app.use(express.static(path.join(__dirname,'/public/')));
app.use('/css',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/jquery/dist')));


app.set('views', './src/views');
app.set('view engine', 'ejs');




app.use('/posts',postsRouter);
app.use('/admin',adminRouter);
app.use('/auth',authRouter);


app.get('/', (req, res)=>{
    res.render('index',{
        nav :[{link:'/posts',title:'posts'},
        {link:'/admin/addpost',title:'addpost'}],
        title:'Posts App'
    });
});

app.listen(3000, function () {
    debug(`Listening on port 3000`);
});