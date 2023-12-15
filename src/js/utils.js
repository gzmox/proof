// funcion para convertir la fecha
export const formatDateTime = (timestamp) => {
    const dateTime = new Date(timestamp);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

// funcion para extraer la ciudad de la dirección
 export const getCityFromAddress = (address) => {
    const parts = address.split(', ');
    return parts[parts.length - 2]; 
  };