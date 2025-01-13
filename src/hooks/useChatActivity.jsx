import { useState, useEffect } from 'react';

export const useChatActivity = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // Initialize with the last 7 days
    const initializeWeekData = () => {
      const weekData = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        weekData.push({
          date: date.toISOString().split('T')[0],
          count: 0
        });
      }
      return weekData;
    };

    // Load or initialize activity data
    const loadActivityData = () => {
      const storedData = localStorage.getItem('chatActivity');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        // Ensure we have entries for all days
        const weekData = initializeWeekData();
        parsedData.forEach((stored) => {
          const matchingDay = weekData.find(day => day.date === stored.date);
          if (matchingDay) {
            matchingDay.count = stored.count;
          }
        });
        return weekData;
      }
      return initializeWeekData();
    };

    // Load initial data
    const data = loadActivityData();
    setActivityData(data);
  }, []);

  return activityData;
};