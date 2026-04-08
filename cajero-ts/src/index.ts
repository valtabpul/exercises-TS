import { Cuenta } from './models/CuentaBancaria';
import { CajeroService } from './services/CajeroService';


// Crear cuentas de ejemplo
const cuenta1 = new Cuenta('Alice', 'ACC-1001', 500);
const cuenta2 = new Cuenta('Bob', 'ACC-1002', 1000);


//crear cajero con 3000 de efectivo disponible
const cajero = new CajeroService(3000);
cajero.agregarCuenta(cuenta1);
cajero.agregarCuenta(cuenta2);

console.log("Estado inicial del cajero:", cajero.estado());

// Consultar saldo
console.log("Saldo de Alice:", cajero.consultarSaldo('ACC-1001'));
console.log("Saldo de Bob:", cajero.consultarSaldo('ACC-1002'));

// Depositar dinero
cajero.depositar('ACC-1001', 200);
console.log("Saldo de Alice después del depósito:", cajero.consultarSaldo('ACC-1001'));
console.log("Estado del cajero después del depósito:", cajero.estado());

// Retirar dinero
cajero.retirar('ACC-1002', 300);
console.log("Saldo de Bob después del retiro:", cajero.consultarSaldo('ACC-1002'));
console.log("Estado del cajero después del retiro:", cajero.estado());

//retirar más dinero del que hay en el cajero para probar error
