import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{

    transform(arr:any[], field: string):any[]{
        
        if(!arr){
            return;
        }
        
        arr.sort((a,b)=>{
            //Product > Field: Name
            if(a[field] < b[field]){
                return -1;
            }
            else if(a[field] > b[field]){
                return 1;
            }

            return 0;
        })
        
        return arr;
    }
}
