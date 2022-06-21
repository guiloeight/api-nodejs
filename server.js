const app = require("./src/app");
const PORT = 3030;
// 1313, 3000, 3030, 3333, 6000, 6060, 8000, 8080
// acima porta que não são utilizadas por nenhum programa

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT)
//   console.log(`Servidor rodando na porta ${PORT}`)
//   mensagem acima pra informar que o servidor está funcionando certinho
});

//app.listen(parametro1, parametro2);
//parametro1 = porta para rodar o servidor(no caso 3000)
//parametro2 = função anomina 