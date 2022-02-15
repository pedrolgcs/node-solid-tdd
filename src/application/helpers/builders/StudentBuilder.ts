import crypto from 'crypto';

// entities
import { Student } from '@/domain/entities/Student';

class StudentBuilder {
  private student: Student;

  constructor(id = crypto.randomUUID()) {
    this.student = Student.create(
      {
        name: 'name-student',
        email: 'email-student',
      },
      id
    );
  }

  public setName(name: string): this {
    this.student.props.name = name;
    return this;
  }

  public setEmail(email: string): this {
    this.student.props.email = email;
    return this;
  }

  public build(): Student {
    return this.student;
  }
}

export { StudentBuilder };
