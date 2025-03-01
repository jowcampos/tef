
## Kickoff
Antes de iniciar, verifique se o credenciamento foi realizado e se os periféricos(impressora e pinpad) estão devidamente instalados no totem.

## Acesso
Inicialmente, faça o acesso remoto utilizando ferramentas como: Anydesk ou Teamviewer e após o acesso, verifique os seguintes itens:

## Impressora 
No Windows acesse "Impressora e scanners", desmarque a opção "Deixe o Windows gerenciar minha impressora padrão". Selecione a impressora do totem e marque como impressora padrão. Feito isso, realiza o teste de impressão.<br>
26/07/2024 - Atualização de configuração para impressoras Epson: Além do *spooler de impressão* padrão, é necessário adicionar uma porta *COM*:
https://www.projetoacbr.com.br/forum/topic/54161-homologação-epson-tm-t20x/ <br>
https://www.projetoacbr.com.br/forum/topic/40311-homologação-bematech-mp-4200-th-não-fiscal/<br>
https://www.projetoacbr.com.br/forum/topic/46859-homologação-print-id-da-control-idnão-fiscal/<br>

## Instalação
Transfira o executável e realize a instalação.

## Login e configurações
Solicite o cliente para realizar o login e definir um nome para o totem. Após a inserção do nome, pode ser selecionado o code partner e realizado a ativação

## Final
Realize um teste com o cliente transacionando com cartão.


## Help em caso de ocorrência de erro.
Verifique se o serviço do partner está em execução e se o .NET está instalado. Para isso acesse o diretório C:\ProgramFiles\SistemName\NomePartner e execute o programa AutoTEF.Service.dll

## Portas COM 
Após a instalação, 
- Desconecte o Pinpad USB e consulte as portas no "Gerenciador de Dispositivos" do Win em "Portas (COM e LTP)".
- Clique em "Exibir" e selecione "Mostrar dispositivos ocultos". 
- Remova os dispositivos ocultos relacionados. 
- Conecte novamente o Pinpad USB e tente ativá-lo no aplicativo. 
- Se houver problemas com a impressora, siga os mesmos passos. 

## Criando ativação do Pinpad
Instale no totem o programa visual para realizar a requisição exe:
https://www.usebruno.com/sponsors
Inicie uma chamada com o metodo POST na url:
```sh
http://localhost:8000/Api/Active
```

Preencha o body com o Json completando o respectivo codePartne do estabelecimento:
```json
{
    "codePartner": "3x3mpl010101",
    "partnerName": "NomeDoPartner",
    "connectionName": "COM3"
}
```

Para checar a comunicação:
```sh
https://localhost:8000/api/healthCheck
```