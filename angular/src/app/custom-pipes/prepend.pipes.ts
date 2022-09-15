import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'prepend'
})
export class PrependPipe implements PipeTransform{


    transform(myData: string, pipeInput: string){
        return pipeInput + myData;
    }

    ////////////we'll use a slightly different definition
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }

}