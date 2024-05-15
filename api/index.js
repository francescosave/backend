const fastify = require('fastify')();
fastify.register(require('@fastify/websocket'));

fastify.get('/api/credits', (request, reply) => {
    reply.send({
        message: {
            Components : ['Angela','Chiara','Maria','Francesco'],
            github : 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-hackathon-bari-2024-team5/',
            stack : 'Html CSS js vanilla & fastify'

        }
    });
});
 
fastify.get('/api/', (request, reply) => {
    reply.send({
        message: {
            Components : ['Angela','Chiara','Maria','Francesco'],
            github : 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-hackathon-bari-2024-team5/'

        }
    });
});

fastify.get('/api/hello-ws', { websocket: true }, (connection, req) => {
    connection.socket.on('message', message => {
        connection.socket.send('Hello Fastify WebSockets');
    });
});

fastify.listen({ port: 3000 }, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at: ${address}`);
});