const fetchDataUpcoming = async () => {
    try {
      const response = await fetch('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming');
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export default fetchDataUpcoming;