// Utility functions for activity storage
export const recordChatActivity = () => {
    const today = new Date().toISOString().split('T')[0];
    const storedData = localStorage.getItem('chatActivity') || '[]';
    const data = JSON.parse(storedData);
    
    const todayEntry = data.find(entry => entry.date === today);
    if (todayEntry) {
      todayEntry.count += 1;
    } else {
      data.push({ date: today, count: 1 });
    }
    
    // Keep only last 7 days
    const sortedData = data
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 7);
    
    localStorage.setItem('chatActivity', JSON.stringify(sortedData));
    return sortedData;
  };