interface MajorCredits {
  credits: number & { __brand: 'MajorCredits' };
}
interface MinorCredits {
  credits: number & { __brand: 'MinorCredits' };
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits  as number & {__brand: 'MajorCredits'},
  };
}
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits as number & {__brand: 'MinorCredits'},
  };
}
