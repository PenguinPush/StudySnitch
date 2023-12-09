// background.js
const apiKey = "YVtEkfmoOfQA2xKpWeQ3zS7tk9y1ZOuWUS4Pb8VU";
const cohereEndpoint = "https://api.cohere.ai/v1/classify";

function classifyPage(title) {
    // Make an API request to Cohere for classification using title
    fetch(cohereEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text: title,
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the classification response
      handleClassificationResult(data);
    })
    .catch(error => {
      console.error('Error while classifying:', error);
      // Handle errors gracefully
    });
  }
  
  function handleClassificationResult(result) {
    // Process the Cohere classification result
    // You can define your logic here based on the result
    console.log('Cohere Classification Result:', result);
    // Depending on the result, take actions such as updating the extension UI or storing the classification result
  }

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.title) {
    const pageTitle = changeInfo.title;
    classifyPage(pageTitle);
  }
});
