// entities
import { Submission } from '@/domain/entities/submission';

// repository
import { StudentsRepository } from '@/application/repositories/StudentsRepository';
import { ChallengesRepository } from '@/application/repositories/ChallengesRepository';

type createSubmissionDTO = {
  studentId: string;
  challengeId: string;
};

class CreateSubmissionUseCase {
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository
  ) {}

  async execute(data: createSubmissionDTO): Promise<Submission> {
    const student = await this.studentsRepository.findById(data.studentId);

    if (!student) {
      throw new Error('Student does not exists');
    }

    const challenge = await this.challengesRepository.findById(data.challengeId);

    if (!challenge) {
      throw new Error('Challenge does not exists');
    }

    const submission = Submission.create({
      challengeId: data.challengeId,
      studentId: data.studentId,
    });

    return submission;
  }
}

export { CreateSubmissionUseCase };
