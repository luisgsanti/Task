import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Task = [
    { id: 11, title: 'Crear Proyecto NetCore', description:'...', priority:true },
    { id: 12, title: 'Ejecutar Proyecto', description:'...', priority:true },
    { id: 13, title: 'Probar Proyecto', description:'...', priority:false },
    { id: 14, title: 'Depurar Proyecto', description:'...', priority:true }
    ];
    return {Task};
    }

    genId(heroes: Task[]): number {
      return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }

}
