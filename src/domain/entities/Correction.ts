// core
import { Entity } from '@/core/domain';

type CorrectionProps = {
  grade: string;
  submissionId: string;
  createdAt: string;
};

class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }

  public static create(props: CorrectionProps, id?: string): Correction {
    return new Correction(props, id);
  }
}

export { Correction };
