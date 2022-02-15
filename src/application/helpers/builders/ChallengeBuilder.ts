import crypto from 'crypto';

// entities
import { Challenge } from '@/domain/entities/Challenge';

class ChallengeBuilder {
  private challenge: Challenge;

  constructor(id = crypto.randomUUID()) {
    this.challenge = Challenge.create(
      {
        title: 'title-challenge',
        instructionsUrl: 'url-challenge',
      },
      id
    );
  }

  public setTitle(title: string): this {
    this.challenge.props.title = title;
    return this;
  }

  public setInstructionsUrl(instructionsUrl: string): this {
    this.challenge.props.instructionsUrl = instructionsUrl;
    return this;
  }

  public build(): Challenge {
    return this.challenge;
  }
}

export { ChallengeBuilder };
