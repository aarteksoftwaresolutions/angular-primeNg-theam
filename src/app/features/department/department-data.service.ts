import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DepartmentDataService {

    departments: any[];

    constructor() {
        this.departments = [
            { Id: 1, Name: "Accounts and Finance", Description: "Accounts and Finance" },
            { Id: 2, Name: "HR", Description: "Human Resource" },
            { Id: 3, Name: "BDE", Description: "Sales and marketing (Business development Executive)" },
            { Id: 4, Name: "Infrastructures", Description: "Infrastructures" },
            { Id: 5, Name: "Research and development", Description: "Research and development" },
            { Id: 6, Name: "Learning and development", Description: "Learning and development"},
            { Id: 7, Name: "IT services", Description: "IT services" },
            { Id: 8, Name: "Product development", Description: "Product development" },
            { Id: 9, Name: "Admin department", Description: "Admin department" },
            { Id: 10, Name: "Security and transport", Description: "Security and transport" }];
    }


    getAllDepartments() {
        return this.departments;
    }

    getDepartmentById(id: number) {
        var data;
        this.departments.forEach(element => {
            if (element.Id === id) {
                data = element;
            }
        });
        return data;
    }

    getDepartmentByName(name: string) {        
        var data;
        this.departments.forEach(element => {
            if (element.Name === name) {
                data = element;
            }
        });
        return data;
    }
}