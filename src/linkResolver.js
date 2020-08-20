const options = {
  linkResolver(doc) {
    if (doc.type === 'Blog') {
      return `/blog/${doc.uid}`;
    }
    return `${doc.type}`;
  },
}

module.exports = options