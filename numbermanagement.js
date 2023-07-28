const path = require('path');
const express = require('express');
const app = express();
const PORT = 3333;
 
app.get('/numbers', async (req, res) => {
    const urls = req.query.url;
  
    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({ message: 'list' });
    }
  
    const urlResponses = [];
  
    try {
      const requests = urls.map(async (url) => {
        try {
          const response = await axios.get(url, { timeout: 500 });
          if (response.data && Array.isArray(response.data.numbers)) {
            urlResponses.push(response.data.numbers);
          }
        } catch (error) {
         cos
        }
      });
  
      await Promise.all(requests);
    } catch (error) {
      console.error('Error fetching URL data:', error.message);
      return res.status(500).json({ message: 'Error fetching URL data' });
    }
  
   
    const allNumbers = urlResponses.flat().sort((a, b) => a - b);
  

    const uniqueNumbers = [...new Set(allNumbers)];
  
    return res.json({ numbers: uniqueNumbers });
  });
  



app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})