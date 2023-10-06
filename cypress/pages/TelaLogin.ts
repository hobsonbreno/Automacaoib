class telaLogin{
    elements = {
        inputCpf: () => cy.get('[type="text"]'),
        btnEntrar: () => cy.get('[type="submit"]'),
        
    }
clickRecaptcha(){
    cy.wait(50000);
    
}

setCpf(cpf){
   this.elements.inputCpf().type(cpf);
    };
cliqueEntrar(){
    this.elements.btnEntrar().click();
};  
}
module.exports = new telaLogin