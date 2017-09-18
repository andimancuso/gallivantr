import React from 'react';

const date = new Date();
let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();

function leadingZero(timeDate) {
  if (timeDate <= 9) { return timeDate = "0" + timeDate } else { return timeDate };
};

export let todaysDate = year + leadingZero(month) + leadingZero(day);
