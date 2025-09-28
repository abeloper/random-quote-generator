 // Array of quotes with text and author
        const quotes = [
            {
                text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                author: "Nelson Mandela"
            },
            {
                text: "Software is a great combination between artistry and engineering.",
                author: "Bill Gates"
            },
            {
                text: "Your time is limited, so don't waste it living someone else's life.",
                author: "Steve Jobs"
            },
            {
                text: "Good software, like wine, takes time.",
                author: "Joel Spolsky"
            },
            {
                text: "If you look at what you have in life, you'll always have more.",
                author: "Oprah Winfrey"
            },
            {
                text: "Life is what happens when you're busy making other plans.",
                author: "John Lennon"
            },
            {
                text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
                author: "Mother Teresa"
            },
            {
                text: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "The danger is not computers thinking like humans, but humans thinking like computers.",
                author: "Sydney J. Harris"
            },
            {
                text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
                author: "Ralph Waldo Emerson"
            },
            {
                text:"Technology is best when it brings people together.",
                author:"Matt Mullenweg"
            },
        ];

        // DOM elements
        const quoteTextElement = document.getElementById('quote-text');
        const quoteAuthorElement = document.getElementById('quote-author');
        const newQuoteButton = document.getElementById('new-quote');
        
        // Function to get a random quote
        function getRandomQuote() {
            // Fade out current quote
            quoteTextElement.style.opacity = 0;
            quoteAuthorElement.style.opacity = 0;
            
            setTimeout(() => {
                // Get random index
                const randomIndex = Math.floor(Math.random() * quotes.length);
                
                // Update DOM with new quote
                quoteTextElement.textContent = quotes[randomIndex].text;
                quoteAuthorElement.textContent = `— ${quotes[randomIndex].author}`;
                
                // Fade in new quote
                quoteTextElement.style.opacity = 1;
                quoteAuthorElement.style.opacity = 1;
                
                // Change background color slightly for visual interest
                document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 25%, 95%)`;
            }, 300);
        }
        
        // Event listener for the button
        newQuoteButton.addEventListener('click', getRandomQuote);
        
        // Get a random quote when the page loads
        document.addEventListener('DOMContentLoaded', getRandomQuote);
