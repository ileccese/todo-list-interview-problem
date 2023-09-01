import { rest } from "msw";

const tasks = [
  {
    id: 1,
    description: "cook dinner",
    completed: false
  },
  {
    id: 2,
    description: "clean room",
    completed: true
  },
  {
    id: 3,
    description: "respond to email",
    completed: false
  }
];

export const handlers = [
  rest.get("/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  })
];
