import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent {
  projectForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    link: new FormControl(null, [Validators.required]),
  });

  technologiesDropdownList: any = [];
  technologiesSelectedItems: any = [];
  technologiesDropdownSettings: any = {};

  typeDropdownList: any = [];
  typeSelectedItems: any = [];
  typeDropdownSettings: any = {};

  updateDropdownList: any = [];
  updateSelectedItems: any = [];
  updateDropdownSettings: any = {};

  name: any;
  description: any;
  link: any;
  allProject: any[] = [];
  files: any[] = [];
  loading: Boolean = false;
  btnText: any = 'ADD';
  confirmRemove:Boolean = false
  btnRemove:Boolean = false
  constructor(private _common: CommonService) {}

  ngOnInit(): void {
    this._common.getAllProjects().subscribe((data: any) => {
      this.allProject = data.project;
      let arr = [];
      for (let i = 0; i < data.project.length; i++) {
        const element = data.project[i];

        let opj = { item_id: element._id, item_text: element.name };
        arr.push(opj);
      }
      this.updateDropdownList = arr;
      this.updateDropdownSettings = {
        singleSelection: true,
        idField: 'item_id',
        textField: 'item_text',

        itemsShowLimit: 3,
        allowSearchFilter: true,
      };
    });

    this.technologiesDropdownList = [
      { item_id: 1, item_text: 'html' },
      { item_id: 2, item_text: 'css' },
      { item_id: 3, item_text: 'scss' },
      { item_id: 4, item_text: 'javascript' },
      { item_id: 5, item_text: 'bootstrap' },
      { item_id: 6, item_text: 'angular' },
      { item_id: 7, item_text: 'node.js' },
      { item_id: 8, item_text: 'express' },
      { item_id: 9, item_text: 'mongoDB' },
      { item_id: 10, item_text: 'socket.io' },
    ];

    this.typeDropdownList = [
      { item_id: 1, item_text: 'frontend' },
      { item_id: 2, item_text: 'backend' },
      { item_id: 3, item_text: 'angular' },
      { item_id: 4, item_text: 'pure javascript' },
    ];

    this.technologiesDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.typeDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  upload(event: any) {
    const { files } = event.target;
    this.files = files;
    const imgs: any[] = [];
    for (let i = 0; i < this.files.length; i++) {
      const element = this.files[i];

      imgs.push(element);
    }

    this.files = imgs;
  }
  add(data: any) {
    this.loading = !this.loading;

    let formData = new FormData();

    let types: any = [];

    for (let i = 0; i < this.typeSelectedItems.length; i++) {
      const element = this.typeSelectedItems[i];
      types.push(element.item_text);
    }

    let technologies: any = [];
    for (let i = 0; i < this.technologiesSelectedItems.length; i++) {
      const element = this.technologiesSelectedItems[i];
      technologies.push(element.item_text);
    }
    for (let i = 0; i < this.files.length; i++) {
      const element = this.files[i];
      formData.append('image', element);
    }
    formData.append('types', types);
    formData.append('technologies', technologies);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('link', data.link);
    if (this.updateSelectedItems.length != 0) {
let id = this.updateSelectedItems[0].item_id
      this._common.updateProject(formData,id).subscribe((data: any) => {
  

        if (data.message == 'updated') {
          this.loading = !this.loading;
        location.reload();

        }
      });

    } else {
      this._common.addProject(formData).subscribe((data: any) => {

        if (data.message == 'added successfully') {
          this.loading = !this.loading;
        location.reload();

        }
      });
    }
  }
  onItemSelect(data: any) {
    this.btnRemove =true
    this.btnText = 'UPDATE';
    this.technologiesSelectedItems = [];
    this.typeSelectedItems = [];
    let itemData: any = this.allProject.filter(
      (item: any) => item._id == data.item_id
    )[0];
    this.name = itemData.name;
    this.link = itemData.link;
    this.description = itemData.description;
    for (let i = 0; i < itemData?.technologies?.length; i++) {
      const element = itemData?.technologies[i];
      for (let x = 0; x < this.technologiesDropdownList.length; x++) {
        const elementX = this.technologiesDropdownList[x];
        if (elementX.item_text == element) {
          this.technologiesSelectedItems.push(elementX);
        }
      }
    }
    for (let i = 0; i < itemData?.types?.length; i++) {
      const element = itemData?.types[i];
      for (let x = 0; x < this.typeDropdownList.length; x++) {
        const elementX = this.typeDropdownList[x];
        if (elementX.item_text == element) {
          this.typeSelectedItems.push(elementX);
        }
      }
    }
  }
  onDeSelect(event: any) {
    this.btnRemove = false

    this.typeSelectedItems = [];
    this.technologiesSelectedItems = [];
    this.files = [];
    this.name = '';
    this.description = '';
    this.link = '';
    this.btnText = 'ADD';
  }
  deleteProject(){
    this.loading = !this.loading;
    let id = this.updateSelectedItems[0].item_id
    console.log(id);

    this._common.deleteProject(id).subscribe((data: any) => {
      if (data.message == 'deleted') {
        this.loading = !this.loading;
        location.reload();
      }
    });
  }
}
