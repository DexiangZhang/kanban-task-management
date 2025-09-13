"use client";

export const formatDate = (date: any) => {
  if (!date) return "";
  const dateObj = new Date(date);
  const year = dateObj?.getFullYear();
  const month = (dateObj?.getMonth() + 1)?.toString()?.padStart(2, "0");
  const day = dateObj?.getDate()?.toString()?.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDistanceToNow = (date: Date) => {
  const now = new Date();
  const seconds = Math.floor((now?.getTime() - date?.getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) return `${interval} years ago`;
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) return `${interval} months ago`;
  interval = Math.floor(seconds / 86400);

  if (interval > 1) return `${interval} days ago`;
  interval = Math.floor(seconds / 3600);

  if (interval > 1) return `${interval} hours ago`;
  interval = Math.floor(seconds / 60);

  if (interval > 1) return `${interval} minutes ago`;

  if (seconds > 10) return `${Math.floor(seconds)} seconds ago`;

  return "just now";
};
