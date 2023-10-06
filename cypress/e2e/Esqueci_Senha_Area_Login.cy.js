describe('Login', () => {
    it('Cenário - 1: Esqueci a Senha Usuario Legado com CPF', () => { //.only => usamos quando precisamos rodar apenas um teste
      cy.visit('/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('01362265314');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(10000);
      cy.get('.sc-fMMURN > :nth-child(2)').click();

     

    });
  });

describe('Login', () => {
    it('Cenário - 2: LEsqueci a Senha Usuario KeycloaK com CPF', () => { //.only => usamos quando precisamos rodar apenas um teste
      cy.visit('https://contadigital.fintechmagalu.com.br/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('01362265314');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });

  describe('Login', () => {
    it('Cenário - 3: Esqueci a Senha Usuario KeycloaK com Email', () => {
      cy.visit('https://contadigital.fintechmagalu.com.br/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('hobsonbmn@gmail.com');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });

  describe('Login', () => {
    it.only('Cenário - 4: Esqueci a Senha Usuario KeycloaK + ID Magalu com CPF', () => { //.only => usamos quando precisamos rodar apenas um teste
      cy.visit('https://contadigital.fintechmagalu.com.br/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('01362265314');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(100000);
      cy.get('.sc-fMMURN > :nth-child(2)').click();
     
    });
  });

  describe('Login', () => {
    it('Cenário - 5: Esqueci a Senha Usuario KeycloaK + ID Magalu com Email', () => {
      cy.visit('https://contadigital.fintechmagalu.com.br/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('nataliaspnascimento@gmail.com');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });