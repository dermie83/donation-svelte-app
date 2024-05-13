import type { Lighthouse, DataSet, Donation } from "$lib/types/donation-types";

export function generateByMethod(donationList: Donation[]): DataSet {
  const totalByMethod: DataSet = {
    labels: ["paypal", "direct"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  donationList.forEach((donation) => {
    if (donation.method == "paypal") {
      totalByMethod.datasets[0].values[0] += donation.amount;
    } else if (donation.method == "direct") {
      totalByMethod.datasets[0].values[1] += donation.amount;
    }
  });

  return totalByMethod;
}

export function generateByLighthouse(donationList: Donation[], lighthouses: Lighthouse[]): DataSet {
  const donationsByLighthouse: DataSet = {
    labels: [],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  donationsByLighthouse.labels = [];
  lighthouses.forEach((lighthouse) => {
    donationsByLighthouse.labels.push(`${lighthouse.lastName}, ${lighthouse.firstName}`);
    donationsByLighthouse.datasets[0].values.push(0);
  });

  lighthouses.forEach((lighthouse, i) => {
    donationList.forEach((donation) => {
      if (typeof donation.lighthouse !== "string") {
        if (donation.lighthouse._id == lighthouse._id) {
          donationsByLighthouse.datasets[0].values[i] += donation.amount;
        }
      }
    });
  });

  return donationsByLighthouse;
}