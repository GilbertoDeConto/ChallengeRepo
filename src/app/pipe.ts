import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectbox'
})
export class FilterPipe implements PipeTransform {

    transform(items: any, sel?: any): any {
        return sel ? items.filter(sal => sal.position === sel) : items;
    }
    
}