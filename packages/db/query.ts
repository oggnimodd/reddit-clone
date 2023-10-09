import { prisma } from ".";

const subreddits = await prisma.subreddit.findMany({
  where: {
    creatorId: "652232636ab8f39b17efda48",
  },
  include: {
    creator: {
      select: {
        name: true,
      },
    },
  },
});

console.log(subreddits);
