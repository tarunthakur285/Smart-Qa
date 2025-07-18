const axios = require('axios');

const callGemini = async (question) => {
    const prompt = `
    Given the following list of questions from an audience,
    group them if they are similar, and return a sorted list
    with the most freqiently asked ir revelevant questions summarized.

    ${question.map(
        (que, index) => `${index + 1}. ${que.content}`
    ).join('\n')}
    Response with only summized questions, one per line.
    `;
    const url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
    const requestBody={
        contents:[{
            parts:[{ text: prompt}]
        }]
    };
    const requestHeaders={
        headers:{
        "Content-Type": "application/json",
        "X-goog-api-key": process.env.GEMINI_API_KEY
        }
    };

    const response=await axios.post(url,requestBody,requestHeaders);

    const text=response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";


    return text.split('\n').filter((line) => line.trim()!=="");

};

module.exports = { callGemini };

// Examples sormat of the questions we're giong to send to prompt.
//1. What is mern
//2. What is React
//3. What is express