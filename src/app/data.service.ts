import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // The service is available application-wide
})

export class DataService {
  getData(): string {
    return 'Injected Data from DataService';
  }
}
