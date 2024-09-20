function calcular() {
    var numero = ipt_numero.value; // Pegando o valor como string
    var base = Number(ipt_base.value); // Base selecionada

    // Converte o número para decimal
    var decimal = parseInt(numero, base);

    // Converte o valor decimal para as outras bases
    var binario = decimal.toString(2);
    var octal = decimal.toString(8);
    var hexadecimal = decimal.toString(16);

    // Exibindo os resultados nas caixas de texto
    ipt_bi.value = binario;
    ipt_deci.value = decimal; // Já está em decimal
    ipt_octa.value = octal;
    ipt_hexa.value = hexadecimal;
}