// entities
import { Challenge } from '@/domain/entities/Challenge';

interface ChallengesRepository {
  findById(id: string): Promise<Challenge | null>;
}

export { ChallengesRepository };
