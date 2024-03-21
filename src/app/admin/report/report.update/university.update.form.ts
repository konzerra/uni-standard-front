import {FormControl, Validators} from "@angular/forms";
import {StudentNumber} from "../../../domain/university/StudentNumber";
import {AcademicStaffTraining} from "../../../domain/university/AcademicStaffTraining";
import {ProgramNumber} from "../../../domain/university/ProgramNumber";
import {UniversityUpdateDto} from "../../../domain/university/dto/UniversityUpdateDto";
import {University} from "../../../domain/university/University";



export class UniversityUpdateForm {
  id: number | null = null
  version = new FormControl<string | null>(null, [Validators.required]);
  name = new FormControl<string | null>(null, [Validators.required]);
  address = new FormControl<string | null>(null, [Validators.required]);
  yearFounded = new FormControl<number | null>(null, [Validators.required]);
  rectorName = new FormControl<string | null>(null, [Validators.required]);
  numOfEducationalUnits = new FormControl<number | null>(null, [Validators.required]);
  numOfFirstYearStudents = new FormControl<number | null>(null, [Validators.required]);
  numOfGraduates = new FormControl<number | null>(null, [Validators.required]);
  totalAreaOfEducationalFund = new FormControl<number | null>(null, [Validators.required]);

  studentNumber = new StudentNumberUpdateForm();
  programNumber = new ProgramNumberUpdateForm()
  academicStaffTraining = new AcademicStaffTrainingUpdateForm()

  setData(uni: University): void {
    this.id = uni.id;
    this.version.setValue(uni.version);
    this.name.setValue(uni.name);
    this.address.setValue(uni.address);
    this.yearFounded.setValue(uni.yearFounded);
    this.rectorName.setValue(uni.rectorName);
    this.numOfEducationalUnits.setValue(uni.numOfEducationalUnits);
    this.numOfFirstYearStudents.setValue(uni.numOfFirstYearStudents);
    this.numOfGraduates.setValue(uni.numOfGraduates);
    this.totalAreaOfEducationalFund.setValue(uni.totalAreaOfEducationalFund);

    // Set data for nested forms
    this.studentNumber.setData(uni.studentNumber);
    this.programNumber.setData(uni.programNumber);
    this.academicStaffTraining.setData(uni.academicStaffTraining);
  }

  getDto(): UniversityUpdateDto {
    return {
      id: this.id || 0,
      version: this.version.value || '',
      name: this.name.value || '',
      address: this.address.value || '',
      yearFounded: this.yearFounded.value || 0,
      rectorName: this.rectorName.value || '',
      numOfEducationalUnits: this.numOfEducationalUnits.value || 0,
      studentNumber: this.studentNumber.getDto(),
      programNumber: this.programNumber.getDto(),
      academicStaffTraining: this.academicStaffTraining.getDto(),
      numOfFirstYearStudents: this.numOfFirstYearStudents.value || 0,
      numOfGraduates: this.numOfGraduates.value || 0,
      totalAreaOfEducationalFund: this.totalAreaOfEducationalFund.value || 0,
    };
  }

  valid(): boolean {
    return (
      this.id != null &&
      this.version.valid &&
      this.name.valid &&
      this.rectorName.valid
      // &&
      // this.address.valid &&
      // this.yearFounded.valid &&
      // this.numOfEducationalUnits.valid &&
      // this.studentNumber.valid() &&
      // this.programNumber.valid() &&
      // this.academicStaffTraining.valid() &&
      // this.numOfFirstYearStudents.valid &&
      // this.numOfGraduates.valid &&
      // this.totalAreaOfEducationalFund.valid
    );
  }
}

export class StudentNumberUpdateForm {
  id: number | null = null
  bachelor = new FormControl<number | null>(null, [Validators.required]);
  master = new FormControl<number | null>(null, [Validators.required]);
  specialty = new FormControl<number | null>(null, [Validators.required]);
  spo = new FormControl<number | null>(null, [Validators.required]);
  postgraduate = new FormControl<number | null>(null, [Validators.required]);
  doctorate = new FormControl<number | null>(null, [Validators.required]);
  seeker = new FormControl<number | null>(null, [Validators.required]);
  phd = new FormControl<number | null>(null, [Validators.required]);


  setData(data: StudentNumber): void {
    this.id = data.id;
    this.bachelor.setValue(data.bachelor);
    this.master.setValue(data.master);
    this.specialty.setValue(data.specialty);
    this.spo.setValue(data.spo);
    this.postgraduate.setValue(data.postgraduate);
    this.doctorate.setValue(data.doctorate);
    this.seeker.setValue(data.seeker);
    this.phd.setValue(data.phd);
  }

  getDto(): StudentNumber {
    return {
      id: this.id,
      bachelor: this.bachelor.value || 0,
      master: this.master.value || 0,
      specialty: this.specialty.value || 0,
      spo: this.spo.value || 0,
      postgraduate: this.postgraduate.value || 0,
      doctorate: this.doctorate.value || 0,
      seeker: this.seeker.value || 0,
      phd: this.phd.value || 0,
    };
  }

  valid(): boolean {
    return (
      this.id != null
      // &&
      // this.bachelor.valid &&
      // this.master.valid &&
      // this.specialty.valid &&
      // this.spo.valid &&
      // this.postgraduate.valid &&
      // this.doctorate.valid &&
      // this.seeker.valid &&
      // this.phd.valid
    );
  }
}

export class ProgramNumberUpdateForm {
  id: number | null = null
  bachelor = new FormControl<number | null>(null, [Validators.required]);
  master = new FormControl<number | null>(null, [Validators.required]);
  specialty = new FormControl<number | null>(null, [Validators.required]);
  spo = new FormControl<number | null>(null, [Validators.required]);
  dpo = new FormControl<number | null>(null, [Validators.required]);

  setData(data: ProgramNumber): void {
    this.id = data.id;
    this.bachelor.setValue(data.bachelor);
    this.master.setValue(data.master);
    this.specialty.setValue(data.specialty);
    this.spo.setValue(data.spo);
    this.dpo.setValue(data.dpo);
  }

  getDto(): ProgramNumber {
    return {
      id: this.id,
      bachelor: this.bachelor.value || 0,
      master: this.master.value || 0,
      specialty: this.specialty.value || 0,
      spo: this.spo.value || 0,
      dpo: this.dpo.value || 0,
    };
  }

  valid(): boolean {
    return (
      this.id != null
      // &&
      // this.bachelor.valid &&
      // this.master.valid &&
      // this.specialty.valid &&
      // this.spo.valid &&
      // this.dpo.valid
    );
  }
}

export class AcademicStaffTrainingUpdateForm {

  id: number | null = null
  postgraduate = new FormControl<number | null>(null, [Validators.required]);
  doctoral = new FormControl<number | null>(null, [Validators.required]);
  phd = new FormControl<number | null>(null, [Validators.required]);


  setData(data: AcademicStaffTraining): void {
    this.id = data.id;
    this.postgraduate.setValue(data.postgraduate);
    this.doctoral.setValue(data.doctoral);
    this.phd.setValue(data.phd);
  }
  getDto(): AcademicStaffTraining {
    return {
      id: this.id,
      postgraduate: this.postgraduate.value || 0,
      doctoral: this.doctoral.value || 0,
      phd: this.phd.value || 0,
    };
  }

  valid(): boolean {
    return this.id != null
      // &&
      // this.postgraduate.valid &&
      // this.doctoral.valid && this.phd.valid;
  }
}


