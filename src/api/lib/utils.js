const sleep = (timeout = 2000) => new Promise((resolve, reject) => setTimeout(resolve, timeout));

module.exports = {
  sleep
};