let btn = document.querySelector("#button");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; // Use "en-GB" for English, or "hi-IN" for Hindi
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning!");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon!");
    } else {
        speak("Good Evening!");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takecommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takecommand(Message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (
        Message.includes("hello") ||
        Message.includes("hey") ||
        Message.includes("hi")
    ) {
        speak("Hello sir, how can I assist you today?");
    } else if (Message.includes("who are you")) {
        speak("I am your personal AI assistant, I am created by Shubhraj.");
    } else if (Message.includes("what is your name")) {
        speak("My name is Shifra, I am here to assist you with your tasks.");
    } else if (Message.includes("how are you")) {
        speak("I am just a program, but thank you for asking! How can I help you today?");
    } else if (Message.includes("i love you") || Message.includes("i also love you very much")) {
        speak("I also love you very much! But, I'm here to assist you with anything you need.");
    } else if (Message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        speak("Opening youtube for you.");
    } else if (Message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        speak("Opening google for you.");
    } else if (Message.includes("open facebook")) {
        window.open("https://www.facebook.com", "_blank");
        speak("Opening facebook for you.");
    } else if (Message.includes("open instagram")) {
        window.open("https://www.instagram.com", "_blank");
        speak("Opening instagram for you.");
    } else if (Message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening whatsapp for you.");
    } else if (Message.includes("open twitter")) {
        window.open("https://www.twitter.com", "_blank");
        speak("Opening twitter for you.");
    } else if (Message.includes("open linkedin")) {
        window.open("https://www.linkedin.com", "_blank");
        speak("Opening linkedin for you.");
    } else if (Message.includes("open github")) {
        window.open("https://www.github.com", "_blank");
        speak("Opening github for you.");
    } else if (Message.includes("open stackoverflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening stackoverflow for you.");
    } else if (Message.includes("open reddit")) {
        window.open("https://www.reddit.com", "_blank");
        speak("Opening reddit for you.");
    } else if (Message.includes("open quora")) {
        window.open("https://www.quora.com", "_blank");
        speak("Opening quora for you.");
    } else if (Message.includes("open gmail")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening gmail for you.");
    } else if (Message.includes("open outlook")) {
        window.open("https://outlook.live.com", "_blank");
        speak("Opening outlook for you.");
    } else if (Message.includes("open news")) {
        window.open("https://news.google.com", "_blank");
        speak("Opening news for you.");
    } else if (Message.includes("what is the time") || Message.includes("tell me the time")) {
        let time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (Message.includes("what is the date") || Message.includes("tell me the date")) {
        let date = new Date().toLocaleDateString();
        speak(`Today's date is ${date}`);
    } else if (Message.includes("thank you") || Message.includes("thanks")) {
        speak("You're welcome! If you need anything else, just let me know.");
    } else {
        // Fallback: search on Google
        let searchQuery = Message.replace(/shifra|shipra/gi, "");
        let finalText = "I am searching for you on the internet regarding " + searchQuery;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
}