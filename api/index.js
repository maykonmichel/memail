const express = require('express');
const http = require('http');
const faker = require('faker');

const app = express();
const server = http.createServer(app);
const port = 3000;

const generateFakeMessage = () => ({
  id: faker.random.number(),
  timestamp: faker.date.past().getTime(),
  subject: faker.lorem.sentence(),
  detail: faker.lorem.paragraphs()
})

const generateFakeMessages = (samples) => [...Array(samples)].map(generateFakeMessage)

const messages = generateFakeMessages(100);

app.get('/messages', (req, res) => {
  res.status(200).send(messages.sort((a, b) => a.timestamp - b.timestamp));
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
