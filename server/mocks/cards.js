module.exports = function(app) {
  const express = require('express');
  const cardsRouter = express.Router();

  cardsRouter.get('/', (req, res) => {
    res.send({
      cards: [],
    });
  });

  cardsRouter.post('/', (req, res) => {
    res.status(201).end();
  });

  cardsRouter.get('/:id', (req, res) => {
    res.send({
      cards: {
        id: req.params.id,
      },
    });
  });

  cardsRouter.put('/:id', (req, res) => {
    res.send({
      cards: {
        id: req.params.id,
      },
    });
  });

  cardsRouter.delete('/:id', (req, res) => {
    res.status(204).end();
  });

  app.use('/api/cards', cardsRouter);
};
