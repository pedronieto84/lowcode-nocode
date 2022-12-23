// Cargo el objeto/ modulo / clase necesario para interactuar con openai
const { Configuration, OpenAIApi } = require("openai");

// Le paso las claves de openAi
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Creo una nueva instancia de OPENAI
const openai = new OpenAIApi(configuration);

// Hago la petición a su api y meto la respuesta en la variable response
openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  })
  // Si la respuesta es exitosa entonces (then...)
  .then((response) => {
    console.log("response", response);
  })
  // Si hay un error logueo el error
  .catch((e) => {
    console.error(e);
  });

