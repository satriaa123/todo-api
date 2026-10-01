const catchAsync = require("../utils/catchAsync.js");
const AppError = require("../utils/AppError.js");
const logService = require("../services/log.service.js");

const getMyActivityLogs = catchAsync(async (req, res, next) => {
  const logs = await logService.getActivityLogs(req.user._id);

  res.status(200).json({
    success: true,
    message: "Activity logs retrieved successfully",
    data: logs,
  });
});

const getActivityLogById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const log = await logService.getActivityLogById(id);

  if (!log) {
    return next(new AppError("Activity log not found", 404));
  }

  if (
    log.user._id.toString() !== req.user._id.toString() &&
    req.user.role !== "admin"
  ) {
    return next(
      new AppError(
        "You do not have permission to access this activity log",
        403
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "Activity log retrieved successfully",
    data: log,
  });
});

module.exports = {
  getMyActivityLogs,
  getActivityLogById,
};