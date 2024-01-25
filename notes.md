# react-redux
$ npm install @reduxjs/toolkit react-redux

 --> src/store create floder and place an index.js in it.(we can  create Redux Store)

 # thunks means actions
 #reducer means silces
 #If we will pass action to pages or compnents we need to use selectors
 # import the selector in 
  eg :- const dispatch = useDispatch();

   const posts = useSelector(selectFeedPosts(name of selctorfunction));
 
 #dispatch (fetchposts) thunks inside the UseEffect
  eg:- useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);
  # mapp over the varialble you assign to the selector like posts.name ...
   eg:-  {!posts.length
      ? "Loading"
      : posts.map(post => <p>{post.title}</p>) //you can expand this
    }
     postsFetched: (state, action) => {
    console.log("postsFetched action", action);
    // We will get 5 posts at a time so it's important we keep the posts
    // currently in the state and add the new incoming ones at the end of the array
    state.posts = [...state.posts, ...action.payload];
    state.loading = false;
  },