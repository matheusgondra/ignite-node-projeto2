import { knex as setupKex } from 'knex'

export const knex = setupKex({
  client: 'sqlite',
  connection: {
    filename: './temp/app.db',
  },
})
