# Weather App

The Weather App is a simple web application that allows users to get weather information for a specific location.

## Features

- Enter the desired location to retrieve weather information.
- Display the weather description for the provided location.
- Handle errors gracefully when weather information is not available or an error occurs.

## Technologies Used

- Node.js
- Express.js
- Request module
- HTML
- CSS

## Installation

1. Clone the repository:

``` bash
git clone https://github.com/JoelEmmanuelCloud/weatherapp
```


2. Navigate to the project directory:

```bash
cd weatherapp 
```


3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

API_KEY=your_api_key


5. Start the application:

```bash
npm start
```



6. Open your web browser and access the app at `http://localhost:3000`.

## Usage

1. Enter the desired location in the input field.
2. Click the "Get Weather" button.
3. The app will display the weather description for the provided location.
4. If an error occurs or weather information is not available, an appropriate message will be displayed.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore and modify the code as per your requirements.

## Acknowledgements

- The Weather App uses the OpenWeatherMap API to retrieve weather information. Visit [OpenWeatherMap](https://openweathermap.org/) for more details on their services.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.