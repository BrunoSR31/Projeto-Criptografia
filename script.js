const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')

function btEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage = 'none'
  mensagem.style.backgroundColor = 'rgb(224, 252, 236)'
}

function btDesencriptar() {
  const textoEncriptado = desencriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage = 'none';
  mensagem.style.backgroundColor = 'rgb(224, 252, 236)'
}

function encriptar(mensagemEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  mensagemEncriptada = mensagemEncriptada.toLowerCase()
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (mensagemEncriptada.includes(matrizCodigo[i][0])) {
      mensagemEncriptada = mensagemEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }

  return mensagemEncriptada
}

function desencriptar(mensagemEncriptada) {
  let matrizCodigo = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  mensagemEncriptada = mensagemEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (mensagemEncriptada.includes(matrizCodigo[i][0])) {
      mensagemEncriptada = mensagemEncriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return mensagemEncriptada
}

function copiarTexto(){
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0,99999)
  document.execCommand("copy");
  
}
