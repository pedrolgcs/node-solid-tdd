// core
import { Entity } from '@/core/domain';

type SubmissionProps = {
  challengeId: string;
  studentId: string;
  createdAt?: Date;
};

class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  public static create(props: SubmissionProps, id?: string): Submission {
    return new Submission(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }
}

export { Submission };
