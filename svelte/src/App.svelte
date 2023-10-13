<script>
	let result = 0;
	let inputValue = "";
	let pantalla = "0";
	function calculate() {
	  try {
		result = eval(inputValue);
		inputValue = result;
	  } catch (error) {
		result = "Error";
		inputValue = "";
		pantalla = result;
	  }
	}

	function Agregar(x){
		inputValue = inputValue+x;
	}
	function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evitar el comportamiento predeterminado del Enter (enviar el formulario)
      calculate();
    }
	}
	function Borrar(){
		inputValue = inputValue.slice(0, -1);
	}
	function BorrarTodo(){
		inputValue = "";
	}
  </script>
  
  <style>
	.conteiner{
		display: flex;
		background-color: rgb(243, 236, 255);
	}
	.calculator {
	  text-align: center;
	  background-color: rgb(243, 250, 255);
	  border: 1px solid #ccc; /* Establece un borde */
  	  border-radius: 20px;
	}
	.numeros{
		font-size: 48px;
		padding: 10px 25px;
		background-color: white;
	}
	
	.numeros:active{
		background-color:  rgb(116, 200, 255);
		color: white;
	}
	
	.operaciones{
		font-size: 34px;			
		padding: 10px 25px;
		background-color: rgb(116, 200, 255);
		color: white;
	}
	.igual{
		font-size: 46px;
		padding: 10px 25px;
		background-color: rgb(116, 200, 255);
		color: white;
	}
	.igual:active{
		background-color: white;
		color: rgb(116, 200, 255);
	}
	.operaciones:active{
		background-color: white;
		color: rgb(116, 200, 255);
	}
	.borrar{
		font-size: 34px;			
		padding: 10px 5px;
		background-color: rgb(116, 200, 255);
		color: white;
	}
	.borrar:active{
		background-color: white;
		color: rgb(116, 200, 255);
	}
	input{
		font-size: 34px;
		text-align: right;
	}
	.borde{
		width: 40%;
	}
	input{
		color: blue;
	}
	.fondo{
		background-color: rgb(243, 236, 255);

	}
	h1{
		color: rgb(255, 226, 59);
	} 
	</style>
  <div class="fondo">	<br><br><br>
  </div>
  <div class="conteiner">
	<div class="borde"> </div>
	<div class="calculator">
	<h1>Calculadora</h1>
	<input type="text" bind:value={inputValue} placeholder={pantalla} on:keydown={handleKeyDown} />  
	<div class="buttons">
		<button class="operaciones" on:click={()=> Agregar('/')}>/</button>
		<button class="operaciones" on:click={()=> Agregar('*')}>*</button>	
		<button class="operaciones" on:click={()=> Agregar('+')}>+</button>	
		<button class="operaciones" on:click={()=> Agregar('-')}>-</button>
		<button class="borrar" on:click={Borrar}>CE</button>
		<button class="borrar" on:click={BorrarTodo}>AC</button>
		<br>
		<button class="numeros" on:click={()=> Agregar('7')}>7</button>	
		<button class="numeros" on:click={()=> Agregar('8')}>8</button>	
		<button class="numeros" on:click={()=> Agregar('9')}>9</button><br>
		<button class="numeros" on:click={()=> Agregar('4')}>4</button>		
		<button class="numeros" on:click={()=> Agregar('5')}>5</button>
		<button class="numeros"on:click={()=> Agregar('6')}>6</button><br>
		<button class="numeros" on:click={()=> Agregar('1')}>1</button>	
		<button class="numeros" on:click={()=> Agregar('2')}>2</button>	
		<button class="numeros" on:click={()=> Agregar('3')}>3</button>	<br>
		<button class="numeros" on:click={()=> Agregar('.')}>.</button>	
		<button class="numeros" on:click={()=> Agregar('0')}>0</button>	
		<button class="igual" on:click={calculate}>=</button>
	</div>
	<br>
	<br>

  </div>
  <div class="borde"> </div>

  </div>
  <div class="fondo">	<br><br><br>
  </div>
  