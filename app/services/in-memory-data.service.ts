import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recruits = [
      {id: 1, name: 'Kyrill'},
      {id: 2, name: 'Therese'},
    ];

    let companies = [
      {id: 1, name: 'TopTemp'},
      {id: 2, name: 'Google'},
    ];
    return {recruits, companies};
  }

}