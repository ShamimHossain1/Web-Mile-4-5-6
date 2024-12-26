Currency Converter - Text Editor Application

Overview

This project is a Text Editor with Currency Conversion Integration built using JavaScript, HTML, and CSS. The text editor allows users to input text and dynamically calculates real-time currency exchange rates using the currency-api. Users can easily convert amounts mentioned in their text from one currency to another.

Features
	1.	Text Editing:
	•	A simple, user-friendly text editor where users can input or edit text.
	•	Supports basic text formatting.
	2.	Currency Conversion:
	•	Integrates real-time currency conversion.
	•	Users can select currencies from drop-down menus and convert specified amounts.
	•	Automatically fetches the latest rates using the currency API.
	3.	Dynamic Updates:
	•	Provides instant results after performing conversions.
	•	Ensures updated exchange rates every time the user converts.


Technology Stack
	•	HTML: Structures the application layout and UI.
	•	CSS: Styles the text editor and currency converter interface.
	•	JavaScript: Implements the core logic for text editing and currency conversion.

Installation and Setup
	1.	Clone the repository or download the project files.
	2.	Open the index.html file in any browser to run the application.
	3.	No additional setup is required as it uses a CDN-hosted API for currency data.

Usage
	1.	Text Editor:
	•	Open the application in a browser.
	•	Enter or edit text in the provided text editor.
	2.	Currency Conversion:
	•	Select the desired currencies from the From and To drop-down menus.
	•	Input the amount you wish to convert.
	•	Click the Convert button to fetch and display the converted amount.

Project Files
	•	index.html: Contains the structure of the application.
	•	styles.css: Styles the text editor and currency converter.
	•	script.js: Handles the functionality for text editing and currency conversion.

API Integration

The application uses the following API for currency data:
	•	Base URL: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies
	•	Example API Call:

const URL = `${BASE_URL}/${fromCurrency}/${toCurrency}`;
const response = await fetch(URL);
const data = await response.json();



Error Handling
	•	Validates that the input amount is a positive number.
	•	Logs an error message to the console if the API call fails.

Future Enhancements
	•	Add support for text analysis to automatically detect and convert currency amounts mentioned in the text.
	•	Include a history feature to track previous conversions.
	•	Provide options for custom themes in the text editor.

License

This project is open-source and available under the MIT License.
