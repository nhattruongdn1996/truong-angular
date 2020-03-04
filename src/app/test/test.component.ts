import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  newName = '';
  newAge = '';
  nowStatus = 'XemTatCa';

  arrPerson = [
    { id: 1, name: 'Hieu', age: '18', gender: 'Nam', status: true },
    { id: 2, name: 'Truong', age: '19', gender: 'Nam', status: true },
    { id: 3, name: 'Diep', age: '17', gender: 'Nu', status: false },
    { id: 4, name: 'Oanh', age: '18', gender: 'Nu', status: false },
    { id: 5, name: 'Phuc', age: '19', gender: 'Nam', status: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addPerson() {
    this.arrPerson.unshift({
      id: this.arrPerson.length + 1,
      name: this.newName,
      age: this.newAge,
      gender: 'Nu',
      status: false
    });
    this.newName = '';
    this.newAge = '';
  }
  deletePerson(id: Number) {
    const index = this.arrPerson.findIndex(person => person.id === id);
    this.arrPerson.splice(index, 1);
  }
  getShow(status: boolean){
    const dkShowtatca = this.nowStatus === 'XemTatCa'
    const dkShownam = this.nowStatus === 'XemNam'&& status;
    const dkShownu = this.nowStatus === 'XemNu' && !status;
    return dkShowtatca || dkShownam || dkShownu
  }

}
