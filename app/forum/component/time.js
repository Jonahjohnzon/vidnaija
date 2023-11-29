export const getTimeDifference = (targetDate) => {
    const difference = new Date().getTime() - new Date(targetDate).getTime()
  
    if (difference > 0) {
      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
      return timeLeft
    }
  
    return undefined
  }