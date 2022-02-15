// entities
import { Submission } from '@/domain/entities/submission';
import { Challenge } from '@/domain/entities/challenge';

// useCase
import { CreateSubmissionUseCase } from './createSubmissionUseCase';

// repositories
import {
  StudentsRepositoryInMemory,
  ChallengesRepositoryInMemory,
} from '@/tests/repositories';
import { Student } from '@/domain/entities/student';

describe('createSubmission', () => {
  let studentsRepositoryInMemory: StudentsRepositoryInMemory;
  let challengesRepositoryInMemory: ChallengesRepositoryInMemory;

  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    challengesRepositoryInMemory = new ChallengesRepositoryInMemory();
  });

  it('should by able to create a new challenge submission', async () => {
    const student = Student.create({
      name: 'student1',
      email: 'studen-email@gmail.com',
    });

    const challenge = Challenge.create({
      title: 'challenge 1',
      instructionsUrl: 'url',
    });

    studentsRepositoryInMemory.students.push(student);
    challengesRepositoryInMemory.challenges.push(challenge);

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
