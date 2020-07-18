namespace general{
    export class Camioneta extends Vehiculo {
        private cuatroXCuatro:boolean;

        constructor(id:number,marca:string,modelo:string,precio:number, cuatroXCuatro:boolean){
            super(id,marca,modelo, precio);
            this.cuatroXCuatro=cuatroXCuatro;
        }

        public getcuatroXCuatro():boolean{
            return this.cuatroXCuatro;
        }

        public setCuatroXCuatro(cuatroXCuatro:boolean):void{
            this.cuatroXCuatro=cuatroXCuatro;
        }
    }
}