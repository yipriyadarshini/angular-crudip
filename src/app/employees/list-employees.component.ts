import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "Mark",
      gender: "Male",
      contactPreference: "Email",
      email: "mark@pragimtech.com",
      dateOfBirth: new Date("10/25/1988"),
      department: "IT",
      isActive: true,
      photoPath: "https://2.bp.blogspot.com/-xG8wtGFhwd4/WjFWoJpjSPI/AAAAAAAAns0/-UCndX6XnlEsTYS-LeZyXa2_DsgQQlkQgCLcBGAs/s400/mark.png"
    },
    {
      id: 2,
      name: "Mary",
      gender: "Female",
      contactPreference: "Phone",
      phoneNumber: 2345978640,
      dateOfBirth: new Date("11/20/1979"),
      department: "HR",
      isActive: true,
      photoPath: "https://2.bp.blogspot.com/-VWh7J1pgrGo/WjFW-lYK-aI/AAAAAAAAns4/cjh5i2X7vhMhboHwirOlp-QLD3lDOFXXACLcBGAs/s400/mary.png"
    },
    {
      id: 3,
      name: "John",
      gender: "Male",
      contactPreference: "Phone",
      phoneNumber: 5432978640,
      dateOfBirth: new Date("3/25/1976"),
      department: "IT",
      isActive: false,
      photoPath: "https://2.bp.blogspot.com/-L8hccI1RetU/WjFXFp717LI/AAAAAAAAns8/zmoWhYWycR0SNT_u7Fxl5e73hEYsTMVIgCLcBGAs/s400/john.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
