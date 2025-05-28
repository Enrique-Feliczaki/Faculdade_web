// 1. Lista de entregas
const entregas = [
    { id: 1, cliente: "João Silva", endereco: "Rua A, 123", status: "pendente" },
    { id: 2, cliente: "Maria Oliveira", endereco: "Av. B, 456", status: "pendente" },
    { id: 3, cliente: "Carlos Lima", endereco: "Rua C, 789", status: "pendente" }
  ];
  
  // 2. Função que simula a busca no "banco de dados"
  function buscarEntregas() {
    return new Promise((resolve) => {
      console.log("Buscando entregas no banco de dados...");
      setTimeout(() => {
        resolve(entregas);
      }, 1000); 
    });
  }
  
  // 3. Função que simula a atualização de status
  function atualizarStatusEntrega(id) {
    console.log(`Atualizando status da entrega ID ${id}...`);
    setTimeout(() => {
      const entrega = entregas.find(e => e.id === id);
      if (entrega) {
        entrega.status = "entregue";
        console.log("Entrega atualizada:");
        console.log(entrega);
      } else {
        console.log("Entrega não encontrada.");
      }
    }, 3000); 
  }
  
  // 4. Execução do sistema
  buscarEntregas().then(lista => {
    console.log("Entregas encontradas:");
    console.table(lista);
  
    atualizarStatusEntrega(2);
  });
  