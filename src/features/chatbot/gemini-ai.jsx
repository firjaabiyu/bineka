export async function requestGemini(prompt) {
    const apiKey = "AIzaSyArZNzX0GGEx60AkkXL0ojtHn_bY3cmWzU"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
  
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-goog-api-key" : apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    });
  
    const data = await response.json();
  
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Gagal mendapatkan respon dari Gemini");
    }
  }