const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const tRAM = parseInt(totalmem() / 1024 / 1024);
  const fRAM = parseInt(freemem() / 1024 / 1024);
  //const usage = (fRAM/tRAM) * 100;
  const usage = parseInt((fRAM/tRAM) * 100);
  const stats = {
    OS: platform(),
    arch: arch(),
    TotalRAM: `${tRAM} MB`,
    freeRAM: `${fRAM} MB`,
    //usage: `${usage.toFixed(2)} %`
    usage: `${usage} %`
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);