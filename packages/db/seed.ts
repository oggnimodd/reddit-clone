import { prisma, Post, Prisma, Subreddit } from "./index";
import { faker } from "@faker-js/faker";
import { ObjectId } from "bson";

// Adding users
for (let i = 0; i < 10; i++) {
  await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    },
  });
}

const users = await prisma.user.findMany({});

// Adding subreddits
for (let i = 0; i < 5; i++) {
  const randomUser = users[Math.ceil(Math.random() * users.length) - 1];

  // Adding post
  const newSubreddit: Subreddit = {
    id: new ObjectId().toString(),
    name: faker.animal.rabbit().toLowerCase(),
    creatorId: randomUser.id,
    description: faker.lorem.sentence(),
  };

  await prisma.subreddit.create({
    data: newSubreddit,
  });
}

const subreddits = await prisma.subreddit.findMany({});

// Adding users
for (let i = 0; i < 20; i++) {
  const randomUser = users[Math.ceil(Math.random() * users.length) - 1];
  const subreddit =
    subreddits[Math.ceil(Math.random() * subreddits.length) - 1];

  // Adding post
  const newPost: Post = {
    id: new ObjectId().toString(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    authorId: randomUser.id,
    publised: Math.round(Math.random()) === 1 ? true : false,
    subredditId: subreddit.id,
  };

  await prisma.post.create({
    data: newPost,
  });
}
