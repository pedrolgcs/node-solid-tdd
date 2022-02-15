// core
import { Entity } from '../../core/domain';

type ChallengerProps = {
  title: string;
  instructionsUrl: string;
  createdAt: Date;
};

class Challenger extends Entity<ChallengerProps> {
  private constructor(props: ChallengerProps, id?: string) {
    super(props, id);
  }

  public static create(props: ChallengerProps, id?: string): Challenger {
    return new Challenger(props, id);
  }
}

export { Challenger };
