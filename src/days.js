const sennight = ["mon", "tues", "wed", "thur", "fri"];
const sennightend = ["sat", "sun"];

const everydays = (costumerDays, clientType) => {
  const days = weekDays(costumerDays);

  let everydays = {
    client: clientType,
    week: 0,
    overall: 0,
  };

  days.map((day) => {
    const week = sennight.find(
      (daysweek) => daysweek.toLowerCase() === day.toLowerCase()
    );

    if (week) {
      everydays = {
        ...everydays,
        week: everydays.week + 1,
      };
    }

    const overall = sennightend.find(
      (daysweek) => daysweek.toLowerCase() === day.toLowerCase()
    );

    if (overall) {
      everydays = {
        ...everydays,
        overall: everydays.overall + 1,
      };
    }
  });
  return everydays;
};

const Months = [{
    month: 'January',
    num: 0
},
{
    month: 'February',
    num: 1
},
{
    month: 'March',
    num: 2
},
{
    month: 'April',
    num: 3
},
{
    month: 'May',
    num: 4
},
{
    month: 'June',
    num: 5
},
{
    month: 'July',
    num: 6
},
{
    month: 'August',
    num: 7
},
{
    month: 'September',
    num: 8
},
{
    month: 'October',
    num: 9
},
{
    month: 'November',
    num: 10
},
{
    month: 'December',
    num: 11
}
]

module.exports = {
Months
}

const weekDays = (costumerDays) => {
  const days = [];

  costumerDays.map((item) => {
    if (item.toLocaleLowerCase().indexOf("mon") !== -1) {
      days.push("mon");
    }
    if (item.toLocaleLowerCase().indexOf("tues") !== -1) {
      days.push("tues");
    }
    if (item.toLocaleLowerCase().indexOf("wed") !== -1) {
      days.push("wed");
    }
    if (item.toLocaleLowerCase().indexOf("thur") !== -1) {
      days.push("thur");
    }
    if (item.toLocaleLowerCase().indexOf("fri") !== -1) {
      days.push("fri");
    }
    if (item.toLocaleLowerCase().indexOf("sat") !== -1) {
      days.push("sat");
    }
    if (item.toLocaleLowerCase().indexOf("sun") !== -1) {
      days.push("sun");
    }
  });

  return days;
};

exports.everydays = everydays;