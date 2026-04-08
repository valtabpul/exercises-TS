import {Cuenta} from '../models/CuentaBancaria';
import {assertNotNull, findBy} from '../utils/validaciones';

export interface ICajeroService{
    efectivoDisponible:number;
}

export class CajeroService{
    private cuenta: Cuenta[] = [];
    private efectivoDisponible: number;

    constructor(efectivoInicial: number) {
        if(efectivoInicial < 0) {
            throw new Error("El efectivo inicial debe ser un valor positivo.");
        }
        this.efectivoDisponible = efectivoInicial;
    }

    // Agregar cuenta al cajero (simula una base de datos simple en memoria)
    public agregarCuenta(cuenta: Cuenta): void {
        this.cuenta.push(cuenta);
    }

    // Consultar saldo por número de cuenta
    public consultarSaldo(numeroCuenta: string): number {
        const cuenta = this.cuentaPorNumero(numeroCuenta)
        return cuenta.getSaldo();
    }

    // Depositar en una cuenta
    public depositar(numeroCuenta: string, cantidad: number): void {
    const cuenta = this.cuentaPorNumero(numeroCuenta);
    cuenta.depositar(cantidad);
    // El efectivo del cajero aumenta cuando el usuario deposita efectivo en el cajero
    this.efectivoDisponible += cantidad;
    }

    // Retirar dinero desde una cuenta. Valida fondos del cajero y de la cuenta
    public retirar(numeroCuenta: string, cantidad: number): void {
        if(!cantidad || cantidad <= 0) {
            throw new Error("La cantidad a retirar debe ser positiva.");
        }
        if (cantidad > this.efectivoDisponible) {
            throw new Error("Efectivo insuficiente en el cajero para realizar el retiro.");
        }

        const cuenta = this.cuentaPorNumero(numeroCuenta);
        cuenta.retirar(cantidad);
        // El efectivo del cajero disminuye cuando el usuario retira efectivo del cajero
        this.efectivoDisponible -= cantidad;
    }

    public estado(): ICajeroService {
        return { efectivoDisponible: this.efectivoDisponible };
    }

    // Método privado para encontrar una cuenta por su número
    private cuentaPorNumero(numeroCuenta: string): Cuenta {
        const cuenta = findBy(this.cuenta, c => c.informacionCuenta().numeroCuenta === numeroCuenta);
        assertNotNull(cuenta, `Cuenta con número ${numeroCuenta} no encontrada.`);
        return cuenta;
    }
}
