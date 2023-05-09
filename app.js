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
    const positiveEmotions = ['happy', 'excited', 'joyful', 'ecstatic', 'thankful', 'grateful', 'loving', 'peaceful', 'content', 'optimistic','Admiration', 'Amazement', 'Amusement', 'Appreciation', 'Awe', 'Bliss', 'Calm', 'Cheerfulness', 'Comfort', 'Compassion', 'Confidence', 'Contentment', 'Cooperation', 'Courage', 'Curiosity', 'Delight', 'Eagerness', 'Ecstasy', 'Elation', 'Empathy', 'Enchantment', 'Endearment', 'Enjoyment', 'Excitement', 'Exhilaration', 'Fascination', 'Friendliness', 'Fulfillment', 'Gladness', 'Gratefulness', 'Gratification', 'Happiness', 'Harmony', 'Hope', 'Humility', 'Inclusion', 'Inspiration', 'Interest', 'Intimacy', 'Joviality', 'Joy', 'Kindness', 'Laughter', 'Liberation', 'Love', 'Nurturing', 'Optimism', 'Overjoyed', 'Pleasure', 'Positivity', 'Pride', 'Reassurance', 'Relaxation', 'Relief', 'Respect', 'Satisfaction', 'Security', 'Self-assurance', 'Self-confidence', 'Serenity', 'Silly', 'Simplicity', 'Sincerity', 'Smiling', 'Support', 'Surprise', 'Sympathy', 'Tenderness', 'Thankfulness', 'Thrilled', 'Tranquility', 'Trust', 'Understanding', 'Uplifted', 'Validation', 'Vitality', 'Warmth', 'Wonder', 'Zeal', 'Affection', 'Ardor', 'Assurance', 'Awe-inspiring', 'Belief', 'Benevolence', 'Blissful', 'Bountiful', 'Bravery', 'Brightness', 'Brilliance', 'Buoyancy', 'Care', 'Celebration', 'Charm', 'Clear-headedness', 'Comforting', 'Companionship', 'Confident', 'Connectedness', 'Considerate', 'Conviction', 'Cosiness', 'Creativity', 'Dedication', 'Determination', 'Devotion', 'Eagerness', 'Easy-going', 'Efficacy', 'Effortlessness', 'Eloquence'];
    const negativeEmotions = ['sad', 'angry', 'frustrated', 'depressed', 'anxious', 'stressed', 'fearful','death', 'disappointed', 'embarrassed', 'ashamed', 'pain', 'hurt', 'embarass', 'fear', 'stress','Anger', 'Anxiety', 'Apathy', 'Bitterness', 'Blame', 'Boredom', 'Contempt', 'Defeatism', 'Depression', 'Despair', 'Desperation', 'Disappointment', 'Discontentment', 'Disgust', 'Distrust', 'Embarrassment', 'Envy', 'Exasperation', 'Frustration', 'Gloom', 'Guilt', 'Hate', 'Hopelessness', 'Hostility', 'Humiliation', 'Impatience', 'Inadequacy', 'Insecurity', 'Insulted', 'Intimidation', 'Irritation', 'Isolation', 'Jealousy', 'Loneliness', 'Melancholy', 'Miserable', 'Misery', 'Nervousness', 'Offended', 'Outrage', 'Pain', 'Panic', 'Paranoia', 'Perplexed', 'Pessimism', 'Powerlessness', 'Pressure', 'Rejection', 'Resentment', 'Sadness', 'Scorn', 'Self-doubt', 'Shame', 'Sorrow', 'Spite', 'Stress', 'Suffocated', 'Suffocation', 'Suspicion', 'Tension', 'Torment', 'Trauma', 'Unhappiness', 'Unloved', 'Unsettled', 'Upset', 'Vengefulness', 'Worry', 'Abandoned', 'Abused', 'Afraid', 'Alienated', 'Anguished', 'Apologetic', 'Ashamed', 'Bashful', 'Betrayed', 'Bitter', 'Broken', 'Cheated', 'Choked', 'Confused', 'Crestfallen', 'Cruelty', 'Cynical', 'Dejected', 'Demeaned', 'Demoralized', 'Depressed', 'Desolate', 'Despondent', 'Devastated', 'Diminished', 'Disappointed', 'Discouraged', 'Disenchanted', 'Disgusted', 'Dismayed', 'Disrespected'];
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
  








