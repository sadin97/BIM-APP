import { Pipe, PipeTransform } from '@angular/core';
import { find, result } from 'lodash'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => {
       // return find(value, ['name', args[0].toLowerCase()])
       if (args[0] === '') {
        return value;
       } else {
        return item.name.toLowerCase() === args[0].toLowerCase() ? item : undefined
       }
    });
  }

}

/*

console.log(args[0]); // Ovo ispisuje šta upisujem u search bar.
return value.slice(0, 1); // vratimo isječen array
return undefined; // vraća ništa

*/
