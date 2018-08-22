export const Query = {
  // this is basically a dumb passthrough. In your app you would probly wanna do something else
  users (p, { where }, { db }, info) {
    return db.query.users({ where }, info)
  }
}
