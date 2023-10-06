describe('Login', () => {
    it.only('Cenário - 1: Login Usuario Legado com CPF', () => { //.only => usamos quando precisamos rodar apenas um teste
      cy.visit('/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('01362265314');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });

describe('Login', () => {
    it('Cenário - 2: Login Usuario KeycloaK com CPF', () => { //.only => usamos quando precisamos rodar apenas um teste
      cy.visit('/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('01362265314');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });

  describe('Login', () => {
    it('Cenário - 3: Login Usuario KeycloaK com Email', () => {
      cy.visit('/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('hobsonbmn@gmail.com');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     


      
    });
  });

  describe('Login', () => {
    it('Cenário - 4: Login Usuario KeycloaK + ID Magalu com CPF', () => { //.only => usamos quando precisamos rodar apenas um teste
      cy.visit('/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('99490021334');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });

  describe('Login', () => {
    it('Cenário - 5: Login Usuario KeycloaK + ID Magalu com Email', () => {
      cy.visit('/');
      cy.get('.ant-input').click();
      cy.get('.ant-input').type('nataliaspnascimento@gmail.com');
      cy.get('.ant-space > :nth-child(3) > .ant-btn').click();
      cy.wait(1000);
     

    });
  });