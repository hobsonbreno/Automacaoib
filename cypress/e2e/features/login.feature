Feature: testes relacionadas a área de login tela inicial

    @regressao
    Scenario: Login IB
        Given que o usuario esteja na pagina inicial  do IB 
        When informe o cpf 
        And clicar no botão entrar 
        Then deve ser redirecionado a pagina de validação de token OTP
        When o usuario informa o Token recebido 
        And clique no botão confirmar 
        Then Deve ser redirecionado para area logada
    
    