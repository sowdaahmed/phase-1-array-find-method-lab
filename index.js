function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin; // Ensure to export the function for testing
