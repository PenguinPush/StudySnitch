const apiKey = "<key>";
const cohereEndpoint = "https://api.cohere.ai/v1/classify";

function classifyPage(title) {
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
      handleClassificationResult(data);
    })
    .catch(error => {
      console.error('Error while classifying:', error);
    });
  }
  
  function handleClassificationResult(result) {
    console.log('Cohere Classification Result:', result);
  }
