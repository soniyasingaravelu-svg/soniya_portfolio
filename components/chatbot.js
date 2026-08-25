document.body.insertAdjacentHTML("beforeend", `

    <!-- Chatbot Button -->
    <button class="chatbot-button" id="chatbotButton">
        <i class="fa-solid fa-robot"></i>
    </button>


    <!-- Chatbot Box -->
    <div class="chatbot-box" id="chatbotBox">

        <!-- Header -->
        <div class="chatbot-header">

            <h3>
                🤖 Soniya AI
            </h3>

            <button
                class="chatbot-close"
                id="chatbotClose"
            >
                ×
            </button>

        </div>


        <!-- Messages -->
        <div
            class="chatbot-messages"
            id="chatbotMessages"
        >

            <div class="bot-message">
                Hi! 👋 I'm Soniya AI.
                <br><br>
                Ask me anything about Soniya!
            </div>

        </div>


        <!-- Input -->
        <div class="chatbot-input-area">

            <input
                type="text"
                id="chatbotInput"
                class="chatbot-input"
                placeholder="Ask me something..."
            >

            <button
                id="chatbotSend"
                class="chatbot-send"
            >
                <i class="fa-solid fa-paper-plane"></i>
            </button>

        </div>

    </div>

`);


/* =====================================
   CHATBOT ELEMENTS
===================================== */

const chatbotButton =
    document.getElementById("chatbotButton");

const chatbotBox =
    document.getElementById("chatbotBox");

const chatbotClose =
    document.getElementById("chatbotClose");

const chatbotInput =
    document.getElementById("chatbotInput");

const chatbotSend =
    document.getElementById("chatbotSend");

const chatbotMessages =
    document.getElementById("chatbotMessages");


/* =====================================
   OPEN CHATBOT
===================================== */

chatbotButton.addEventListener("click", () => {

    chatbotBox.style.display = "block";

    chatbotInput.focus();

});


/* =====================================
   CLOSE CHATBOT
===================================== */

chatbotClose.addEventListener("click", () => {

    chatbotBox.style.display = "none";

});


/* =====================================
   SEND MESSAGE
===================================== */

function sendMessage() {

    const message =
        chatbotInput.value.trim();

    if (message === "") {
        return;
    }


    /* User message */

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.textContent =
        message;

    chatbotMessages.appendChild(userMessage);


    /* Get bot response */

    const response =
        getBotResponse(message);


    /* Bot message */

    setTimeout(() => {

        const botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";

        botMessage.innerHTML =
            response;

        chatbotMessages.appendChild(botMessage);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }, 500);


    chatbotInput.value = "";

}


/* =====================================
   ENTER KEY
===================================== */

chatbotInput.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


chatbotSend.addEventListener(
    "click",
    sendMessage
);


/* =====================================
   CHATBOT RESPONSES
===================================== */

function getBotResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("who is soniya") ||
        text.includes("about soniya") ||
        text.includes("who are you")
    ) {

        return `
            Soniya S is an MCA student and
            aspiring software developer.
            She is interested in web development,
            UI/UX and full-stack development. 💻
        `;

    }


    if (
        text.includes("education") ||
        text.includes("study") ||
        text.includes("college")
    ) {

        return `
            Soniya is currently pursuing MCA at
            Holy Cross College, Trichy,
            affiliated with Bharathidasan University.
            🎓
        `;

    }


    if (
        text.includes("mca")
    ) {

        return `
            Soniya is pursuing her MCA from
            2025 to 2027.
        `;

    }


    if (
        text.includes("bca")
    ) {

        return `
            Soniya completed her BCA from
            2022 to 2025.
        `;

    }


    if (
        text.includes("skill") ||
        text.includes("skills")
    ) {

        return `
            Soniya is interested in:
            <br><br>
            • Web Development 🌐<br>
            • Full Stack Development 💻<br>
            • UI/UX Design 🎨<br>
            • Java<br>
            • HTML, CSS & JavaScript<br>
            • Database technologies
        `;

    }


    if (
        text.includes("project") ||
        text.includes("projects")
    ) {

        return `
            Soniya has worked on academic
            and development projects.
            You can check the Projects section
            of this portfolio. 🚀
        `;

    }


    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("phone")
    ) {

        return `
            You can contact Soniya through
            the Contact section of this portfolio. 📩
            <br><br>
            Email:
            soniyasingaravelu@gmail.com
        `;

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            Hello! 👋
            How can I help you learn more
            about Soniya?
        `;

    }


    if (
        text.includes("thank")
    ) {

        return `
            You're welcome! 😊
            Feel free to ask me anything
            about Soniya.
        `;

    }


    return `
        I'm still learning! 🤖
        <br><br>
        You can ask me about:
        <br>
        • Soniya<br>
        • Education<br>
        • Skills<br>
        • Projects<br>
        • Contact details
    `;

}