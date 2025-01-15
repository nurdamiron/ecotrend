// src/utils/calculations.js
export const calculateVolume = (capacity, liquidLevel) => {
    return (capacity * liquidLevel) / 100;
  };
  
  export const calculateTotalCost = (volume, pricePerLiter) => {
    return volume * pricePerLiter;
  };
  
  export const calculateUsage = (previousLevel, currentLevel, capacity) => {
    const difference = previousLevel - currentLevel;
    return (difference * capacity) / 100;
  };
  
  export const calculateEfficiency = (usageData) => {
    if (!usageData || usageData.length < 2) return 0;
    
    const totalUsage = usageData.reduce((sum, data) => sum + data.usage, 0);
    const avgUsage = totalUsage / usageData.length;
    
    return avgUsage;
  };
  
