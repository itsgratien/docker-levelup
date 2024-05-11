const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();

const port = 4000;

app.use(express.json());

app.get('/', (req, res)=> {
    const users = [{id: faker.string.uuid(), names: faker.person.fullName()}, 
        {id: faker.string.uuid(), names: faker.person.fullName()}]
    return res.json({message: 'ok',data: users})
});

app.listen(port, ()=> {
    console.log(`Server started on PORT ${port}`)
})