import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const imageExists = (url: string) => {
  return new Promise((resolve) => {
    var img = new Image();
    img.addEventListener("load", () => resolve(true));
    img.addEventListener("error", () => resolve(false));
    img.src = url;
  });
};

export const getSkinUrl = () => {
  return "https://visage.surgeplay.com";
};

export const formatPlaytime = (bigInt?: string) => {
  const timeInSeconds = parseInt(bigInt || "0") / 1000;
  if (!timeInSeconds) return "0 hours";

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInMonth = secondsInDay * 30;
  const secondsInYear = secondsInDay * 365;

  const years = Math.floor(timeInSeconds / secondsInYear);
  const months = Math.floor((timeInSeconds % secondsInYear) / secondsInMonth);
  const days = Math.floor((timeInSeconds % secondsInMonth) / secondsInDay);
  const hours = Math.floor((timeInSeconds % secondsInDay) / secondsInHour);
  const minutes = Math.floor((timeInSeconds % secondsInHour) / secondsInMinute);
  const seconds = Math.floor(timeInSeconds % secondsInMinute);

  if (years) return `${years} years, ${months} months`;
  if (months) return `${months} months, ${days} days`;
  if (days) return `${days} days, ${hours} hours`;
  if (hours) return `${hours} hours, ${minutes} minutes`;
  if (minutes) return `${minutes} minutes, ${seconds} seconds`;
  return `${seconds} seconds`;
};

export const formatBigIntToDateString = (date?: string) => {
  if (!date) return "Never";
  return new Date(Number(date)).toLocaleDateString();
};

export const formatNumber = (num?: number | null) => {
  if (!num) return "0";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const stripColorCodes = (str?: string | null) => {
  if (!str) return "";
  return str.replace(/§[0-9a-fklmnor]/g, "");
};
