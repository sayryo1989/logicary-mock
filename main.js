const apiKey = "sk-あなたのAPIキー"; // 実際のキーに置き換えてください

document.getElementById("evaluateBtn").addEventListener("click", async () => {
  const input = document.getElementById("debateInput").value;
  if (!input) return alert("ディベート内容を入力してください");

  const resultArea = document.getElementById("resultArea");
  resultArea.textContent = "評価中...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "あなたはディベートの審査員です。与えられたテキストを、論理性・一貫性・反論の的確さ・表現の明瞭さに基づいて簡潔に評価してください。"
          },
          {
            role: "user",
            content: input
          }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const evaluation = data.choices?.[0]?.message?.content || "評価できませんでした。";
    resultArea.textContent = evaluation;
  } catch (err) {
    resultArea.textContent = "エラーが発生しました。" + err.message;
  }
});
