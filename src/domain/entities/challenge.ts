// core
import { Entity } from '@/core/domain';

type ChallengerProps = {
  title: string;
  instructionsUrl: string;
  createdAt?: Date;
};

class Challenge extends Entity<ChallengerProps> {
  private constructor(props: ChallengerProps, id?: string) {
    super(props, id);
  }

  public static create(props: ChallengerProps, id?: string): Challenge {
    return new Challenge({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id);
  }
}

export { Challenge };
