const ActivityLog = require("../models/activitylog.model.js");

async function logActivity(
  user,
  action,
  description,
  resourceId = null,
  ipAddress = ""
) {
  try {
    const activityLog = await ActivityLog.create({
      user,
      action,
      description,
      resourceId,
      ipAddress,
    });

    return activityLog;
  } catch (error) {
    console.error("Gagal menyimpan activity log:", error.message);

    // Jangan sampai gagal membuat log
    // menyebabkan request utama ikut gagal
    return null;
  }
}

async function getActivityLogs(userId) {
  return await ActivityLog.find({ user: userId })
    .populate("user", "name email")
    .sort({ createdAt: -1 });
}

async function getAllActivityLogs() {
  return await ActivityLog.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });
}

module.exports = {
  logActivity,
  getActivityLogs,
  getAllActivityLogs,
};