import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private data: any = [
    {
      companyName: "Corparation1",
      jobTitle: "Intern",
      workDate: "Nov 7 2019 - Dec 25 2019",
      logo: "./assets/logo1.png",
      work: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat",
        "Adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat  Voluptatum repellendus, incidunt eveniet et sint repellat  Voluptatum repellendus, incidunt eveniet et sint repellat"
      ]
    },
    {
      companyName: "Corparation Name",
      jobTitle: "Web Developer",
      workDate: "Dec 2019 - Dec 25 2021",
      logo: "./assets/logo2.png",
      work: [
        "Adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat",
        "Elit. Voluptatum repellendus, incidunt eveniet et sint repellat  Voluptatum repellendus, incidunt eveniet et sint repellat  Voluptatum repellendus, incidunt eveniet et sint repellat",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat"
      ]
    },
    {
      companyName: "Name Inc",
      jobTitle: "Senior Web Developer",
      workDate: "Jan 2022 - ...",
      logo: "./assets/logo3.png",
      work: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat",
        "Voluptatum repellendus, incidunt eveniet et sint repellat  Voluptatum repellendus, incidunt eveniet et sint repellat",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat",
        "Incidunt eveniet et sint repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus, incidunt eveniet et sint repellat",
      ]
    }
  ]

  private education: any = [
    {
      name: "Vellore Institute of Technology, Bhopal",
      logo: "./assets/e1.png",
      speciality: "B.Tech in Computer Science & Engineering",
      date: "2014-2028"
    },
    {
      name: "D.D. Vispute College",
      logo: "./assets/e2.png",
      speciality: "Intermediate XI-XII",
      date: "2012-2013"
    },
    {
      name: "Canossa Convert Hight School",
      logo: "./assets/e3.png",
      speciality: "Hight School I-X",
      date: "2000-2011"
    }
  ]

  getEducation() {
    return this.education;
  }

  getData() {
    return this.data;
  }
}
