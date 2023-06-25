module.exports = io => {
    io.on('connection',()=>{
        console.log('New User connected');
    });
}