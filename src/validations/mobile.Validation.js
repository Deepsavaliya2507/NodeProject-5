const Joi = require("joi");

/** create mobile */
const createMobile = {
  body: Joi.object().keys({
    mobile_company_name: Joi.string().required().trim(),
    mobile_model_name: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    product_see: Joi.string().required().trim(),
  }),
};

/** GEt mobile list */
const getMobileList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get mobile details by id */
const getDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
};

/** mobile details update by id */
const updateDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    mobile_company_name: Joi.string().trim(),
    mobile_model_name: Joi.string().trim(),
  }),
};

module.exports = {
  createMobile,
  getDetails,
  getMobileList,
  updateDetails,
};