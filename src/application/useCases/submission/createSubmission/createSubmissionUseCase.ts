// entities
import { Submission } from '@/domain/entities/submission';

type createSubmissionDTO = {
  studentId: string;
  challengeId: string;
};

class CreateSubmissionUseCase {
  async execute(data: createSubmissionDTO): Promise<Submission> {
    const submission = Submission.create({
      challengeId: data.challengeId,
      studentId: data.studentId,
    });

    return submission;
  }
}

export { CreateSubmissionUseCase };
