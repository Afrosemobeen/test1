import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular basic pipes';
  userList: any =[];
  constructor (private http : HttpClient){}
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data)=>{
      console.log(data);
      this.userList = data;
    }, (err)=>{console.log(err);
    })
  }
  deleteUser(uid : any){
    this.userList = this.userList.filter((user: any)=>user.id != uid)
  }

}
