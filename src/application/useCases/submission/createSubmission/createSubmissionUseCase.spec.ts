// useCase
import { CreateSubmissionUseCase } from './createSubmissionUseCase';

describe('createSubmission', () => {
  it('should by able to create a new challenge submission', async () => {
    const sut = new CreateSubmissionUseCase();

    const response = await sut.execute({
      studentId: 'some-student-id',
      challengeId: 'some-challenge-id',
    });

    expect(response).toBeTruthy();
  });
});
