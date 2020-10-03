const {
  sendSuccessResponse,
  sendErrorResponse,
  apiError,
} = require("../helpers/apiResponse");

const petitionStatus = require("../database/model/petitionStatus");
const petition = require("../database/model/petition");
const user = require("../database/model/user");


exports.getAllPetitionsVoting = async (req, res, next) => {
  try {
    const result = await petition.find({status:petitionStatus.voting});
    sendSuccessResponse(res, { result });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

//getrecent5petition 
exports.getRecentPetitions = async (req, res, next) => {
  try {
    const result = await petition.find({}).sort({createdDate : -1}).limit(10);
    sendSuccessResponse(res, { result });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
//

exports.getAllStatus = (req, res, next) => {
  sendSuccessResponse(res, { petitionStatus });
};

exports.getAllPetitions = async (req, res, next) => {
  try {
    const result = await petition.find().populate("owner");
    sendSuccessResponse(res, { result });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

exports.addPetition = async (req, res, next) => {
  next();
};
