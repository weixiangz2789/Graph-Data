let labelArr = [];
let dataArr = [];
async function getData() {
  const response = await fetch("WeiXiang_dataset/data.csv");
  const data = await response.text();
  rows = data.split("\n").slice(1);
  rows.forEach(async (elem) => {
    const row = elem.split(",");
    const year = row[0];
    const temp = parseFloat(row[1]) + 14;
    console.log(year, temp);
    labelArr.push(year);
    dataArr.push(temp);
  });
}

getData();

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: labelArr,
    datasets: [
      {
        label: "Global Average Temperature",
        data: dataArr,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
});
