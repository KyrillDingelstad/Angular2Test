import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recruits = [
      { 
        id: 1, 
        name: 'Kyrill Dingelstad',
        description: 'My name is Kyrill Dingelstad. When I am not working I enjoy playing games, watching shows, creating music or developing apps',
        tags: ['javascript', 'angular', 'nodejs', 'front-end', 'html', 'css', 'backend'],
      },
      {
        id: 2, 
        name: 'Therese Møllevik',
        description: 'My name is Therese Møllevik and I really love my boyfriend',
        tags: ['design', 'photoshop', 'illustrator', 'sales'],
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
      {
        id: 3, 
        name: 'Microsoft',
      },
    ];

    let vacancies = [
        {
          id: 1,
          owner: 'TopTemp',
          title: 'We are looking for a hot javascript developer',
          shortDescription: 'We are creating a tool in angular. Are you our new angular developer?',
          description: 'As a recruiting agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['angular', 'javascript', 'nodejs', 'html', 'css'], 
        },

        {
          id: 2,
          owner: 'TopTemp',
          title: 'We are looking for a designer',
          shortDescription: 'We are creating a tool in angular. Are you our new angular developer?',
          description: 'As a recruiting agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['photoshop', 'design'], 
        },

        {
          id: 3,
          owner: 'Google',
          title: 'We are looking for a hot c++ developer',
          shortDescription: 'We are creating a application in c++. Are you our new c++ developer?',
          description: 'As a global agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['visual studio', 'c++'], 
        },

        {
          id: 4,
          owner: 'Google',
          title: 'We are looking for a hot javascript developer',
          shortDescription: 'We are creating a tool in angular. Are you our new angular developer?',
          description: 'As a recruiting agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['angular', 'javascript', 'nodejs', 'html', 'css'], 
        },

        {
          id: 5,
          owner: 'Google',
          title: 'We are looking for a hot javascript developer',
          shortDescription: 'We are creating a tool in angular. Are you our new angular developer?',
          description: 'As a recruiting agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['angular', 'javascript', 'nodejs', 'html', 'css'], 
        },

        {
          id: 6,
          owner: 'Microsoft',
          title: 'We are looking for a hot javascript developer',
          shortDescription: 'We are creating a tool in angular. Are you our new angular developer?',
          description: 'As a recruiting agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['angular', 'javascript', 'nodejs', 'html', 'css'], 
        },

        {
          id: 7,
          owner: 'Microsoft',
          title: 'We are looking for a hot javascript developer',
          shortDescription: 'We are creating a tool in angular. Are you our new angular developer?',
          description: 'As a recruiting agency we always have developer close by. Woring with us can be a huge boost in your personal network.',
          role: 'Here is a short text about what your tasks will be at this company',
          need: 'Here is a short text about what we need',
          tags: ['angular', 'javascript', 'nodejs', 'html', 'css'], 
        },
        
    ]
    
    return {recruits, companies, vacancies};
  }

}