// entities
import { Challenge } from '@/domain/entities/challenge';

// repository
import { ChallengesRepository } from '@/application/repositories/ChallengesRepository';

class ChallengesRepositoryInMemory implements ChallengesRepository {
  public challenges: Challenge[] = [];

  findById(id: string): Promise<Challenge | null> {
    return new Promise((resolve) => {
      const challenge = this.challenges.find((challenge) => challenge.id === id);

      if (!challenge) {
        return null;
      }

      resolve(challenge);
    });
  }
}

export { ChallengesRepositoryInMemory };
