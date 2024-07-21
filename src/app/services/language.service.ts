import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}
  AR: any = {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'مهاراتي',
      projects: 'مشاريعي',
      services: 'خدماتي',
      contact: 'للتواصل',
    },
    header: {
      firstName: 'زياد',
      lastName: 'المرسي',
      myProject: 'مشاريعي',
      contact: 'للتواصل',
      im: 'انا',
      Freelancer: '.مستقل',
      WebDeveloper: '.مطوِّر ويب',
      FrontendDeveloper: '.مطوِّر واجهة أمامية',
      BackendDeveloper: '.مطوِّر خلفية',
      MeanStackDeveloper: 'مطوِّر (MongoDB, Express.js, Angular, Node.js)',
    },
    about: {
      about: 'عني',
      pref: 'أنا زياد المرسي العطار، عمري 22 عامًا. لدي خبرة تصل إلى 6 أشهر وأنا من الأشخاص الذين يتعلمون بسرعة. أنا عازم على اكتساب مزيد من الخبرة وتعلم مهارات جديدة. بدأت في تعلم برمجة الويب في عام 2021 من خلال التعلم الذاتي، وأكملت تعلمي لبرمجة الويب في مركز روت.',
      Freelancer: '.مستقل',
      FrontendDeveloper: '.مطوِّر واجهة أمامية',
      BackendDeveloper: '.مطوِّر خلفية',
      WebDeveloper: '.مطور ويب',
    },
    skills: {
      skills: 'مهاراتي',
      MTL: 'مستواي الفني',
      skill: ' اخرى',
      other: ' مهارات',
      meanStackDeveloper: 'MEANStack Developer.',
    },
    project: {
      projects: 'الرئيسية',
      home: 'مشاريعي',
      demo: 'تجريبي',
      details: 'تفاصيل',
    },
    services: {
      ServicesOffer:'خدمات اقدمها',
      frontend: [
        {
          title: 'تحسين أداء الموقع',
          desc: 'تحسين سرعة التحميل وأداء التطبيقات لضمان تجربة مستخدم سلسة'
         },
       {
        title: 'تصميم وتنفيذ تفاعلات مستخدم متقدمة',
        desc: 'إضافة تفاعلات وحركات جذابة لتحسين تفاعل المستخدم مع التطبيق'
       },
       {
        title: 'دمج المكتبات والأدوات الإضافية',
        desc: 'لإدارة الحالة والأحداث بكفاءة RxJS  استخدم مكتبات وأدوات إضافية مثل '
       },

       {
        title: 'ضمان التوافق مع متصفحات متعددة',
        desc: 'التأكد من أن التطبيق يعمل بشكل سليم على مختلف المتصفحات'
       },
       {
        title: 'تحسين تجربة الجوال',
        desc: 'ضمان توافق وتجاوب جيد لتطبيقات الجوال والأجهزة اللوحية'
       },
       {
        title: 'واجهة متعددة اللغات',
        desc: ' دعم تطبيقات متعددة اللغات لزيادة إمكانية الوصول'
       },
       {
        title: 'دعم وصيانة مستمرة',
        desc: 'تقديم دعم فني وصيانة لضمان استمرارية وأمان التطبيقات'
       },

      ],
      backend:[
        {
          title: 'تطوير وصيانة خوادم الويب',
          desc: 'لدعم تطبيقات الويب  Node.js بناء وصيانة خوادم الويب باستخدام  '
         },
         {
          title: 'إدارة قواعد البيانات',
          desc: 'لتخزين البيانات واسترجاعها بكفاءة MongoDB مع قواعد البيانات مثل Node.js دمج'

         },

       {
        title: 'تنفيذ واجهة برمجة التطبيقات',
        desc: ' تطوير وتنفيذ واجهات برمجة التطبيقات لتسهيل التفاعل بين الواجهة الأمامية والخلفية للتطبيق'
       },

       {
        title: 'الأمن والمصادقة',
        desc: 'تنفيذ التدابير الأمنية مثل تشفير البيانات والتحقق من هوية المستخدم من خلال الهويات والجلسات.'
       },
       {
        title: 'تكنولوجيا الويب في الوقت الحقيقي',
        desc: 'لتحقيق التفاعل في الوقت الفعلي في التطبيقات Socket.io استخدام   '
       },
       {
        title: 'تكامل الخدمات الخارجية',
        desc: 'دمج تطبيقك مع الخدمات الخارجية مثل بوابات الدفع أو خدمات البريد الإلكتروني.'
       },
       {
        title: 'تحسين الأداء',
        desc: 'تحسين أداء التطبيق من خلال تحسين التعليمات البرمجية واستخدام تقنيات التخزين المؤقت.'
       },

      ],
    },
    contact: {
      Hello: 'بك',
      say: 'مرحبا',
      yourName: 'أسمك',
      yourEmail: 'البريد الالكتروني',
      WRM: 'رسالتك',
      send: 'ارسال',
      find: 'تواصل',
      withMe: 'معي عبر',
      firstName: 'زياد',
      lastName: 'المرسي',
      text: 'انا متاح للعمل الحر . تواصل معي في اي وقت من خلال ... ',
    },
  };
  EN: any = {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },
    header: {
      firstName: 'Ziad',
      lastName: 'Almorsy',
      myProject: 'MY PROJECT',
      contact: 'CONTACT',
      im: "i'm",
      Freelancer: 'Freelancer.',
      WebDeveloper: 'Web developer.',
      FrontendDeveloper: 'Frontend developer.',
      BackendDeveloper: 'Backend developer.',
      MeanStackDeveloper: 'MeanStack developer.',
    },
    about: {
      about: 'About',
      me: 'Me',
      pref: "I'm Ziad Almorsy Alattar , 22 years old.I have 6 months of experience, and am a fast learner . Am willing to gain more experience and learn new skills . I started learning web programming in 2021 through self-learning, and I completed my learning of web programming at Route Center.",
      Freelancer: 'Freelancer.',
      FrontendDeveloper: 'Frontend developer.',
      BackendDeveloper: 'Backend developer.',
      WebDeveloper: 'Web developer.',
    },
    skills: {
      skills: 'Skills',
      MTL: 'My technical level',
      other: 'Other',
      skill: 'Skills',
      MeanStackDeveloper: 'MEANStack Developer.',
    },
    project: {
      projects: 'Projects',
      home: 'Home',
      demo: 'demo',
      details: 'details',
    },
    services: {
      ServicesOffer:'Services I offer',

      frontend: [
        {
          title: 'Enhancing Website Performance',
        desc: 'Improve loading speed and application performance to ensure a smooth user experience.'

         },
       {
        title: 'Design and Implement Advanced User Interactions',
        desc: 'Add attractive interactions and animations to enhance user engagement with the application.'

       },
       {
        title: 'Integration of Additional Libraries and Tools',
        desc: 'Utilize additional libraries and tools such as RxJS for efficient state and event management.'
       },
       {
        title: 'Ensuring Compatibility with Multiple Browsers',
        desc: 'Ensure that the application functions properly across various browsers.'
       },
       {
        title: 'Improving Mobile Experience',
        desc: 'Ensure compatibility and responsiveness for mobile applications and tablets.'
       },
       {
        title: 'Developing Multilingual Interface Applications',
        desc: 'Support multilingual applications to enhance accessibility.'
       },
       {
        title: 'Continuous Support and Maintenance',
        desc: 'Provide ongoing technical support and maintenance to ensure the continuous operation and security of the applications.'
       },

      ],
      backend:[
        {
          title: 'Web Server Development and Maintenance',
          desc: 'Building and maintaining web servers using Node.js to support web applications.'
         },
       {
        title: 'Database Management',
        desc: 'Integrate Node.js with databases like MongoDB for easy data retrieval New'
       },
       {
        title: 'API Implementation',
        desc: 'Developing and implementing Application Programming Interfaces (APIs) to facilitate interaction between the front-end and back-end of the'
       },
       {
        title: 'Security and Authentication',
        desc: 'Implementing security measures such as data encryption and user identity verification through identities and sessions.'
       },
       {
        title: 'Real-time Web Technology',
        desc: 'Using libraries like Socket.io to achieve real-time interaction in applications.'
       },
       {
        title: 'Integration of External Services',
        desc: 'Integrating your application with external services such as payment gateways or email services.'
       },
       {
        title: 'Performance Optimization',
        desc: 'Improving application performance through code optimization and using caching techniques.'
       },

      ],
    },
    contact: {
      Hello: 'Hello',
      say: 'say',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      WRM: 'Write your message',
      send: 'Send',
      find: 'FIND',
      withMe: 'WITH ME',
      firstName: 'Ziad',
      lastName: 'Almorsy',
      text: 'I am available for freelance work. Connect with me anytime through ...',
    },
  };

  private language = new BehaviorSubject<any>([]);
  currentLanguageData = this.language.asObservable();

  updateLanguage(data: Boolean) {
    if (data) {
      this.language.next(this.AR);
    } else {
      this.language.next(this.EN);
    }
  }
}
