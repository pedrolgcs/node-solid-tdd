// entities
import { Student } from '@/domain/entities/student';

interface StudentsRepository {
  findById(id: string): Promise<Student | null>;
}

export { StudentsRepository };
