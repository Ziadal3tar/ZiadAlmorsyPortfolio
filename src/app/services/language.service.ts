import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  AR:any={
    nav:{
      home:'الرئيسية',
      about:'عني',
      skills:'مهاراتي',
      projects:'مشاريعي',
      services:'خدماتي',
      contact:'للتواصل',
    }
    ,
    header:{
      firstName:'زياد',
      lastName:'المرسي',
      myProject:'مشاريعي',
      contact:'للتواصل',
      im:"انا",
      Freelancer:'.مستقل',
      WebDeveloper:'.مطوِّر ويب',
      FrontendDeveloper:'.مطوِّر واجهة أمامية',
      BackendDeveloper:'.مطوِّر خلفية',
      MeanStackDeveloper:'مطوِّر (MongoDB, Express.js, Angular, Node.js)',
    },
    about:{
      about:'عني',
      pref:"أنا زياد المرسي العطار، عمري 22 عامًا. لدي خبرة تصل إلى 6 أشهر وأنا من الأشخاص الذين يتعلمون بسرعة. أنا عازم على اكتساب مزيد من الخبرة وتعلم مهارات جديدة. بدأت في تعلم برمجة الويب في عام 2021 من خلال التعلم الذاتي، وأكملت تعلمي لبرمجة الويب في مركز روت.",
      Freelancer:'.مستقل',
      FrontendDeveloper:'.مطوِّر واجهة أمامية',
      BackendDeveloper:'.مطوِّر خلفية',
      WebDeveloper:'.مطور ويب',

    }
    ,
    skills:{
      skills:'مهاراتي',
      MTL:'مستواي الفني',
      skill:" اخرى",
      other:" مهارات",
      meanStackDeveloper:'MEANStack Developer.',
    }
    ,
    project:{
      projects:'الرئيسية',
      home:'مشاريعي',
      demo:'تجريبي',
      details:"مهارات اخرى",
    }
    ,
    services:{
      services:'الرئيسية',
      home:'خدماتي',

    },
    contact:{
      Hello:'مرحبا',
      yourName:'أسمك',
      yourEmail:'البريد الالكتروني',
      WRM:'رسالتك',
      send:'ارسال',
      find:'تواصل',
      withMe:'معي عبر',
      firstName:'زياد',
      lastName:'المرسي',
      text:'انا متاح للعمل المستقل في اي وقت. تواصل معي من خلال ... '
    }
  }
  EN:any={
    nav:{
      home:'Home',
      about:'About',
      skills:'Skills',
      projects:'Projects',
      services:'Services',
      contact:'Contact',
    }
    ,
    header:{
      firstName:'Ziad',
      lastName:'Almorsy',
      myProject:'MY PROJECT',
      contact:'CONTACT',
      im:"i'm",
      Freelancer:'Freelancer.',
      WebDeveloper:'Web developer.',
      FrontendDeveloper:'Frontend developer.',
      BackendDeveloper:'Backend developer.',
      MeanStackDeveloper:'MeanStack developer.',
    }
    ,
    about:{
      about:'About',
      me:'Me',
      pref:"I'm Ziad Almorsy Alattar , 22 years old.I have 6 months of experience, and am a fast learner . Am willing to gain more experience and learn new skills . I started learning web programming in 2021 through self-learning, and I completed my learning of web programming at Route Center.",
      Freelancer:'Freelancer.',
      FrontendDeveloper:'Frontend developer.',
      BackendDeveloper:'Backend developer.',
      WebDeveloper:'Web developer.',

    }
    ,
    skills:{
      skills:'Skills',
      MTL:'My technical level',
      other:"Other",
      skill:"Skills",
      MeanStackDeveloper:'MEANStack Developer.',
    }
    ,
    project:{
      projects:'Projects',
      home:'Home',
      demo:'demo',
      details:"details",
    }
    ,
    services:{
      services:'Services',
      home:'Home',

    }
    ,
    contact:{
      Hello:'Hello',
      say:'say',
      yourName:'Your Name',
      yourEmail:'Your Email',
      WRM:'Write your message',
      send:'Send',
      find:'FIND',
      withMe:'WITH ME',
      firstName:'Ziad',
      lastName:'Almorsy',
      text:'I am available for freelance work. Connect with me via and call in to my account'
    }
  }



  private language = new BehaviorSubject<any>([]);
  currentLanguageData = this.language.asObservable();

updateLanguage(data:Boolean){
  if (data) {

    this.language.next(this.AR);
  }else{
    this.language.next(this.EN);

  }
}
}
