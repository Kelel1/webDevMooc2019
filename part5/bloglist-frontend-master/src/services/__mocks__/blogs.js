const blogs = [

  {
    title: '555',
    author: 'Kern Eldren',
    url: 'www.digitalplumber.com',
    user: {
      username: 'root',
      id: '5d680c41332b07308b5312b1'
    },
    likes: 11,
    id: '5d81067cd68b630dab788173'
  },
  {
    title: 'kellykelll',
    author: 'Bill Hucks',
    url: 'www.scale.com',
    user: {
      username: 'root',
      id: '5d680c41332b07308b5312b1'
    },
    likes: 13,
    id: '5d810f64d68b630dab78817b'
  }

]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll }