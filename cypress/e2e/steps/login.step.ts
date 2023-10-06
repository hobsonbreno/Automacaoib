import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import dados from '../../fixtures/example.json';
import { when } from 'cypress/types/jquery';
const telaLogin = require("../../pages/TelaLogin")


Given('que o usuario esteja na pagina inicial  do IB', function(){
    cy.visit(dados.url);
});
When ('informe o cpf', function(){
    telaLogin.setCpf(dados.cpf);
});     

When ('clicar no botão entrar', function(){
    telaLogin.cliqueEntrar();
});     

Then ('deve ser redirecionado a pagina de validação de token OTP', function(){
    telaLogin.clickRecaptcha();   
});     

When ('o usuario informa o Token recebido', function(){
    
});     

When ('clique no botão confirmar', function(){
    
});     

Then ('Deve ser redirecionado para area logada', function(){
    
});     



     