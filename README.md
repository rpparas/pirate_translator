# Pirate Translator

A fun project to convert English language to pirate lexicon using React and a 3rd-party API

## Requirements & Installation

```
# You must have git and npm installed

git clone https://github.com/rpparas/pirate_translator.git
```

## Usage

### Via npm:
```
cd pirate_translator/pirate-fy
npm install
npm run build
npm run start
```

### Via Docker:

```
cd pirate_translator
# This builds a Docker image on your computer and
# runs the app as a Docker container
make run-dev
```
Open this in your browser: [http://localhost:3000](http://localhost:3000)

### Via AWS
(TODO: need to setup Lambda)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


To check translators available on the API, run

```
make list-translators
```
Note: What's listed on the [website](https://funtranslations.com/api/#all) may not necessarily be available (e.g. Austrian returns 404)

## License

[MIT](https://choosealicense.com/licenses/mit/)
