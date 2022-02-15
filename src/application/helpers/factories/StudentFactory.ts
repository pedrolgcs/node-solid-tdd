// entities
import { Student } from '@/domain/entities/Student';

// builders
import { StudentBuilder } from '@/application/helpers/builders/StudentBuilder';

type StudentFields = {
  id?: string;
  name: string;
  email: string;
};

class StudentFactory {
  static defaultStudent(): Student {
    return new StudentBuilder('user-id')
      .setName('user')
      .setEmail('user@gmail.com')
      .build();
  }

  static createStudentFromFields({ id, name, email }: StudentFields): Student {
    return new StudentBuilder(id).setName(name).setEmail(email).build();
  }

  static createRandomStudents(count: number): Student[] {
    const students = [];

    for (let i = 0; i < count; i++) {
      students.push(
        new StudentBuilder().setName(`name ${i}`).setEmail(`email ${i}`).build()
      );
    }

    return students;
  }
}

export { StudentFactory };
