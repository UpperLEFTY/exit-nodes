
var Twitter = function() {
  this.userTweets = new Map()
  this.userFollowing = new Map()
  this.lastIndex = 1
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  let tweets = this.userTweets.get(userId)
  if (!tweets) {
    tweets = []
    this.userTweets.set(userId, tweets)
  }
  tweets.unshift({ id: tweetId, index: this.lastIndex })
  this.lastIndex = this.lastIndex + 1
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
 const followings = this.userFollowing.get(userId)
  let tweets = (this.userTweets.get(userId) || []).slice(0, 10)
  followings &&
    followings.forEach(uid => {
      if (uid === userId) return

      const userTweets = this.userTweets.get(uid)
      if (userTweets) {
        tweets = tweets.concat(userTweets)
      }
    })
  return tweets
    .sort((a, b) => b.index - a.index)
    .map(tweet => tweet.id)
    .slice(0, 10)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  let followings = this.userFollowing.get(followerId)
  if (!followings) {
    followings = new Set()
    this.userFollowing.set(followerId, followings)
  }
  followings.add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  const followings = this.userFollowing.get(followerId)
  followings && followings.delete(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */