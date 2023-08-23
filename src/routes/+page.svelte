<script>
    const mainText = "Connect, Refer, Thrive Together";
    let typedText = "";
  
    function typeText() {
      if (typedText.length < mainText.length) {
        typedText = mainText.slice(0, typedText.length + 1);
        setTimeout(typeText, 50);
      }
    }
  
    typeText();
  </script>
  
  <style>
    
  
    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
  
    .cta-button {
      background-color: #3490dc;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-block;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
  
    .cta-button:hover {
      background-color: #2779bd;
    }
  </style>
  
  <div class="center">
    <div class="text-4xl font-semibold mb-4" id="typingText">{typedText}</div>
    <p class="mt-4 text-lg">
      Unlock opportunities through seamless connections. Job seekers find careers, employees gain rewards.
      Join our platform for mutual success.
    </p>
    <div class="mt-8">
      <a href="/login" class="cta-button">Login</a>
      <a href="/register" class="cta-button ml-4">Sign Up</a>
    </div>
  </div>
  