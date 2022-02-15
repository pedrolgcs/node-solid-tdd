// entities
import { Student } from '@/domain/entities/Student';

interface StudentsRepository {
  findById(id: string): Promise<Student | null>;
}

export { StudentsRepository };
