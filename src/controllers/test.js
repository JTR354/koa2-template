export let getTestData = (ctx) => {
  ctx.body = {
    code: 0,
    message: 'success',
    data: {
      a: 1,
      b: 2
    }
  }
}
