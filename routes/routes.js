const express = require('express');

function setup(app, handlers) {

// ########## Routes ##########

  // City Routers
  const cityRouter = express.Router();

  cityRouter.post('/', handlers.addCity);

  console.log("Post test");

  app.use('/api/city', cityRouter);

  const cityCommunityRouter = express.Router();

  communityRouter.post('/', handlers.addStoreCommunity)

  app.use('/api/city/community', cityCommunityRouter);

  // Consultation Routers

  const consultationRouter = express.Router();

  consultationRouter.post('/', handlers.addConsultation);

  app.use('/api/consultation', consultationRouter);

  // Product Routers

  const productRouter = express.Router();

  productRouter.post('/', handlers.addProduct);

  app.use('/api/product', productRouter);

  // Store Routers

  const storeProductRouter = express.Router();

  storeProductRouter.post('/', handlers.addStoreProduct);
  storeProductRouter.put('/', handlers.changeStoreProductPrice);

  app.use('/api/store/product', storeProductRouter);

  // Store Community Routers

  const storeRouter = express.Router();

  storeRouter.post('/', handlers.addStore);

  app.use('/api/storeCommunity/store', storeRouter);
};

exports.setup = setup;
