const Post = require('./models/postModel')

const resolvers = {
    Query: {
        hello: () =>{
            return 'Hello World'
        },
        hello1: () =>{
            return 'Hello world1'
        },
        getAllPosts: () =>{

            let arrObj = [];
            for(let i = 0; i< 5; i++) {
                let obj = {
                    'id': 123+i,
                    'title': 'abc'+i,
                    'desc': 'desc1' +i
                }
                arrObj.push(obj)
            }
            return arrObj
        }
    },
    Mutation : {
        createPost: async (parent , args, context, info) => {
            const {title , desc } = args.post
            const post = new Post({title, desc})
            await post.save()
            return post
        }
    }

};

module.exports = resolvers