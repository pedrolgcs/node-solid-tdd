// core
import { Entity } from '@/core/domain';

type StudentProps = {
  name: string;
  email: string;
  createdAt?: Date;
};

class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  public static create(props: StudentProps, id?: string): Student {
    return new Student(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }
}

export { Student };
