import { Component } from '@angular/core';
import { IUser } from './user.interface';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: Array<IUser> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<Array<IUser>>("http://localhost:3000/users").subscribe(
      users => this.users = users,
      err => console.log(err)
    );
  }

  deleteUser(id: number, index: number) {
    this.http.delete<any>(`http://localhost:3000/users/${id}`).subscribe(
      _ => this.users.splice(index, 1),
      err => console.log(err)
    );
  }
}
