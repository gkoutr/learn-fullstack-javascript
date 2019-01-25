import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');
server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('/', (req, res) =>{
    res.render('index', {
        content: ""
    });
})

server.listen(config.port, () => {
    console.info('express listening on port', config.port);
});