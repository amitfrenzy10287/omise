export const summaryDonations = (donations) => {
  return donations.reduce((accumulator, value) => (accumulator + value))
};


