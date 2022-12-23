 // JSON que funciona correctamente (Para las pruebas)

  // Cargo el objeto/ modulo / clase necesario para interactuar con openai
  const { Configuration, OpenAIApi } = require("openai");

  // Le paso las claves de openAi

  // Organization id = "org-nlIbZe2ZubKiERC0nsAoXZwA"
  // Api Key = "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"

  const apiKey = "sk-y99RoVBYo4YcHIgggQtLjBDT3BlbkFJNSaZlPKvqZ3KWRe1vrzM";//cambiar
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  // Creo una nueva instancia de OPENAI
  const openai = new OpenAIApi(configuration);

  // Hago la petición a su api y meto la respuesta en la variable response
  openai
    .createCompletion({
        model: "text-davinci-002",
        prompt: "Hello world",
      })
    // Si la respuesta es exitosa entonces (then...)
    .then((response) => {
      console.log("response", response.data.choices[0].text);
      res.status(200).send(response.data);
    })
    // Si hay un error logueo el error
    .catch((e) => {
      res.status(500).send(e);
      console.error("Esto ha sido un error", e);
    });