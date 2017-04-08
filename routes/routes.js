const express = require('express');

function setup(app, handlers) {

// ########## Routes ##########

  // City Routers
  const cityRouter = express.Router();

  cityRouter.post('/', handlers.city.addCityHandler.addCity);

  app.use('/api/city', cityRouter);

  const cityCommunityRouter = express.Router();

  communityRouter.post('/', handlers.city.addStoreCommunityHandler.addStoreCommunity)

  app.use('/api/city/community', cityCommunityRouter);

  // Consultation Routers

  const consultationRouter = express.Router();

  consultationRouter.post('/', handlers.consultation.addConsultationHandler.addConsultation);

  app.use('/api/consultation', consultationRouter);

  // Product Routers

  const productRouter = express.Router();

  productRouter.post('/', handlers.product.addProductHandler.addProduct);

  app.use('/api/product', productRouter);

  // Store Routers

  const storeProductRouter = express.Router();

  storeProductRouter.post('/', handlers.product.addStoreProductHandler.addStoreProduct);
  storeProductRouter.put('/', handlers.product.changeStoreProductPriceHandler.changeStoreProductPrice);

  app.use('/api/store/product', storeProductRouter);

  // Store Community Routers

  const storeRouter = express.Router();

  storeRouter.post('/', handlers.storeCommunity.addStoreHandler.addStore);

  app.use('/api/storeCommunity/store', storeRouter);
};

exports.setup = setup;
