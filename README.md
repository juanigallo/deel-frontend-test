# Deel frontend test - Autocomplete componente

This repo has an autocomplete component with the following features.

- Debounce: Configurable debounce method to avoid requests when fast typing.
- Highlight: It highlights your search inside the result
- Plug & play: Easy to use with any API
- No third party dependencies

## Props

- debounceTime _(optional)_ - number - Indicates how much time should pass between requests (in ms). Default 300ms.
- placeholder _(optional)_ - string - Indicates the placeholder of the search input.
- limit _(optional)_ - number - Indicates max amount of results that are shown. Default 5.
- icon _(optional)_ - string - Indicates if it should render an icon inside the search box. Default: false
- apiUrl _(optional)_ - string - Indicates the URL from where data will be fetched. Dynamic data should be at the end of the string.
- data _(optional)_ - array - Array of local data to show in the autocomplete.
- keysToSearch _(optional)_ - array - Array of keys that the autocomplete will use for filtering. Required if using `data`.
- keysToShow _(requred)_ - array - Array of keys that the autocomplete will show in the results.

## Branches

- main -> React with classes, using create-react-app
- functional -> React with functional components, using create-react-app
- webpack-babel -> React with classes. No kickoff dependencies.

## Demo

https://deel-frontend-test.vercel.app/

## Run the project

- Clone the repo
- Run `npm install` or `yarn install`
- Development mode: Run `npm start` or `yarn start`
- Production build: Run `npm run build`
