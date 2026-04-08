export interface ICuentaBancaria{
    titular:string;
    numeroCuenta:string;
    saldo:number;
}

export class Cuenta {
    private titular: string;
    private numeroCuenta: string
    private saldo: number;

    constructor(titular: string, numeroCuenta: string, saldo: number) {
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    public informacionCuenta():ICuentaBancaria{
        return {
            titular: this.titular,
            numeroCuenta: this.numeroCuenta,
            saldo: this.saldo
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }

    // Depositar dinero en la cuenta
    // Lanza error si la cantidad no es positiva
    public depositar(cantidad: number): void {
        if (cantidad <= 0) {
            throw new Error("La cantidad a depositar debe ser positiva.");
        }
        this.saldo += cantidad;
    }

    // Retirar dinero de la cuenta
    // Lanza error si cantidad no es positiva o si hay saldo insuficiente
    public retirar(cantidad:number):void{
        if (!cantidad || cantidad <= 0) {
            throw new Error("La cantidad a retirar debe ser positiva.");
        }
        if (cantidad > this.saldo) {
            throw new Error("Saldo insuficiente para realizar el retiro.");
        }
        this.saldo -= cantidad;
    }

}