import { Injectable } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Injectable({
    providedIn: 'root',
})
/**
 * employee service
 */
export class EmployeeDataService {
    getEmployeeList(): Employee[] {
        return [
            { Id: 1, Name: 'Vijay Mali', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 25 },
            { Id: 2, Name: 'Pooja jain', Department: 'Software Developer', DepartmentId: 1, Address: 'Bhopal', Age: 24 },
            { Id: 3, Name: 'Jagdish Patidar', Department: 'Front-End Developer', DepartmentId: 4, Address: 'Indore', Age: 25 },
            { Id: 4, Name: 'Riya Pal', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 22 },
            { Id: 5, Name: 'Rajat Saxena', Department: 'Software Developer', DepartmentId: 2, Address: 'Indore', Age: 25 },
            { Id: 6, Name: 'Ravi Kashyap', Department: 'Software Developer', DepartmentId: 2, Address: 'Bhopal', Age: 28 },
            { Id: 7, Name: 'Rameshwar Patidar', Department: 'Front-End Developer', DepartmentId: 3, Address: 'Indore', Age: 26 },
            { Id: 8, Name: 'Jyoti Bilthare', Department: 'HR', DepartmentId: 1, Address: 'Sagar', Age: 25 },
            { Id: 9, Name: 'shubham chouhan', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 27 },
            { Id: 10, Name: 'Payal Mehta', Department: 'BDE', DepartmentId: 3, Address: 'Indore', Age: 25 },
            { Id: 11, Name: 'Ankit Rajpoot', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 35 },
            { Id: 12, Name: 'Rajat thakur', Department: 'Software Developer', DepartmentId: 1, Address: 'Bhopal', Age: 26 },
            { Id: 13, Name: 'Anurag Gupta', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 25 },
            { Id: 14, Name: 'Aman Mandhaniya', Department: 'Software Developer', DepartmentId: 4, Address: 'Indore', Age: 25 },
            { Id: 15, Name: 'Krishnu Choudhary', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 30 },
            { Id: 16, Name: 'Aarti Ranj', Department: 'Software Developer', DepartmentId: 2, Address: 'Indore', Age: 25 },
            { Id: 17, Name: 'Kalpana Tomar', Department: 'HR', DepartmentId: 2, Address: 'Indore', Age: 28 },
            { Id: 18, Name: 'Anas Khan', Department: 'BDE', DepartmentId: 3, Address: 'Indore', Age: 26 },
            { Id: 19, Name: 'Arpit Joshi', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 25 },
            { Id: 20, Name: 'Subhani Singh', Department: 'Front-End Developer', DepartmentId: 1, Address: 'Patna', Age: 27 },
            { Id: 21, Name: 'Gyanendra Singh', Department: 'Software Developer', DepartmentId: 3, Address: 'Indore', Age: 25 },
            { Id: 22, Name: 'Hemant Durga Prasad', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 35 },
            { Id: 23, Name: 'Manish Singh Chouhan', Department: 'Software Developer', DepartmentId: 1, Address: 'Indore', Age: 26 },
        ];
    }
}