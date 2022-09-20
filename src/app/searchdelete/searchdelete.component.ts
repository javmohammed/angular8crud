import { Component, OnInit } from '@angular/core';
import { UserregistrationService } from '../userregistration.service';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './searchdelete.component.html',
  styleUrls: ['./searchdelete.component.css']
})
export class SearchdeleteComponent implements OnInit {

  users:any;
  email:string;
  
  constructor(private service:UserregistrationService) { }


public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data)=>this.users=data);
}

public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data)=>this.users=data);
 }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
