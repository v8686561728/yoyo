

export const logger = log => ({
  msg: log.message,
  level: log.level.label,
  stacktrace: log.stacktrace
});