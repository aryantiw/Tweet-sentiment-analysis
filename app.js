// function analyze() {
//     const sentence = document.getElementById('input-box').value;
//     const resultDiv = document.getElementById('result');
//     const sentiment = analyzeSentiment(sentence);
//     resultDiv.innerHTML = `The sentence "${sentence}" is ${sentiment}.`;
//   }
  
//   function analyzeSentiment(sentence) {
//     // TODO: Implement the sentiment analysis algorithm
//     // Here's an example algorithm that always returns "neutral"
//     return "Neutral";
//   }
  

function analyze() {
    const sentence = document.getElementById('input-box').value;
    const resultDiv = document.getElementById('result');
    const sentiment = analyzeSentiment(sentence);
    resultDiv.innerHTML = `The sentence "${sentence}" is ${sentiment}.`;
  }
  
  function analyzeSentiment(sentence) {
    const positiveEmotions = ['happy', 'excited', 'joyful', 'ecstatic', 'thankful', 'grateful', 'loving', 'peaceful', 'content', 'optimistic'];
    const negativeEmotions = ['sad', 'angry', 'frustrated', 'depressed', 'anxious', 'stressed', 'fearful', 'disappointed', 'embarrassed', 'ashamed'];
    const neutralEmotions = ['bored', 'indifferent', 'calm', 'serene', 'composed', 'detached', 'uncertain', 'pensive', 'confused', 'curious'];
  
    // Tokenize sentence into individual words
    const words = sentence.toLowerCase().split(' ');
  
    // Check for positive emotions
    const positiveCount = words.filter(word => positiveEmotions.includes(word)).length;
    if (positiveCount >= 1) {
      return 'Positive';
    }
  
    // Check for negative emotions
    const negativeCount = words.filter(word => negativeEmotions.includes(word)).length;
    if (negativeCount >= 1) {
      return 'Negative';
    }
  
    // Check for neutral emotions
    const neutralCount = words.filter(word => neutralEmotions.includes(word)).length;
    if (neutralCount >= 1) {
      return 'Neutral';
    }
  
    // Return neutral by default if no emotions detected
    return 'Neutral';
  }
  












