// entities
import { Student } from '@/domain/entities/Student';

// repository
import { StudentsRepository } from '@/application/repositories/StudentsRepository';

class StudentsRepositoryInMemory implements StudentsRepository {
  public students: Student[] = [];

  findById(id: string): Promise<Student | null> {
    return new Promise((resolve) => {
      const student = this.students.find((student) => student.id === id);

      if (!student) {
        return null;
      }

      resolve(student);
    });
  }
}

export { StudentsRepositoryInMemory };
