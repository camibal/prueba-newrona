import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataUsers: any;
  userForm: any = {};

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      ocupacion: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(3)]],
      terminos: ['', [Validators.required]],
      subscripcion: ['']
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    await this.usersService.getUser().subscribe(res => {
      this.dataUsers = res;
    })
  }

  saveUser() {
    if (this.userForm.valid) {
      this.usersService.saveUser(this.userForm.value).subscribe(() => {
        alert('Usuario almacenado exitosamente');
        this.getUsers();
        this.userForm.reset();
      }, error => {
        alert(JSON.stringify(error));
      });
    } else {
      alert('Todos los campos deben estar llenos corectamente');
    }


  }
}
