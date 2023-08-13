<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
    <title>Welcome to Our Platform</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f7fa;
        }
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
</head>
<body>
    <div class="center">
        <div class="text-4xl font-semibold mb-4" id="typingText"></div>
        <p class="mt-4 text-lg">
            Unlock opportunities through seamless connections. Job seekers find careers, employees gain rewards.
            Join our platform for mutual success.
        </p>
        <div class="mt-8">
            <a href="/login" class="cta-button">Login</a>
            <a href="/register" class="cta-button ml-4">Sign Up</a>
        </div>
    </div>

    <script>
        const mainText = "Connect, Refer, Thrive Together";
        const typingTextElement = document.getElementById("typingText");
        let index = 0;

        function typeText() {
            if (index < mainText.length) {
                typingTextElement.textContent += mainText.charAt(index);
                index++;
                setTimeout(typeText, 50);
            }
        }

        typeText();
    </script>
</body>
</html>
