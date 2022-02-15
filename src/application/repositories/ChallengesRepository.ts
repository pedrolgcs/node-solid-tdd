// entities
import { Challenge } from '@/domain/entities/challenge';

interface ChallengesRepository {
  findById(id: string): Promise<Challenge | null>;
}

export { ChallengesRepository };
