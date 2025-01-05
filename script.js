function calcularMelhorPreco(){

     // Adiciona o refresh após um pequeno intervalo
     setTimeout(() => {
         location.reload();
     }, 2500); // Aguarda 3 segundos antes do refresh
   
     //Parar o refresh automático
    document.getElementById('formCombustivel').addEventListener('submit', function(event){
        // Previne o comportamento padrão de recarregar a página
        event.preventDefault();
    });


    //validar campos
    let precoAlcool = document.getElementById('alcool').value;
    let precoGasolina = document.getElementById('gasolina').value;

    if( (precoAlcool || precoGasolina) != ""){

            let resultado = precoAlcool / precoGasolina
            
            if (precoAlcool == ""){
                alert("Preencha o preço do álcool")
                
            }else if(precoGasolina == ""){
                alert("Preencha o preço da gasolina")
            }

            /*calcular se é melhor usar ácool ou gasolina
              *se valorAlcool / valorGasolina >= 0.7 é melhor utilizar gasolina
              *senão é melhor utilizar álcool 
             */
            

            else if(resultado >= 0.7){
                
                document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina"
            }
            else{
                
                document.getElementById('resultado').innerHTML = "Melhor utilizar álcool"

            }
            

            }else{
        alert("Preencha os preços")
             }
    
}
