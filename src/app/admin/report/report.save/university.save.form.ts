import {UniversitySaveDto} from "../../../domain/university/dto/UniversitySaveDto";
import {FormControl, Validators} from "@angular/forms";
import {StudentNumber} from "../../../domain/university/StudentNumber";
import {AcademicStaffTraining} from "../../../domain/university/AcademicStaffTraining";
import {ProgramNumber} from "../../../domain/university/ProgramNumber";



export class UniversitySaveForm {
  version = new FormControl<string | null>(null, [Validators.required]);
  name = new FormControl<string | null>(null, [Validators.required]);
  address = new FormControl<string | null>(null, [Validators.required]);
  yearFounded = new FormControl<number | null>(null, [Validators.required]);
  rectorName = new FormControl<string | null>(null, [Validators.required]);
  numOfEducationalUnits = new FormControl<number | null>(null, [Validators.required]);
  numOfFirstYearStudents = new FormControl<number | null>(null, [Validators.required]);
  numOfGraduates = new FormControl<number | null>(null, [Validators.required]);
  totalAreaOfEducationalFund = new FormControl<number | null>(null, [Validators.required]);

  studentNumber = new StudentNumberSaveForm();
  programNumber = new ProgramNumberSaveForm()
  academicStaffTraining = new AcademicStaffTrainingSaveForm()

  getDto(): UniversitySaveDto {
    return {
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
    return this.version.valid &&
      this.name.valid && this.rectorName.valid
    // (
    //   this.version.valid &&
    //   this.name.valid &&
    //   this.address.valid &&
    //   this.yearFounded.valid &&
    //   this.rectorName.valid &&
    //   this.numOfEducationalUnits.valid &&
    //   this.studentNumber.valid() &&
    //   this.programNumber.valid() &&
    //   this.academicStaffTraining.valid() &&
    //   this.numOfFirstYearStudents.valid &&
    //   this.numOfGraduates.valid &&
    //   this.totalAreaOfEducationalFund.valid
    // );
  }
}

export class StudentNumberSaveForm {
  bachelor = new FormControl<number | null>(null, [Validators.required]);
  master = new FormControl<number | null>(null, [Validators.required]);
  specialty = new FormControl<number | null>(null, [Validators.required]);
  spo = new FormControl<number | null>(null, [Validators.required]);
  postgraduate = new FormControl<number | null>(null, [Validators.required]);
  doctorate = new FormControl<number | null>(null, [Validators.required]);
  seeker = new FormControl<number | null>(null, [Validators.required]);
  phd = new FormControl<number | null>(null, [Validators.required]);

  getDto(): StudentNumber {
    return {
      id: null,
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
    return true
    // (
    //   this.bachelor.valid &&
    //   this.master.valid &&
    //   this.specialty.valid &&
    //   this.spo.valid &&
    //   this.postgraduate.valid &&
    //   this.doctorate.valid &&
    //   this.seeker.valid &&
    //   this.phd.valid
    // );
  }
}

export class ProgramNumberSaveForm {
  bachelor = new FormControl<number | null>(null, [Validators.required]);
  master = new FormControl<number | null>(null, [Validators.required]);
  specialty = new FormControl<number | null>(null, [Validators.required]);
  spo = new FormControl<number | null>(null, [Validators.required]);
  dpo = new FormControl<number | null>(null, [Validators.required]);

  getDto(): ProgramNumber {
    return {
      id: null,
      bachelor: this.bachelor.value || 0,
      master: this.master.value || 0,
      specialty: this.specialty.value || 0,
      spo: this.spo.value || 0,
      dpo: this.dpo.value || 0,
    };
  }

  valid(): boolean {
    return true
    // (
    //   this.bachelor.valid &&
    //   this.master.valid &&
    //   this.specialty.valid &&
    //   this.spo.valid &&
    //   this.dpo.valid
    // );
  }
}

export class AcademicStaffTrainingSaveForm {

  postgraduate = new FormControl<number | null>(null, [Validators.required]);
  doctoral = new FormControl<number | null>(null, [Validators.required]);
  phd = new FormControl<number | null>(null, [Validators.required]);

  getDto(): AcademicStaffTraining {
    return {
      id: null,
      postgraduate: this.postgraduate.value || 0,
      doctoral: this.doctoral.value || 0,
      phd: this.phd.value || 0,
    };
  }

  valid(): boolean {
    return true //this.postgraduate.valid && this.doctoral.valid && this.phd.valid;
  }
}


