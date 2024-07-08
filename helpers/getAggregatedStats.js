const stats = {};

const getAggregatedStats = (autoId, type) => {
  if (!stats[autoId]) {
    return { listing: 0, phoneNumber: 0 };
  }

  switch (type) {
    case "listing":
      return { listing: stats[autoId].listing };
    case "phoneNumber":
      return { phoneNumber: stats[autoId].phoneNumber };
    case "both":
      return {
        listing: stats[autoId].listing,
        phoneNumber: stats[autoId].phoneNumber,
      };
    default:
      return stats[autoId];
  }
};

module.exports = { stats, getAggregatedStats };
