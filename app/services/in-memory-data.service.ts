import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recruits = [
      { 
        id: 1, 
        name: 'Kyrill'
        tags: ['javascript', 'angular'],
      },
      {
        id: 2, 
        name: 'Therese'
        tags: ['design', 'photoshop'],
      },
    ];

    let companies = [
      { 
        id: 1, 
        name: 'TopTemp',
      },
      {
        id: 2, 
        name: 'Google',
      },
    ];

    let vacancies = [
        {
          id: 1,
          owner: 'google',
          jobtitle: 'developer',
          shortDescription: 'bloobblieb'
          tags: ['javascript', 'ploep']
        },
        {
          id: 2,
          owner: 'Google',
          jobtitle: 'developer',
          shortDescription: 'blablabla'
          tags: ['design', 'ploep']
        },
        {
          id: 3,
          owner: 'Google',
          jobtitle: 'developer',
          shortDescription: 'blablabla'
        },
        {
          id: 4,
          owner: 'TopTemp',
          jobtitle: 'developer',
          shortDescription: 'blablabla'
        },
        {
          id: 5,
          owner: 'TopTemp',
          jobtitle: 'developer',
          shortDescription: 'blablabla'
        },
        {
          id: 6,
          owner: 'Google',
          jobtitle: 'developer',
          shortDescription: 'blablabla'
        },
        {
          id: 7,
          owner: 'Google',
          jobtitle: 'developer',
          shortDescription: 'blablabla'
        },
    ]
    
    return {recruits, companies, vacancies};
  }

}