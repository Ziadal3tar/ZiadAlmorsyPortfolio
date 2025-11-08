import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  // ✅ FormGroup
  projectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
  });

  // ✅ Dropdown Lists
  technologiesDropdownList: any[] = [];
  typeDropdownList: any[] = [];
  updateDropdownList: any[] = [];

  // ✅ Selected Items
  technologiesSelectedItems: any[] = [];
  typeSelectedItems: any[] = [];
  updateSelectedItems: any[] = [];

  // ✅ Dropdown Settings
  technologiesDropdownSettings: any;
  typeDropdownSettings: any;
  updateDropdownSettings: any;

  // ✅ Project Data
  allProject: any[] = [];
  itemSelected: any = null;
  files: File[] = [];
  name: string = '';
  description: string = '';
  link: string = '';
  btnText: string = 'ADD';
  btnRemove: boolean = false;
  confirmRemove: boolean = false;
  postType: string = '';
  replaceIndex: number | null = null;
  loading: boolean = false;

  constructor(private _common: CommonService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.setupDropdowns();
  }

  // ✅ تحميل جميع المشاريع
  private loadProjects(): void {
    this._common.getAllProjects().subscribe({
      next: (data: any) => {
        this.allProject = data.projects || [];
        this.updateDropdownList = this.allProject.map((project) => ({
          item_id: project._id,
          item_text: project.name,
        }));

        this.updateDropdownSettings = {
          singleSelection: true,
          idField: 'item_id',
          textField: 'item_text',
          itemsShowLimit: 3,
          allowSearchFilter: true,
        };
      },
      error: (err) => console.error('Failed to load projects:', err)
    });
  }

  // ✅ إعداد قوائم الاختيار
  private setupDropdowns(): void {
    this.technologiesDropdownList = [
      { item_id: 1, item_text: 'HTML' },
      { item_id: 2, item_text: 'CSS' },
      { item_id: 3, item_text: 'SCSS' },
      { item_id: 4, item_text: 'JavaScript' },
      { item_id: 5, item_text: 'Bootstrap' },
      { item_id: 6, item_text: 'Angular' },
      { item_id: 7, item_text: 'Node.js' },
      { item_id: 8, item_text: 'Express' },
      { item_id: 9, item_text: 'MongoDB' },
      { item_id: 10, item_text: 'Socket.io' },
    ];

    this.typeDropdownList = [
      { item_id: 1, item_text: 'Frontend' },
      { item_id: 2, item_text: 'Backend' },
      { item_id: 3, item_text: 'Angular' },
      { item_id: 4, item_text: 'Pure JavaScript' },
    ];

    const sharedSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.technologiesDropdownSettings = sharedSettings;
    this.typeDropdownSettings = sharedSettings;
  }

  // ✅ رفع الصور
  upload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    this.files = Array.from(input.files);
    if (this.postType === 'replace' && this.replaceIndex !== null) {
      this.postReplaceImg(this.replaceIndex);
    }
  }

  // ✅ إضافة / تعديل مشروع
  add(data: any): void {
    if (this.projectForm.invalid) return;

    this.loading = true;
    const formData = this.buildFormData(data);

    if (this.updateSelectedItems.length) {
      const id = this.updateSelectedItems[0].item_id;
      this._common.updateProject(id,formData).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.message === 'Project updated successfully') {
            this.resetForm();
            this.loadProjects();
          }
        },
        error: (err) => (this.loading = false)
      });
    } else {
      this._common.addProject(formData).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.message === 'Project added successfully') {
            this.resetForm();
            this.loadProjects();
          }
        },
        error: (err) => (this.loading = false)
      });
    }
  }

  // ✅ بناء بيانات المشروع
  private buildFormData(data: any): FormData {
    const formData = new FormData();
    const types = this.typeSelectedItems.map((t) => t.item_text);
    const technologies = this.technologiesSelectedItems.map((t) => t.item_text);

    this.files.forEach((file) => formData.append('image', file));
    formData.append('types', types.join(','));
    formData.append('technologies', technologies.join(','));
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('link', data.link);

    return formData;
  }

  // ✅ عند اختيار مشروع للتعديل
  onItemSelect(event: any): void {
    this.btnRemove = true;
    this.btnText = 'UPDATE';
    const itemData = this.allProject.find((p) => p._id === event.item_id);
    this.itemSelected = itemData;

    if (!itemData) return;
    this.name = itemData.name;
    this.link = itemData.link;
    this.description = itemData.description;

    this.technologiesSelectedItems = this.technologiesDropdownList.filter((el) =>
      itemData.technologies.includes(el.item_text)
    );
    this.typeSelectedItems = this.typeDropdownList.filter((el) =>
      itemData.types.includes(el.item_text)
    );
  }

  // ✅ عند إزالة المشروع من القائمة
  onDeSelect(event?: any): void {
    this.resetForm();
  }

  // ✅ حذف مشروع كامل
  deleteProject(): void {
    if (!this.updateSelectedItems.length) return;
    this.loading = true;

    const id = this.updateSelectedItems[0].item_id;
    this._common.deleteProject(id).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res.message === 'deleted') {
          this.resetForm();
          this.loadProjects();
        }
      },
      error: (err) => (this.loading = false)
    });
  }

  // ✅ حذف صورة
  deleteImg(i: number): void {
    if (!this.itemSelected) return;
    const Data = {
      imgId: this.itemSelected.publicImagesIds[i],
      projectId: this.itemSelected._id,
      imageIndex: i,
    };
    this._common.deleteImage(Data).subscribe({
      next: () => {
        this.itemSelected.images.splice(i, 1);
        this.itemSelected.publicImagesIds.splice(i, 1);
      },
    });
  }

  // ✅ تبديل صورة
  replaceImg(i: number): void {
    this.postType = 'replace';
    this.replaceIndex = i;
  }

  // ✅ إرسال الصورة الجديدة للاستبدال
  private postReplaceImg(i: number): void {
    if (!this.files.length || !this.itemSelected) return;
    const formData = new FormData();
    formData.append('image', this.files[0]);
    formData.append('imgId', this.itemSelected.publicImagesIds[i]);
    formData.append('projectId', this.itemSelected._id);
    formData.append('imageIndex', i.toString());

    this._common.replaceImage(formData).subscribe({
      next: () => this.loadProjects()
    });
  }

  // ✅ إعادة ضبط النموذج
  private resetForm(): void {
    this.projectForm.reset();
    this.name = '';
    this.description = '';
    this.link = '';
    this.files = [];
    this.btnText = 'ADD';
    this.btnRemove = false;
    this.itemSelected = null;
    this.updateSelectedItems = [];
    this.technologiesSelectedItems = [];
    this.typeSelectedItems = [];
  }
}
