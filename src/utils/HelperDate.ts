import { data } from "react-router-dom";

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

export const isLast7Days = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  return diff <= 7 * 24 * 60 * 60 * 1000;
};

export const isThisMonth = (date: Date) => {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  );
};


export const generatePersianDates  = (days: number = 7)=>{
  const dates = [];
  const formatter = new Intl.DateTimeFormat('fa-IR',{
    weekday:'long',
    year:"numeric",
    month:"long",
    day:'numeric',
  });
  for(let i = 0 ; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    dates.push({
      value:date.toISOString(),
      label:formatter.format(date)
    })
  };

  return dates
};

export const generateTimeSlots = (startHour = 8 , endHour = 22 , intervalMinutes = 30) =>{
  const times = [];
  for(let hour = startHour; hour <= endHour ; hour++){
    for(let minute = 0 ; minute < 60 ; minute += intervalMinutes){
      if(hour === endHour && minute > 0)break;
      const formatted = `${hour
        .toString()
        .padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;

        times.push({
          value:formatted,
          label:formatted,
        })
    }
  };
  return times
}
