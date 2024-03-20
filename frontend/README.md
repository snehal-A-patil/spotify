# Day 3

## voice modulation

Implementing voice modulation  using the useVoiceModulation hook from the @specular-aura/voice-modulation library.

It is integrated within the Player component to enhance audio playback.

Voice modulation for the 'megaphone' effect is implemented which can be triggered by the 'plus' icon button in the Player component.

## home page

Within the Home component, the frontend renders sections for music content display.

Renders a section titled "Made For You" for personalized song recommendations.

Utilizes mock data to stimulate recently played and recommended songs.

## song item
The SongItem component renders individual song items with a play button.

It uses React Router for navigation and interacts with a global song context to handle playing the selected song when the play button is clicked.

It accesses the global song context using the useContext hook.

The playSong function sets the clicked song as the current song in the context, initiating playback with details such as artist, title, image, ID, and streaming URL for a seamless user experience in the SongItem component."

## section

The Section component is responsible for rendering a section of music content within the application's user interface.

The Section component dynamically renders a section of music content with a specified title and a grid layout.

The component provides an option for customizing the order of displayed items through the reverse prop.


## search

The handleSearch function is responsible for executing the search logic based on the entered search term.

useState hook is used to manage the state of the search term (searchTerm) and search results (searchResults).

findIndex method is used  to search for a matching song in the songs array within the global context.

searchResults state gets update with the matched songs or an empty array if there are no matches.

Results Display Renders a grid of SongItem components for the matched search results.

Each SongItem displays relevant information about the song and allows users to interact with it.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
