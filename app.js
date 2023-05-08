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
  

//CODE 2

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


//CODE 3


// function analyzeSentiment(sentence) {
//     const positiveWords = ["love", "like", "happy", "joy", "excited", "awesome", "fantastic", "great", "amazing", "excellent", "wonderful"];
//     const negativeWords = ["hate", "dislike", "sad", "unhappy", "angry", "frustrated", "terrible", "awful", "horrible", "bad", "disappointing"];
//     const neutralWords = ["okay", "fine", "average", "neutral", "indifferent", "boring", "routine", "common", "typical", "regular", "standard"];
    
//     const words = sentence.toLowerCase().split(/\W+/);
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let neutralCount = 0;
    
//     for (let word of words) {
//       if (positiveWords.includes(word)) {
//         positiveCount++;
//       } else if (negativeWords.includes(word)) {
//         negativeCount++;
//       } else if (neutralWords.includes(word)) {
//         neutralCount++;
//       }
//     }
    
//     if (positiveCount > negativeCount && positiveCount > neutralCount) {
//       return "Positive";
//     } else if (negativeCount > positiveCount && negativeCount > neutralCount) {
//       return "Negative";
//     } else {
//       return "Neutral";
//     }
//   }
  








