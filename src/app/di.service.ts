import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiService {
log(message:string){
  console.log('message is ',message);
}
}
