function calcularFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            document.writeln('FIZZ')
            document.writeln('<br>')
        } else if (i %  5 == 0) {
            document.writeln('BUZZ')
            document.writeln('<br>')
        } else {
            document.writeln(i)
            document.writeln('<br>')
        }
    }
}