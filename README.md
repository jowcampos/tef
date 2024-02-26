### Primeiro passo
1. Antes de iniciar, verifique se o credenciamento foi realizado e se os periféricos(impressora e pinpad) estão devidamente instalados no Totem

### Acesso ao Totem
2. Inicialmente, faça o acesso remoto utilizando ferramentas como: Anydesk ou Teamviewer e após o acesso, verifique os seguintes itens:

2.1 Teste a impressora
No Windows acesse "Impressora e scanners", desmarque a opção "Deixe o Windows gerenciar minha impressora padrão". Selecione a impressora do Totem e marque como impressora padrão. Feito isso, realiza o teste de impressão.

### Instalação
3. Transfira o executável e realize a instalação.

### Login e configuração inicial
4. Solicite o cliente para realizar o login e definir um nome para o Totem. Após a inserção do nome, pode ser selecionado o Stone Code e realizado a ativação

### Finalizando a ativação
5. Realize um teste com o cliente transacionando com cartão.

___

### Help em caso de ocorrência de erro.
1. Verifique se o serviço Stone está em execução e se o .NET está instalado. Para isso acesse o diretório C:\ProgramFiles\Theos Totem\Stone e execute o programa AutoTEF.Service.dll

### Portas COM 
2. Após a instalação, 
- Desconecte o Pinpad USB e consulte as portas no "Gerenciador de Dispositivos" do Win em "Portas (COM e LTP)".
- Clique em "Exibir" e selecione "Mostrar dispositivos ocultos". 
- Remova os dispositivos ocultos relacionados. 
- Conecte novamente o Pinpad USB e tente ativá-lo no aplicativo. 
- Se houver problemas com a impressora, siga os mesmos passos. 

### Criando ativação do Pinpad na Stone
3. Instale no Totem o programa visual para realizar a requisição exe:
https://www.usebruno.com/sponsors
Inicie uma chamada com o metodo POST na url:
```sh
http://localhost:8000/Api/Active
```

Preencha o body com o Json completando o respectivo Stone Code do cliente:
```json
{
    "stoneCode": "scl13nt3",
    "partnerName": "NomeDoPartner",
    "connectionName": "COM3"
}
```

Para checar a comunicação:
```sh
https://localhost:8000/api/healthCheck
```
