import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})


import cors from '@fastify/cors'


await fastify.register(cors, { 
  // put your options here
})

fastify.get('/', async () => {
    //return ('Benvenuto in Backend TJS Team5');
    return getTeam();
});

fastify.get('/api/', async () => {
    return {
        message: {
            Components: ['Angela', 'Chiara', 'Maria', 'Francesco'],
            github: 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-hackathon-bari-2024-team5/'

        }
    }
});


fastify.get('/api/credits', async () => {
    return {
        message: {
            Components: ['Angela', 'Chiara', 'Maria', 'Francesco'],
            github: 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-hackathon-bari-2024-team5/'

        }
    }
});


fastify.get('/api/players_pendings', async () => {
    return (
        [
            {"id_match": 1 , "namePalyer":"Chiara"  , "mailPlayer":"chiara@gmail.com", "QuestionTotal": 10 , "AnswerOk" : 8 , "timeEx" : 70 },
            {"id_match": 1 , "namePalyer":"Maria"  , "mailPlayer":"maria@gmail.com", "QuestionTotal": 10 , "AnswerOk" : 6 , "timeEx" : 60 },
            {"id_match": 1 , "namePalyer":"Angela"  , "mailPlayer":"angela@gmail.com", "QuestionTotal": 10 , "AnswerOk" : 6 , "timeEx" : 80 },
            {"id_match": 1 , "namePalyer":"Francesco"  , "mailPlayer":"francesco@gmail.com", "QuestionTotal": 10 , "AnswerOk" : 3 , "timeEx" : 110 }
        ]
    )
});

fastify.put('/api/match_player', async () => {
    return {
        status: 'ok add palyer'
    }
});


fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at: ${address}`);
});
