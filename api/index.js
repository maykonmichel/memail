const express = require('express');
const http = require('http');
const faker = require('faker');

const app = express();
const server = http.createServer(app);
const port = 3000;

const getTimestamp = ({before, after}) => {
  const date = before || Date.now();

  const oneSecondInMs = 1000;
  const oneYearInMs = 365 * 24 * 3600 * 1000;
  const range = {
    min: oneSecondInMs,
    max: after ? date - after : oneYearInMs
  };

  return date - faker.random.number(range);
};

const generateFakeMessage = (query) => ({
  id: faker.random.number(),
  timestamp: getTimestamp(query),
  subject: faker.lorem.sentence(),
  detail: faker.lorem.paragraphs()
})

const generateFakeMessages = (samples, query) => [...Array(samples)].map(() => generateFakeMessage(query))

const generateSortedFakeMessages = (samples, query) => generateFakeMessages(samples, query).sort((a, b) => b.timestamp - a.timestamp)

const getSamples = ({after}) => {
  const from0To10 = faker.random.number({min: 0, max: 10});
  return after ? from0To10 : 100;
}

app.get('/messages', ({ query }, res) => {
  const samples = getSamples(query);

  res.status(200).send(generateSortedFakeMessages(samples, query));
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
