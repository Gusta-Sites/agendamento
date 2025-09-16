<script>
// Seleciona todos os elementos com a classe .atualizar-tela
const botoesAtualizar = document.querySelectorAll('.atualizar-tela');

// Percorre a lista de botões e adiciona o evento de clique em cada um
botoesAtualizar.forEach(botao => {
    botao.addEventListener('click', function() {
        location.reload();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const containerProfissional = document.querySelector('.container-profissional-oculto');

    const botaoMostrarServicosProfissional1 = document.querySelector('.botao-mostrar-servicos-profissional-1');
        const containerServicosProfissional1 = document.querySelector('.container-servicos-profissional-1-oculto');
    
    const botaoServico1Profissional1 = document.querySelector('.botao-servico-1-profissional-1');
        const containerAgendamentoServico1Profissional1 = document.querySelector('.container-servico-1-profissional-1'); 
    
    const botaoServico2Profissional1 = document.querySelector('.botao-servico-2-profissional-1');
        const containerAgendamentoServico2Profissional1 = document.querySelector('.container-servico-2-profissional-1'); 
    
    const botaoServico3Profissional1 = document.querySelector('.botao-servico-3-profissional-1');
        const containerAgendamentoServico3Profissional1 = document.querySelector('.container-servico-3-profissional-1'); 
                                                                                   
    const botaoMostrarServicosProfissional2 = document.querySelector('.botao-mostrar-servicos-profissional-2 ');
        const containerServicosProfissional2 = document.querySelector('.container-servicos-profissional-2-oculto');

    const botaoServico1Profissional2 = document.querySelector('.botao-servico-1-profissional-2');
        const containerAgendamentoServico1Profissional2 = document.querySelector('.container-servico-1-profissional-2'); 
    
    const botaoServico2Profissional2 = document.querySelector('.botao-servico-2-profissional-2');
        const containerAgendamentoServico2Profissional2 = document.querySelector('.container-servico-2-profissional-2'); 

    const botaoServico3Profissional2 = document.querySelector('.botao-servico-3-profissional-2'); 
        const containerAgendamentoServico3Profissional2 = document.querySelector('.container-servico-3-profissional-2'); 


    const botaoVoltar = document.querySelector('.botao-ocultar');
     


    // Esconde a tela de profissionais e mostra os serviços do profissional 1
    if (botaoMostrarServicosProfissional1) {
        botaoMostrarServicosProfissional1.addEventListener('click', () => {


            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'block';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';

            
        });
    }

    // Esconde a lista de serviços e mostra o serviço 1 do profissional 1
        if (botaoServico1Profissional1) {
        botaoServico1Profissional1.addEventListener('click', () => {


            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'block';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';

            
        });
    }

    // Esconde a lista de serviços e mostra o serviço 2 do profissional 1
        if (botaoServico2Profissional1) {
        botaoServico2Profissional1.addEventListener('click', () => {


            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'block';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';

            
        });
    
        
        // Esconde a lista de serviços e mostra o serviço 3 do profissional 1
    if (botaoServico3Profissional1) {
        botaoServico3Profissional1.addEventListener('click', () => {
            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'block';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';
        });
    }

     // Esconde a tela de profissionais e mostra os serviços do profissional 2
    if (botaoMostrarServicosProfissional2) {
        botaoMostrarServicosProfissional2.addEventListener('click', () => {
            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'block';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';
        });
    }

    // Esconde a lista de serviços e mostra o serviço 1 do profissional 2
    if (botaoServico1Profissional2) {
        botaoServico1Profissional2.addEventListener('click', () => {
            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'block';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';
        });
    }

    // Esconde a lista de serviços e mostra o serviço 2 do profissional 2
    if (botaoServico2Profissional2) {
        botaoServico2Profissional2.addEventListener('click', () => {
            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'block';
            containerAgendamentoServico3Profissional2.style.display = 'none';
        });
    }

    // Esconde a lista de serviços e mostra o serviço 3 do profissional 2
    if (botaoServico3Profissional2) {
        botaoServico3Profissional2.addEventListener('click', () => {
            containerProfissional.style.display = 'none';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'block';
        });
    }

    // Mostra Profissionais
    if (botaoVoltar) {
        botaoVoltar.addEventListener('click', () => {
            containerProfissional.style.display = 'block';
            containerServicosProfissional1.style.display = 'none';
            containerServicosProfissional2.style.display = 'none';
            containerAgendamentoServico1Profissional1.style.display = 'none';
            containerAgendamentoServico2Profissional1.style.display = 'none';
            containerAgendamentoServico3Profissional1.style.display = 'none';
            containerAgendamentoServico1Profissional2.style.display = 'none';
            containerAgendamentoServico2Profissional2.style.display = 'none';
            containerAgendamentoServico3Profissional2.style.display = 'none';
        });
    }
}});



</script>
