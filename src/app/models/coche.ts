export interface Coche {
    id: number | string | null;
    marca: string;
    modelo: string;
    puertas: number;
    tipoDeCoche: string;
    potencia: number;
    oferta?: boolean;
    visible?: boolean;
    vendido?: boolean;
}