export const part2 = (input: string) => {
  return input.split('\n\n').reduce((sum, group) => {
    const groupSize = group.split('\n').length;
    const allVotes = group.replace(/(\n|\s\r)/g, '');
    const uniqueVotes = new Set(allVotes);
    const voteCount = [...uniqueVotes].reduce((a, vote) => {
      return a + Number(allVotes.split(vote).length - 1 === groupSize);
    }, 0);

    return sum + voteCount;
  }, 0);
};
