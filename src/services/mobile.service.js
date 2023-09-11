const Mobile = require("../models/mobile.model");

/**
 * Create mobile
 * @param {object} reqBody
 * @returns {Promise<mobile>}
 */
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

/**
 * Get mobile list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<mobile>}
 */
const getMobileList = async (filter, options) => {
  return Mobile.find()
};

/**
 * Get mobile details by id
 * @param {ObjectId} mobileId
 * @returns {Promise<mobile>}
 */
const getMobileById = async (mobileId) => {
  return Mobile.findById(mobileId);
};

/**
 * mobile details update by id
 * @param {ObjectId} mobileId
 * @param {object} updateBody
 * @returns {Promise<mobile>}
 */
const updateDetails = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

/**
 * Delete mobile
 * @param {ObjectId} mobileId
 * @returns {Promise<mobile>}
 */
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};

module.exports = {
  createMobile,
  getMobileList,
  getMobileById,
  updateDetails,
  deleteMobile,
};