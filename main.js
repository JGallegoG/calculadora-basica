// selección de elementos 
const numeros =  document.querySelectorAll('.btn')
const borraNum = document.querySelector('.btn_C')
const calcular = document.querySelector('.cal')

// agregar los números al display de la calculadora
numeros.forEach(element => {
    element.addEventListener('click', ()=> {
        document.getElementById('display').value += element.value
    })
});

// borrar los números del display de la calculadoras
borraNum.addEventListener('click', ()=> {
    document.getElementById('display').value = ''
})

// realizar cáculos 
calcular.addEventListener('click', ()=> {
    const valorActual = document.getElementById('display').value
    const resultado = eval(valorActual)
    document.getElementById('display').value = resultado
})





    





