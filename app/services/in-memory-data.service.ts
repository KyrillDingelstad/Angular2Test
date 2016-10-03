import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recruits = [
      {id: 1, name: 'Kyrill'},
      {id: 2, name: 'Therese'},
    ];

    let companies = [
      { 
        name: 'TopTemp',
        id: 1, 
      },
      {
        name: 'Google',
        id: 2, 
      },
    ];

    let vacancies = [
        {
          id: 1,
          owner: 'google',
          jobtitle: 'developer',
          description: 'bloobblieb'
        },
        {
          id: 2,
          owner: 'Google',
          jobtitle: 'developer',
          description: 'blablabla'
        },
        {
          id: 3,
          owner: 'Google',
          jobtitle: 'developer',
          description: 'blablabla'
        },
        {
          id: 4,
          owner: 'TopTemp',
          jobtitle: 'developer',
          description: 'blablabla'
        },
        {
          id: 5,
          owner: 'TopTemp',
          jobtitle: 'developer',
          description: 'blablabla'
        }
    ]
    
    return {recruits, companies, vacancies};
  }

}