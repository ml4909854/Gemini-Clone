# Netilify Link : https://regal-faloodeh-53535c.netlify.app/
# Gemini-Clone
A visually appealing Gemini Clone built using React.js that replicates the functionality and design of the Gemini platform. This project focuses on creating an interactive and responsive UI to provide a seamless user experience.

# Features & Functionalities
 AI-Powered Assistant: The Gemini Clone integrates an AI assistant that responds to user queries using a custom backend configuration (run function in gemini.js).
Prompt History: Users can see their previously asked prompts in a history section, and clicking any of these prompts will reload the result.
Formatted AI Responses: AI responses are dynamically formatted, with bold text and line breaks to enhance readability.
Loading Indicator: While waiting for the AI's response, a loading indicator is shown to the user.
Real-Time Input: As the user types a query, the input field is dynamically updated.
Recent Prompt Feature: Users can easily view, select, and resubmit previous prompts without adding them again to the history.
Error Handling: Proper error messages are displayed in case of any issues fetching the response from the AI service.
Responsive UI: The app provides a responsive user interface that works well on both desktop and mobile devices.

# Key Functionalities
Submit Query: Users can type any query in the input field and click on the "Send" button (paper plane icon) to submit the prompt to the AI assistant.
View Results: After submitting the prompt, the app displays the AI-generated response.
View Previous Prompts: Users can click on any of the recent prompts to fetch the response again without adding the prompt to the history.
New Chat: A new chat can be started by clearing the current results and allowing the user to enter a new prompt.
Sidebar Navigation: Includes easy navigation through recent prompts, settings, help, etc.
Installation & Setup
Follow these steps to get the Gemini Clone running on your local machine.

1. Clone the Repository
Start by cloning the repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone
2. Install Dependencies
Make sure that you have Node.js installed. Then, install the project dependencies using npm or yarn.

bash
Copy code
npm install
or

bash
Copy code
yarn install
3. Configure Backend (AI Service)
The AI responses are fetched from a backend service (configured in gemini.js). You’ll need to:

Set up the backend (run function) that processes and returns responses based on the user query. If you're using a custom AI model or service, you’ll need to replace the run function with your own API call logic.
Make sure that the backend is running and accessible.

4. Run the Project Locally
Once the dependencies are installed and the backend is set up, start the development server:

bash
Copy code
npm start
or

bash
Copy code
yarn start
This will start the React development server, and you can view the app by opening your browser and navigating to http://localhost:3000.

# Technologies Used
React.js: JavaScript library for building user interfaces.
Context API: For managing global state (used for storing recent prompts, result data, etc.).
Font Awesome: For adding icons to the UI.
CSS: For styling the components and making the app responsive.
Custom AI Service Integration: Integration with a backend to get AI responses (customizable).
# How It Works
App Structure:
The app is built using React functional components and utilizes the useState, useEffect, and useContext hooks for state management.
The Context API is used for managing global states like recent prompts, result data, and loading states.
Response Formatting:
The responses from the AI are split using ** markers and conditionally formatted (e.g., bold for specific parts of the response).
The final response is injected into the DOM using dangerouslySetInnerHTML to render formatted HTML content (including bold text and line breaks).
Handling Previous Prompts:
The sidebar displays a list of recent prompts.
When a prompt is clicked, it fetches the same result without adding it again to the history.
Error Handling:
If there's an error in fetching the AI response, an appropriate message is displayed to the user.
Contributing
Fork the repository: Click the "Fork" button at the top-right of this repository to create a personal copy of the repository on GitHub.
Clone your forked repository:
bash
Copy code
git clone https://github.com/your-username/gemini-clone.git
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them:
bash
Copy code
git add .
git commit -m "Added new feature"
Push your changes to your forked repository:
bash
Copy code
git push origin feature-name
Create a Pull Request: Open a pull request from your feature branch to the main branch of the original repository.
