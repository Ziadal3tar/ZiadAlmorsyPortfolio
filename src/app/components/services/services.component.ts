import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  margin = 0;
  width: any;
  services: any = [
    {
      desc: 'Express.js: A web application framework for Node.js that simplifies the process of building server-side applications. Express.js helps in creating RESTful APIs and handling routing in MEAN applications.',
      icon: 'fa-solid fa-brush',
    },
    {
      desc: 'Angular (formerly known as AngularJS): A front-end framework for building dynamic and interactive web interfaces. Angular allows developers to create single-page applications (SPAs) with a rich user experience.',
      icon: 'fa-brands fa-angular',
    },
    {
      desc: 'Node.js: A runtime environment that allows developers to run JavaScript on the server side. Node.js is used in MEAN stack applications to handle server-side logic and interact with the database.',
      icon: 'fa-brands fa-node',
    },
    {
      desc: 'Web Application Development: They build web applications from scratch or work on existing projects using the MEAN stack.',
      icon: 'fa-solid fa-arrow-down-a-z',
    },
    {
      desc: 'API Development: Creating RESTful APIs using Express.js to enable communication between the front-end (Angular) and back-end (Node.js and MongoDB) components of the application.',
      icon: 'fa-solid fa-link',
    },
    {
      desc: 'Database Design and Management: Setting up and managing MongoDB databases, including designing data schemas, optimizing database performance, and ensuring data security.',
      icon: 'fa-solid fa-database',
    },
    {
      desc: 'Front-end Development: Developing user interfaces using Angular to create responsive and interactive web pages.',
      icon: '',
    },
    {
      desc: 'Server-side Development: Implementing server-side logic using Node.js, including handling user authentication, data processing, and application business logic.',
      icon: 'fa-solid fa-server',
    },
    {
      desc: 'Testing and Quality Assurance: Conducting testing, including unit testing, integration testing, and end-to-end testing, to ensure the reliability and functionality of the application.',
      icon: 'fa-solid fa-vial-circle-check',
    },
    {
      desc: 'Performance Optimization: Identifying and addressing performance bottlenecks in the application, both on the server and client sides.',
      icon: '',
    },
    {
      desc: 'Scalability: Planning for and implementing strategies to scale the application as user traffic grows.',
      icon: '',
    },
    {
      desc: 'MEAN stack developers are skilled in working with these specific technologies and are well-equipped to create modern web applications that are both functional and user-friendly. Their services are sought after for businesses and organizations looking to build or enhance web applications.',
      icon: '',
    },
  ];
  ngOnInit(): void {
    if (window.innerWidth >= 767 && window.innerWidth <= 1023) {
      this.width = 50;
    } else if (window.innerWidth <= 767) {
      this.width = 100;
    }else if(window.innerWidth >=  1024){
      this.width = 33.333;
    }
  }

  Margin(i: any) {
    this.margin = i;
    let div: any = document.getElementById('slider');
    div.style.marginLeft = -this.width * this.margin + '%';
  }
}