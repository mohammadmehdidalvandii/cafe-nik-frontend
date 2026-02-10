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