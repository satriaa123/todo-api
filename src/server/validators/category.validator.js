const { body, param } = require("express-validator");

const createCategoryRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

const updateCategoryRules = [
  param("id")
    .isMongoId()
    .withMessage("Invalid category ID"),

  body("name")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

const getCategoryByIdRules = [
  param("id")
    .isMongoId()
    .withMessage("Invalid category ID"),
];

module.exports = {
  createCategoryRules,
  updateCategoryRules,
  getCategoryByIdRules,
};