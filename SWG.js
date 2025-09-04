 
    function playGame(user) {
      const cpuChoices = ['s', 'w', 'g'];
      const cpu = cpuChoices[Math.floor(Math.random() * 3)];

      let resultText = "";
      let resultClass = "";

      if (cpu === user) {
        resultText = "It's a Tie!";
        resultClass = "tie";
      } 
      else if (
        (cpu === "s" && user === "w") ||
        (cpu === "w" && user === "g") ||
        (cpu === "g" && user === "s")
      ) {
        resultText = "CPU Wins!";
        resultClass = "lose";
      } 
      else {
        resultText = "You Win!";
        resultClass = "win";
      }

      const cpuEmoji = cpu === "s" ? "🐍 Snake" : cpu === "w" ? "💧 Water" : "🔫 Gun";
      const userEmoji = user === "s" ? "🐍 Snake" : user === "w" ? "💧 Water" : "🔫 Gun";

      document.getElementById("result").innerHTML = `
        <p><b>Your Choice:</b> ${userEmoji}</p>
        <p><b>CPU Choice:</b> ${cpuEmoji}</p>
        <p class="${resultClass}">${resultText}</p>
      `;
    }
  