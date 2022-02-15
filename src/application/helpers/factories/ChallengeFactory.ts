// entities
import { Challenge } from '@/domain/entities/Challenge';

// builders
import { ChallengeBuilder } from '@/application/helpers/builders/ChallengeBuilder';

type ChallengeFields = {
  id?: string;
  title: string;
  instructionsUrl: string;
};

class ChallengeFactory {
  static defaultChallenge(): Challenge {
    return new ChallengeBuilder('challenge-id')
      .setTitle('title')
      .setInstructionsUrl('url')
      .build();
  }

  static createChallengeFromFields({
    id,
    title,
    instructionsUrl,
  }: ChallengeFields): Challenge {
    return new ChallengeBuilder(id)
      .setTitle(title)
      .setInstructionsUrl(instructionsUrl)
      .build();
  }

  static createRandomChallenges(count: number): Challenge[] {
    const challenges = [];

    for (let i = 0; i < count; i++) {
      challenges.push(
        new ChallengeBuilder()
          .setTitle(`title ${i}`)
          .setInstructionsUrl(`url ${i}`)
          .build()
      );
    }

    return challenges;
  }
}

export { ChallengeFactory };
