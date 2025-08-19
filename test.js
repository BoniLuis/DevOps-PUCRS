
console.log("Executando testes...");

const assert = require('assert');

function runTests() {
    try {
        assert.strictEqual(1 + 1, 2, "1 + 1 = 2");
        console.log("Todos os testes passaram!");
        process.exit(0);
    } catch (error) {
        console.error("Erro nos testes: ", error.message);
        process.exit(1);
    }
}

runTests();