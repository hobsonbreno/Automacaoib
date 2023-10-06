describe('Pagina Inicial', () => {
  it('Texto 1 - Ainda não tem conta?', () => {
    cy.visit('https://contadigital.fintechmagalu.com.br/');
    cy.get('.ant-row-end > .ant-typography').contains('Ainda não tem conta?' ).click();
    cy.wait(5000);
  });
});

describe('Pagina Inicial', () => {
  it('Texto 2 - Preencha com seu CPF ou e-mail para entrar', () => {
    cy.visit('https://contadigital.fintechmagalu.com.br/');
    cy.get('[style="color: rgb(80, 80, 80); font-weight: 600; font-size: 16px;"]').contains('Preencha com seu CPF ou e-mail para entrar' ).click();
    cy.wait(5000);
  });
});

describe('Pagina Inicial', () => {
  it('Texto 3 - Acesse sua conta', () => {
    cy.visit('https://contadigital.fintechmagalu.com.br/');
    cy.get('[style="color: rgb(48, 48, 48); font-weight: 600; font-size: 24px;"]').contains('Acesse sua conta' ).click();
    cy.wait(5000);
  });
});


describe('Pagina Inicial', () => {
  it('Texto 4 - Entrar', () => {
    cy.visit('https://contadigital.fintechmagalu.com.br/');
    cy.get('.ant-space > :nth-child(3) > .ant-btn').contains('Entrar' ).click();
    cy.wait(5000);
  });
});

