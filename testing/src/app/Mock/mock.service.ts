import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getUsers(): Array<{}> {
    return [
        {
            name: 'user1',
            surname: 'usersurname1'
        }
       
    ];
}
}
