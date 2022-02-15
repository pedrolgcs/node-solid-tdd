// entities
import { Challenge } from '@/domain/entities/Challenge';
import { Student } from '@/domain/entities/Student';

// factories
import {
  StudentFactory,
  ChallengeFactory,
} from '@/application/helpers/factories';

// useCase
import { CreateSubmissionUseCase } from './createSubmissionUseCase';

// repositories
import {
  StudentsRepositoryInMemory,
  ChallengesRepositoryInMemory,
} from '@/tests/repositories';

describe('createSubmission', () => {
  let studentsRepositoryInMemory: StudentsRepositoryInMemory;
  let challengesRepositoryInMemory: ChallengesRepositoryInMemory;
  let student: Student;
  let challenge: Challenge;

  beforeAll(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    challengesRepositoryInMemory = new ChallengesRepositoryInMemory();

    student = StudentFactory.defaultStudent();
    challenge = ChallengeFactory.defaultChallenge();

    studentsRepositoryInMemory.students.push(student);
    challengesRepositoryInMemory.challenges.push(challenge);
  });

  it('should by able to create a new challenge submission', async () => {
    const sut = new CreateSubmissionUseCase(
      studentsRepositoryInMemory,
      challengesRepositoryInMemory
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
